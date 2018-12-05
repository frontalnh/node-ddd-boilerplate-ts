"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines an index (most likely compound) for this schema.
 * @param options Options to pass to MongoDB driver's createIndex() function
 */
exports.index = (fields, options) => {
    return (constructor) => {
        const indices = Reflect.getMetadata('typegoose:indices', constructor) || [];
        indices.push({ fields, options });
        Reflect.defineMetadata('typegoose:indices', indices, constructor);
    };
};
//# sourceMappingURL=index.js.map