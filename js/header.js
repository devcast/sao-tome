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

        line.setAttribute('fill', toRGB(palette[currentColor]))
    })
}(self, document))
