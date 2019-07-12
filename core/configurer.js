// read user config

const path = require('path')

module.exports = () => {
    let cfg = require('../_config.json')
    let themepath = path.join(global.appRoot, "themes", cfg.theme)
    let sitepath = path.join(global.appRoot, "sites", cfg.site)

    return {
        theme: {
            name: cfg.theme,
            definition: path.join(themepath, `${cfg.theme}.js`),
            path: themepath,
            sasspath: path.join(themepath, "sass", "main.sass")
        },
        site: {
            name: cfg.site,
            definition: path.join(sitepath, `${cfg.site}.json`),
            path: sitepath
        }
    }
}