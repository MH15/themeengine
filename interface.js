// tagged template literals for all nodes


module.exports = {
    header: (literals, ...expressions) => {
        return passthrough("h1", literals, ...expressions)
    },
    subheader: (literals, ...expressions) => {
        return passthrough("h2", literals, ...expressions)
    },
    paragraph: (literals, ...expressions) => {
        return passthrough("p", literals, ...expressions)
    },
    image: (literals, ...expressions) => {
        return passthrough("p", literals, ...expressions)
    }
}


function passthrough(tagName, literals, ...expressions) {
    let string = ``
    string += `<${tagName}>`
    for (const [i, val] of expressions.entries()) {
        string += literals[i] + val
    }
    string += literals[literals.length - 1]
    string += `</${tagName}>`
    return string
}