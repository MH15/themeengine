// The 0th Theme!

const interface = require("../../interface")

module.exports = {
    header: (content) => {
        // this is the simplest implementation of a node
        return interface.header`${content}`
    },
    subheader: (content) => {
        // this is the simplest implementation of a node
        return interface.subheader`${content}`
    },
    paragraph: (content) => {
        // this is the simplest implementation of a node
        return interface.paragraph`${content}`
    },
    image: (content) => {
        // this is the simplest implementation of a node
        return interface.image`${content}`
    }
}
