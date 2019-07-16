// The 0th Theme!

module.exports = {
    heading: (props) => {
        let style = collapseStyles(props.style)
        return `<h1 data-id="${props.id}" class="heading--default" style="${style}">${props.text}</h1>`
    },
    subheading: (props) => {
        let style = collapseStyles(props.style)
        return `<h2 data-id="${props.id}" class="subheading--default" style="${style}">${props.text}</h2>`
    },
    paragraph: (props) => {
        let style = collapseStyles(props.style)
        return `<p data-id="${props.id}" class="paragraph--default" style="${style}">${props.text}</p>`
    },
    button: (props) => {
        let style = collapseStyles(props.style)
        return `<button data-id="${props.id}" class="button--default" style="${style}">${props.text}</button>`
    },
    image: (props) => {
        return `<div data-id="${props.id}" class="image--default">
            <img src="${props.src}" alt="${props.text}" width="100%" height="100%"/>
        </div>`
    },
    youtube: (props) => {
        return `<button data-id="${props.id}" class="button--default">${props.text}</button>`
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
