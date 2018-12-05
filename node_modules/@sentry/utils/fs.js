"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var path_1 = require("path");
var _0777 = parseInt('0777', 8);
/**
 * Asynchronously creates the given directory.
 *
 * @param path A relative or absolute path to the directory.
 * @param mode The permission mode.
 * @returns A Promise that resolves when the path has been created.
 */
function readFileAsync(path) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            // We cannot use util.promisify here because that was only introduced in Node
            // 8 and we need to support older Node versions.
            return [2 /*return*/, new Promise(function (res, reject) {
                    fs_1.readFile(path, 'utf8', function (err, data) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            res(data);
                        }
                    });
                })];
        });
    });
}
exports.readFileAsync = readFileAsync;
/**
 * Asynchronously creates the given directory.
 *
 * @param path A relative or absolute path to the directory.
 * @param mode The permission mode.
 * @returns A Promise that resolves when the path has been created.
 */
function mkdirAsync(path, mode) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            // We cannot use util.promisify here because that was only introduced in Node
            // 8 and we need to support older Node versions.
            return [2 /*return*/, new Promise(function (res, reject) {
                    fs_1.mkdir(path, mode, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            res();
                        }
                    });
                })];
        });
    });
}
/**
 * Recursively creates the given path.
 *
 * @param path A relative or absolute path to create.
 * @returns A Promise that resolves when the path has been created.
 */
function mkdirp(path) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var mode, realPath, err_1, error;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mode = _0777 & ~process.umask();
                    realPath = path_1.resolve(path);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 2, , 6]);
                    return [2 /*return*/, mkdirAsync(realPath, mode)];
                case 2:
                    err_1 = _a.sent();
                    error = err_1;
                    if (!(error && error.code === 'ENOENT')) return [3 /*break*/, 4];
                    return [4 /*yield*/, mkdirp(path_1.dirname(realPath))];
                case 3:
                    _a.sent();
                    return [2 /*return*/, mkdirAsync(realPath, mode)];
                case 4:
                    try {
                        if (!fs_1.statSync(realPath).isDirectory()) {
                            throw err_1;
                        }
                    }
                    catch (_) {
                        throw err_1;
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.mkdirp = mkdirp;
/**
 * Synchronous version of {@link mkdirp}.
 *
 * @param path A relative or absolute path to create.
 */
function mkdirpSync(path) {
    // tslint:disable-next-line:no-bitwise
    var mode = _0777 & ~process.umask();
    var realPath = path_1.resolve(path);
    try {
        fs_1.mkdirSync(realPath, mode);
    }
    catch (err) {
        var error = err;
        if (error && error.code === 'ENOENT') {
            mkdirpSync(path_1.dirname(realPath));
            fs_1.mkdirSync(realPath, mode);
        }
        else {
            try {
                if (!fs_1.statSync(realPath).isDirectory()) {
                    throw err;
                }
            }
            catch (_) {
                throw err;
            }
        }
    }
}
exports.mkdirpSync = mkdirpSync;
//# sourceMappingURL=fs.js.map