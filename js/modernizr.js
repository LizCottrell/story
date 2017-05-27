!(function (e, t, n) {
  function r (e, t) {
    return typeof e === t
  }

  function o () {
    var e, t, n, o, a, i, s
    for (var l in g) {
      if (g.hasOwnProperty(l)) {
        if (e = [], t = g[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) { for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase()) }
        for (o = r(t.fn, 'function') ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split('.'), s.length === 1 ? w[s[0]] = o : (!w[s[0]] || w[s[0]] instanceof Boolean || (w[s[0]] = new Boolean(w[s[0]])), w[s[0]][s[1]] = o), b.push((o ? '' : 'no-') + s.join('-'))
      }
    }
  }

  function a (e) {
    var t = S.className,
      n = w._config.classPrefix || ''
    if (C && (t = t.baseVal), w._config.enableJSClass) {
      var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)')
      t = t.replace(r, '$1' + n + 'js$2')
    }
    w._config.enableClasses && (t += ' ' + n + e.join(' ' + n), C ? S.className.baseVal = t : S.className = t)
  }

  function i (e, t) {
    if (typeof e === 'object') { for (var n in e) E(e, n) && i(n, e[n]) } else {
      e = e.toLowerCase()
      var r = e.split('.'),
        o = w[r[0]]
      if (r.length == 2 && (o = o[r[1]]), typeof o !== 'undefined') return w
      t = typeof t === 'function' ? t() : t, r.length == 1 ? w[r[0]] = t : (!w[r[0]] || w[r[0]] instanceof Boolean || (w[r[0]] = new Boolean(w[r[0]])), w[r[0]][r[1]] = t), a([(t && t != 0 ? '' : 'no-') + r.join('-')]), w._trigger(e, t)
    }
    return w
  }

  function s (e, t) {
    return !!~('' + e).indexOf(t)
  }

  function l () {
    return typeof t.createElement !== 'function' ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0]) : t.createElement.apply(t, arguments)
  }

  function c () {
    var e = t.body
    return e || (e = l(C ? 'svg' : 'body'), e.fake = !0), e
  }

  function u (e, n, r, o) {
    var a, i, s, u, f = 'modernizr',
      d = l('div'),
      p = c()
    if (parseInt(r, 10)) { for (; r--;) s = l('div'), s.id = o ? o[r] : f + (r + 1), d.appendChild(s) }
    return a = l('style'), a.type = 'text/css', a.id = 's' + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = '', p.style.overflow = 'hidden', u = S.style.overflow, S.style.overflow = 'hidden', S.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = u, S.offsetHeight) : d.parentNode.removeChild(d), !!i
  }

  function f (e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return '-' + t.toLowerCase()
    }).replace(/^ms-/, '-ms-')
  }

  function d (t, r) {
    var o = t.length
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--;) { if (e.CSS.supports(f(t[o]), r)) return !0 }
      return !1
    }
    if ('CSSSupportsRule' in e) {
      for (var a = []; o--;) a.push('(' + f(t[o]) + ':' + r + ')')
      return a = a.join(' or '), u('@supports (' + a + ') { #modernizr { position: absolute; } }', function (e) {
        return getComputedStyle(e, null).position == 'absolute'
      })
    }
    return n
  }

  function p (e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, '')
  }

  function m (e, t, o, a) {
    function i () {
      u && (delete x.style, delete x.modElem)
    }
    if (a = r(a, 'undefined') ? !1 : a, !r(o, 'undefined')) {
      var c = d(e, o)
      if (!r(c, 'undefined')) return c
    }
    for (var u, f, m, A, h, v = ['modernizr', 'tspan']; !x.style;) u = !0, x.modElem = l(v.shift()), x.style = x.modElem.style
    for (m = e.length, f = 0; m > f; f++) {
      if (A = e[f], h = x.style[A], s(A, '-') && (A = p(A)), x.style[A] !== n) {
        if (a || r(o, 'undefined')) return i(), t == 'pfx' ? A : !0
        try {
          x.style[A] = o
        } catch (g) {}
        if (x.style[A] != h) return i(), t == 'pfx' ? A : !0
      }
    }
    return i(), !1
  }

  function A (e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }

  function h (e, t, n) {
    var o
    for (var a in e) { if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, 'function') ? A(o, n || t) : o) }
    return !1
  }

  function v (e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + ' ' + N.join(i + ' ') + i).split(' ')
    return r(t, 'string') || r(t, 'undefined') ? m(s, t, o, a) : (s = (e + ' ' + B.join(i + ' ') + i).split(' '), h(s, t, n))
  }
  var g = [],
    y = {
      _version: '3.3.1',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, t) {
        var n = this
        setTimeout(function () {
          t(n[e])
        }, 0)
      },
      addTest: function (e, t, n) {
        g.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function (e) {
        g.push({
          name: null,
          fn: e
        })
      }
    },
    w = function () {}
  w.prototype = y, w = new w()
  var E, b = [],
    S = t.documentElement,
    C = S.nodeName.toLowerCase() === 'svg'
  !(function () {
    var e = {}.hasOwnProperty
    E = r(e, 'undefined') || r(e.call, 'undefined') ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], 'undefined')
    } : function (t, n) {
      return e.call(t, n)
    }
  }()), y._l = {}, y.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), w.hasOwnProperty(e) && setTimeout(function () {
      w._trigger(e, w[e])
    }, 0)
  }, y._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e]
      setTimeout(function () {
        var e, r
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, w._q.push(function () {
    y.addTest = i
  })
  C || !(function (e, t) {
    function n (e, t) {
      var n = e.createElement('p'),
        r = e.getElementsByTagName('head')[0] || e.documentElement
      return n.innerHTML = 'x<style>' + t + '</style>', r.insertBefore(n.lastChild, r.firstChild)
    }

    function r () {
      var e = C.elements
      return typeof e === 'string' ? e.split(' ') : e
    }

    function o (e, t) {
      var n = C.elements
      typeof n !== 'string' && (n = n.join(' ')), typeof e !== 'string' && (e = e.join(' ')), C.elements = n + ' ' + e, c(t)
    }

    function a (e) {
      var t = S[e[E]]
      return t || (t = {}, b++, e[E] = b, S[b] = t), t
    }

    function i (e, n, r) {
      if (n || (n = t), h) return n.createElement(e)
      r || (r = a(n))
      var o
      return o = r.cache[e] ? r.cache[e].cloneNode() : w.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || y.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
    }

    function s (e, n) {
      if (e || (e = t), h) return e.createDocumentFragment()
      n = n || a(e)
      for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i])
      return o
    }

    function l (e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return C.shivMethods ? i(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ');return n}')(C, t.frag)
    }

    function c (e) {
      e || (e = t)
      var r = a(e)
      return !C.shivCSS || A || r.hasCSS || (r.hasCSS = !!n(e, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}')), h || l(e, r), e
    }

    function u (e) {
      for (var t, n = e.getElementsByTagName('*'), o = n.length, a = RegExp('^(?:' + r().join('|') + ')$', 'i'), i = []; o--;) t = n[o], a.test(t.nodeName) && i.push(t.applyElement(f(t)))
      return i
    }

    function f (e) {
      for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(x + ':' + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue)
      return o.style.cssText = e.style.cssText, o
    }

    function d (e) {
      for (var t, n = e.split('{'), o = n.length, a = RegExp('(^|[\\s,>+~])(' + r().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'), i = '$1' + x + '\\:$2'; o--;) t = n[o] = n[o].split('}'), t[t.length - 1] = t[t.length - 1].replace(a, i), n[o] = t.join('}')
      return n.join('{')
    }

    function p (e) {
      for (var t = e.length; t--;) e[t].removeNode()
    }

    function m (e) {
      function t () {
        clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), r = null
      }
      var r, o, i = a(e),
        s = e.namespaces,
        l = e.parentWindow
      return !_ || e.printShived ? e : (typeof s[x] === 'undefined' && s.add(x), l.attachEvent('onbeforeprint', function () {
        t()
        for (var a, i, s, l = e.styleSheets, c = [], f = l.length, p = Array(f); f--;) p[f] = l[f]
        for (; s = p.pop();) {
          if (!s.disabled && T.test(s.media)) {
            try {
              a = s.imports, i = a.length
            } catch (m) {
              i = 0
            }
            for (f = 0; i > f; f++) p.push(a[f])
            try {
              c.push(s.cssText)
            } catch (m) {}
          }
        }
        c = d(c.reverse().join('')), o = u(e), r = n(e, c)
      }), l.attachEvent('onafterprint', function () {
        p(o), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(t, 500)
      }), e.printShived = !0, e)
    }
    var A, h, v = '3.7.3',
      g = e.html5 || {},
      y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      w = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      E = '_html5shiv',
      b = 0,
      S = {}
    !(function () {
      try {
        var e = t.createElement('a')
        e.innerHTML = '<xyz></xyz>', A = 'hidden' in e, h = e.childNodes.length == 1 || (function () {
          t.createElement('a')
          var e = t.createDocumentFragment()
          return typeof e.cloneNode === 'undefined' || typeof e.createDocumentFragment === 'undefined' || typeof e.createElement === 'undefined'
        }())
      } catch (n) {
        A = !0, h = !0
      }
    }())
    var C = {
      elements: g.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
      version: v,
      shivCSS: g.shivCSS !== !1,
      supportsUnknownElements: h,
      shivMethods: g.shivMethods !== !1,
      type: 'default',
      shivDocument: c,
      createElement: i,
      createDocumentFragment: s,
      addElements: o
    }
    e.html5 = C, c(t)
    var T = /^$|\b(?:all|print)\b/,
      x = 'html5shiv',
      _ = !h && (function () {
        var n = t.documentElement
        return !(typeof t.namespaces === 'undefined' || typeof t.parentWindow === 'undefined' || typeof n.applyElement === 'undefined' || typeof n.removeNode === 'undefined' || typeof e.attachEvent === 'undefined')
      }())
    C.type += ' print', C.shivPrint = m, m(t), typeof module === 'object' && module.exports && (module.exports = C)
  }(typeof e !== 'undefined' ? e : this, t))
  var T = {
    elem: l('modernizr')
  }
  w._q.push(function () {
    delete T.elem
  })
  var x = {
    style: T.elem.style
  }
  w._q.unshift(function () {
    delete x.style
  })
  y.testProp = function (e, t, r) {
    return m([e], n, t, r)
  }
  w.addTest('svg', !!t.createElementNS && !!t.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect), w.addAsyncTest(function () {
    function e (e, t, n) {
      function r (t) {
        var r = t && t.type === 'load' ? o.width == 1 : !1,
          a = e === 'webp'
        i(e, a ? new Boolean(r) : r), n && n(t)
      }
      var o = new Image()
      o.onerror = r, o.onload = r, o.src = t
    }
    var t = [{
        uri: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
        name: 'webp'
      }, {
        uri: 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
        name: 'webp.alpha'
      }, {
        uri: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
        name: 'webp.animation'
      }, {
        uri: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
        name: 'webp.lossless'
      }],
      n = t.shift()
    e(n.name, n.uri, function (n) {
      if (n && n.type === 'load') { for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri) }
    })
  }), w.addTest('json', 'JSON' in e && 'parse' in JSON && 'stringify' in JSON)
  var _ = 'Moz O ms Webkit',
    N = y._config.usePrefixes ? _.split(' ') : []
  y._cssomPrefixes = N
  var B = y._config.usePrefixes ? _.toLowerCase().split(' ') : []
  y._domPrefixes = B, y.testAllProps = v
  var U = function (t) {
    var r, o = prefixes.length,
      a = e.CSSRule
    if (typeof a === 'undefined') return n
    if (!t) return !1
    if (t = t.replace(/^@/, ''), r = t.replace(/-/g, '_').toUpperCase() + '_RULE', r in a) return '@' + t
    for (var i = 0; o > i; i++) {
      var s = prefixes[i],
        l = s.toUpperCase() + '_' + r
      if (l in a) return '@-' + s.toLowerCase() + '-' + t
    }
    return !1
  }
  y.atRule = U
  var j = y.prefixed = function (e, t, n) {
    return e.indexOf('@') === 0 ? U(e) : (e.indexOf('-') != -1 && (e = p(e)), t ? v(e, t, n) : v(e, 'pfx'))
  }
  w.addTest('fullscreen', !(!j('exitFullscreen', t, !1) && !j('cancelFullScreen', t, !1))), w.addTest('video', function () {
    var e = l('video'),
      t = !1
    try {
      (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''))
    } catch (n) {}
    return t
  }), o(), a(b), delete y.addTest, delete y.addAsyncTest
  for (var P = 0; P < w._q.length; P++) w._q[P]()
  e.Modernizr = w
}(window, document))
