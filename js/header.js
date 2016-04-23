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

    /*
        Utility, iterate Objects, Lists, Arrays..
    */
    function each(list, transform) {
        var keys = Object.keys(list),
            index = 0,
            total

        // Check if 'length' is the last key
        // this is a guess to turn around this Safari bug
        // https://bugs.webkit.org/show_bug.cgi?id=152454
        if (keys.indexOf('length') === (keys.length - 1)) {
          keys.pop()
        }

        total = keys.length

        if (typeof transform !== 'function') {
          throw('The second param must be a function')
          return
        }

        for (; index < total; index++) {
          transform(list[keys[index]], keys[index])
        }
    }
}(self, document))
