const menus = {
    main: `
    themeengine [command] <options>

    build .............. build a site from your theme
    version ............ show package version
    help ............... show help menu for a command`,

    build: `
    build <site> <theme>

    --location, -l ..... the location to use`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}