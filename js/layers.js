addLayer("p", {
    name: "points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
    }},
    color: "#4BDC13",
    resource: "Points",
    baseResource: "Points",
    upgrades: {
        rows: 9,
        cols: 9,
        11: {
            name: "Where it Begins",
            description: "Begin generating Points",
            cost: new Decimal(0),
            currencyInternalName: "Points",
            currencyDisplayName: "Points",
        },
        12: {
            name: "The First Boost",
            description: "Double your Point gain",
            cost: new Decimal(7.5),
            currencyInternalName: "points",
            currencyDisplayName: "points",
        },
        13: {
            name: "Beginner Boost",
            description: "x1.5 your Point gain",
            cost: new Decimal(20),
            currencyInternalName: "points",
            currencyDisplayName: "points",
        },
        14: {
            name: "Advanced Boost",
            description: "Boost your Point gain based on Points",
            cost: new Decimal(35),
            effect() {
                return player.points.log(7).add(1)
            },
            effectDisplay() { return format(this.effect()) },
            currencyInternalName: "points",
            currencyDisplayName: "points",
        },
    },

    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})
