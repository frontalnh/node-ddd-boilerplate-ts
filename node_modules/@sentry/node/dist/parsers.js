"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("@sentry/utils/fs");
var path_1 = require("@sentry/utils/path");
var string_1 = require("@sentry/utils/string");
var stacktrace = require("stack-trace");
var LINES_OF_CONTEXT = 7;
/** JSDoc */
function getFunction(frame) {
    try {
        return frame.getFunctionName() || frame.getTypeName() + "." + (frame.getMethodName() || '<anonymous>');
    }
    catch (e) {
        // This seems to happen sometimes when using 'use strict',
        // stemming from `getTypeName`.
        // [TypeError: Cannot read property 'constructor' of undefined]
        return '<anonymous>';
    }
}
var mainModule = ((require.main && require.main.filename && path_1.dirname(require.main.filename)) ||
    global.process.cwd()) + "/";
/** JSDoc */
function getModule(filename, base) {
    if (!base) {
        base = mainModule; // tslint:disable-line:no-parameter-reassignment
    }
    // It's specifically a module
    var file = path_1.basename(filename, '.js');
    filename = path_1.dirname(filename); // tslint:disable-line:no-parameter-reassignment
    var n = filename.lastIndexOf('/node_modules/');
    if (n > -1) {
        // /node_modules/ is 14 chars
        return filename.substr(n + 14).replace(/\//g, '.') + ":" + file;
    }
    // Let's see if it's a part of the main module
    // To be a part of main module, it has to share the same base
    n = (filename + "/").lastIndexOf(base, 0);
    if (n === 0) {
        var moduleName = filename.substr(base.length).replace(/\//g, '.');
        if (moduleName) {
            moduleName += ':';
        }
        moduleName += file;
        return moduleName;
    }
    return file;
}
/** JSDoc */
function readSourceFiles(filenames) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sourceFiles;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // we're relying on filenames being de-duped already
                    if (filenames.length === 0) {
                        return [2 /*return*/, {}];
                    }
                    sourceFiles = {};
                    return [4 /*yield*/, Promise.all(filenames.map(function (filename) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var content, _1;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, fs_1.readFileAsync(filename)];
                                    case 1:
                                        content = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _1 = _a.sent();
                                        // unsure what to add here as the file is unreadable
                                        content = null;
                                        return [3 /*break*/, 3];
                                    case 3:
                                        if (typeof content === 'string') {
                                            sourceFiles[filename] = content;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, sourceFiles];
            }
        });
    });
}
/** JSDoc */
function extractStackFromError(error) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var stack;
        return tslib_1.__generator(this, function (_a) {
            stack = stacktrace.parse(error);
            if (!stack) {
                return [2 /*return*/, []];
            }
            return [2 /*return*/, stack];
        });
    });
}
exports.extractStackFromError = extractStackFromError;
/** JSDoc */
function parseStack(stack) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var filesToRead, frames, _2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filesToRead = [];
                    frames = stack.map(function (frame) {
                        var parsedFrame = {
                            colno: frame.getColumnNumber(),
                            filename: frame.getFileName() || '',
                            function: getFunction(frame),
                            lineno: frame.getLineNumber(),
                        };
                        var isInternal = frame.isNative() ||
                            (parsedFrame.filename &&
                                !parsedFrame.filename.startsWith('/') &&
                                !parsedFrame.filename.startsWith('.') &&
                                parsedFrame.filename.indexOf(':\\') !== 1);
                        // in_app is all that's not an internal Node function or a module within node_modules
                        // note that isNative appears to return true even for node core libraries
                        // see https://github.com/getsentry/raven-node/issues/176
                        parsedFrame.in_app =
                            !isInternal && parsedFrame.filename !== undefined && !parsedFrame.filename.includes('node_modules/');
                        // Extract a module name based on the filename
                        if (parsedFrame.filename) {
                            parsedFrame.module = getModule(parsedFrame.filename);
                            if (!isInternal) {
                                filesToRead.push(parsedFrame.filename);
                            }
                        }
                        return parsedFrame;
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, addPrePostContext(filesToRead, frames)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    _2 = _a.sent();
                    // This happens in electron for example where we are not able to read files from asar.
                    // So it's fine, we recover be just returning all frames without pre/post context.
                    return [2 /*return*/, frames];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.parseStack = parseStack;
/**
 * This function tries to read the source files + adding pre and post context (source code)
 * to a frame.
 * @param filesToRead string[] of filepaths
 * @param frames StackFrame[] containg all frames
 */
function addPrePostContext(filesToRead, frames) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sourceFiles;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readSourceFiles(filesToRead)];
                case 1:
                    sourceFiles = _a.sent();
                    return [2 /*return*/, frames.map(function (frame) {
                            if (frame.filename && sourceFiles[frame.filename]) {
                                try {
                                    var lines = sourceFiles[frame.filename].split('\n');
                                    frame.pre_context = lines
                                        .slice(Math.max(0, (frame.lineno || 0) - (LINES_OF_CONTEXT + 1)), (frame.lineno || 0) - 1)
                                        .map(function (line) { return string_1.snipLine(line, 0); });
                                    frame.context_line = string_1.snipLine(lines[(frame.lineno || 0) - 1], frame.colno || 0);
                                    frame.post_context = lines
                                        .slice(frame.lineno || 0, (frame.lineno || 0) + LINES_OF_CONTEXT)
                                        .map(function (line) { return string_1.snipLine(line, 0); });
                                }
                                catch (e) {
                                    // anomaly, being defensive in case
                                    // unlikely to ever happen in practice but can definitely happen in theory
                                }
                            }
                            return frame;
                        })];
            }
        });
    });
}
/** JSDoc */
function getExceptionFromError(error) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var name, stack, frames;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = error.name || error.constructor.name;
                    return [4 /*yield*/, extractStackFromError(error)];
                case 1:
                    stack = _a.sent();
                    return [4 /*yield*/, parseStack(stack)];
                case 2:
                    frames = _a.sent();
                    return [2 /*return*/, {
                            stacktrace: {
                                frames: prepareFramesForEvent(frames),
                            },
                            type: name,
                            value: error.message,
                        }];
            }
        });
    });
}
exports.getExceptionFromError = getExceptionFromError;
/** JSDoc */
function parseError(error) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1, _a, _b, name, exception, event, errorKeys, extraErrorInfo, errorKeys_1, errorKeys_1_1, key;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    name = error.name || error.constructor.name;
                    return [4 /*yield*/, getExceptionFromError(error)];
                case 1:
                    exception = _c.sent();
                    event = {
                        exception: {
                            values: [exception],
                        },
                        message: name + ": " + (error.message || '<no message>'),
                    };
                    errorKeys = Object.keys(error).filter(function (key) { return !(key in ['name', 'message', 'stack', 'domain']); });
                    if (errorKeys.length) {
                        extraErrorInfo = {};
                        try {
                            for (errorKeys_1 = tslib_1.__values(errorKeys), errorKeys_1_1 = errorKeys_1.next(); !errorKeys_1_1.done; errorKeys_1_1 = errorKeys_1.next()) {
                                key = errorKeys_1_1.value;
                                extraErrorInfo[key] = error[key];
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (errorKeys_1_1 && !errorKeys_1_1.done && (_a = errorKeys_1.return)) _a.call(errorKeys_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        event.extra = (_b = {},
                            _b[name] = extraErrorInfo,
                            _b);
                    }
                    return [2 /*return*/, event];
            }
        });
    });
}
exports.parseError = parseError;
/** JSDoc */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].function || '';
    if (firstFrameFunction.includes('captureMessage') || firstFrameFunction.includes('captureException')) {
        localStack = localStack.slice(1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack.reverse();
}
exports.prepareFramesForEvent = prepareFramesForEvent;
//# sourceMappingURL=parsers.js.map