// The 0th Theme!

const interface = require("../../interface")

module.exports = {
    heading: (content, props) => {
        // this is the simplest implementation of a node
        return interface.heading(content, props)
    },
    subheading: (content, props) => {
        // this is the simplest implementation of a node
        return interface.subheading(content, props)
    },
    paragraph: (content) => {
        // this is the simplest implementation of a node
        return interface.paragraph`${content}`
    },
    image: (content) => {
        // this is the simplest implementation of a node
        return interface.image`${content}`
    },
    image: (content) => {
        // this is the simplest implementation of a node
        return interface.image`${content}`
    }
}
