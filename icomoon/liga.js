/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe903;',
            'house3': '&#xe903;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'music': '&#xe911;',
            'song': '&#xe911;',
            'film': '&#xe913;',
            'video2': '&#xe913;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'cogs': '&#xe995;',
            'gears': '&#xe995;',
            'download3': '&#xe9c7;',
            'save5': '&#xe9c7;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'feed2': '&#xea9b;',
            'rss': '&#xea9b;',
            'steam2': '&#xeaad;',
            'brand37': '&#xeaad;',
            'apple': '&#xeabe;',
            'brand53': '&#xeabe;',
            'windows8': '&#xeac2;',
            'brand57': '&#xeac2;',
            'skype': '&#xeac5;',
            'brand60': '&#xeac5;',
            'pinterest': '&#xead1;',
            'brand72': '&#xead1;',
            'chrome': '&#xead9;',
            'browser': '&#xead9;',
            'firefox': '&#xeada;',
            'browser2': '&#xeada;',
            'IE': '&#xeadb;',
            'browser3': '&#xeadb;',
            'safari': '&#xeadd;',
            'browser5': '&#xeadd;',
            'opera': '&#xeade;',
            'browser6': '&#xeade;',
            'css3': '&#xeae6;',
            'w3c3': '&#xeae6;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
