"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMetadataStorage_1 = require("../metadata/getMetadataStorage");
function createUnionType({ types, name, description }) {
    const unionMetadataSymbol = getMetadataStorage_1.getMetadataStorage().collectUnionMetadata({
        types,
        name,
        description,
    });
    return unionMetadataSymbol;
}
exports.createUnionType = createUnionType;
