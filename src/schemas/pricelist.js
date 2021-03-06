module.exports = {
    id: 'pricelist',
    type: 'object',
    properties: {
        sku: {
            // sku of the item
            type: 'string'
        },
        name: {
            // name of the item
            type: 'string'
        },
        enabled: {
            // if we are actually trading the item
            type: 'boolean'
        },
        intent: {
            // 0 = buy, 1 = sell, 2 = bank
            type: 'integer',
            minimum: 0,
            maximum: 2
        },
        autoprice: {
            // if the item is autopriced or not
            type: 'boolean'
        },
        max: {
            // maximum stock
            type: 'integer',
            // -1 is infinite
            minimum: -1
        },
        min: {
            // minimum stock
            type: 'integer',
            minimum: 0
        },
        buy: {
            // buy price
            $ref: 'currencies'
        },
        sell: {
            // sell price
            $ref: 'currencies'
        },
        time: {
            // time when the price changed
            anyOf: [{
                type: 'number'
            }, {
                type: 'null'
            }]
        }
    },
    additionalProperties: false,
    required: ['sku', 'name', 'enabled', 'intent', 'autoprice', 'max', 'min', 'buy', 'sell', 'time']
};
