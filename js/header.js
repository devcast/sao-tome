;(function (_self, _document) {
    'use strict'

    var avatar = document.querySelector('.masthead-avatar')
    var colors = new ColorThief()
    var palette = colors.getPalette(avatar, 4)
    var lines = document.querySelectorAll('.masthead-svg [fill]')
    var range = Math.ceil(lines.length / palette.length)

    var currentColor = 0
    each(lines, function (line, index) {
        if (index % range === 9) { currentColor++ }

        line.setAttribute('fill', getRGB(palette[currentColor]))
    })

    // return a formated rgb(0, 0, 0) based on array [r,g,b]
    function getRGB(rgb) {
        return 'rgb('+rgb[0]+', '+rgb[1]+', '+rgb[2]+')'
    }
}(self, document))
