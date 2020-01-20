const schemaManager = require('../../../lib/tf2-schema');

export default function () {
    // @ts-ignore
    const item = this.getItem();

    if (item === null) {
        return null;
    }

    return schemaManager.schema.getName(item);
};
