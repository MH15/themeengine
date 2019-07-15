// tagged template literals for all nodes


module.exports = {
    heading: (text, props) => {
        let style = collapseStyles(props.style)
        return `<h1 class="heading--default" style="${style}">${text}</h1>`
    },
    subheading: (text, props) => {
        let style = collapseStyles(props.style)
        return `<h2 class="subheading--default" style="${style}">${text}</h1>`
    },
    paragraph: (literals, ...expressions) => {
        return passthrough("p", literals, ...expressions)
    },
    image: (literals, ...expressions) => {
        return passthrough("p", literals, ...expressions)
    },
    youtube: (literals, ...expressions) => {
        return passthrough("div", literals, ...expressions)
    },
    button: (literals, ...expressions) => {
        return passthrough("button", literals, ...expressions)
    }
}


function collapseStyles(styles) {
    styleString = ""
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            styleString += `${key}: ${styles[key]};`
        }
    }
    return styleString
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