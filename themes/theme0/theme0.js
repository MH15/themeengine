// The 0th Theme!

const interface = require("../../interface")

module.exports = {
    h1: (content) => {
        // this is the simplest implementation of a node
        return interface.h1`<icon /> ${content}`
    },
    h2: (content) => {
        // this is the simplest implementation of a node
        return interface.h2`<icon /> ${content}`
    },
    p: (content) => {
        // this is the simplest implementation of a node
        return interface.p`${content}`
    }
}