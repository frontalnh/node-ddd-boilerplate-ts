"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var models_1 = require("../services/models");
/**
 * Sets unique option true for annotated property.
 */
function Unique(target, propertyName) {
    models_1.addAttributeOptions(target, propertyName, {
        unique: true
    });
}
exports.Unique = Unique;
//# sourceMappingURL=Unique.js.map