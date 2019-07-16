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
    paragraph: (content, props) => {
        // this is the simplest implementation of a node
        return interface.paragraph(content, props)
    },
    button: (content, props) => {
        // this is the simplest implementation of a node
        return interface.button(content, props)
    },
    image: (content, props) => {
        // this is the simplest implementation of a node
        return interface.image(content, props)
    },
    youtube: (content, props) => {
        // this is the simplest implementation of a node
        return interface.youtube(content, props)
    }
}
