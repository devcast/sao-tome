;(function (_self, _document) {
    'use strict'

    var avatar = document.querySelector('.masthead-avatar'),
        link = document.querySelector('[rel="shortcut icon"]'),
        img = document.createElement('img');

    img.onload = function () { link.href = getNewFavicon() };
    img.src = avatar.src;

    function getNewFavicon() {
        var colors = new ColorThief(),
            palette = colors.getColor(avatar),
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        canvas.height = canvas.width = 100

        ctx.font = 'bold 80px helvetica';
        ctx.fillStyle = toRGB(palette)
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(getShortName(), 50, 50, 100);

        return canvas.toDataURL('image/png');
    }

    function getShortName() {
        var name = document.querySelector('.masthead h1').textContent,
            shortName = name.split(' ');

        if (shortName.length > 1) {
            shortName = shortName[0][0] + shortName[1][0]
        } else {
            shortName = shortName[0][0]
        }

        return shortName
    }
}(self, document))
