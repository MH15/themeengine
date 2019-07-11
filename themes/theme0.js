// The 0th Theme!

const interface = require("../interface")

module.exports = {
    h2: (content) => {
        // this is the simplest implementation of a node
        return interface.h2`<icon /> ${content}`
    },
    p: (content) => {
        // this is the simplest implementation of a node
        return interface.p`${content}`
    }
}
