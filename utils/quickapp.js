export const quickapp = (function(){
  if(typeof window !=='undefined'){
    !function(e) {
        "use strict";
        window.appRouter = function(e, t, a, o) {
            return a = a || {},
            o && (a.__PROMPT__ = 1, a.__NAME__ = o),
            n(e, t, a)
        },
        window.installShortcut = function(e, t) {
            return n("command", "", {
                type: "shortcut",
                package: e,
                name: t
            })
        },
        window.channelReady = function(e) {
            var n = {
                available: new Function,
                availableTimeout: 2e3
            };
            return "function" == typeof e ? n.available = e: "object" == typeof e &&
            function(e, n) {
                n = n || {};
                for (var t in n) e[t] = n[t]
            } (n, e),
            function(e) {
                var n = "http://thefatherofsalmon.com/images",
                t = document.createElement("img");
                if (t.style.width = "1px", t.style.height = "1px", t.style.display = "none", n += "/" + 1e20 * Math.random(), t.src = n, document.body.appendChild(t), t.complete) e.available.call(null, !0);
                else {
                    t.onload = function() {
                        clearTimeout(a),
                        e.available.call(null, !0)
                    };
                    var a = setTimeout(function() {
                        e.available.call(null, !1)
                    },
                    e.availableTimeout)
                }
            } (n)
        };
        function n(e, n, t) {
            var a = "http://thefatherofsalmon.com/",
            o = "";
            if (e && (a = a + "?i=" + e), n && (a = a + "&p=" + n),
            function(e) {
                if (!e) return ! 0;
                var n = void 0;
                for (n in e) return ! 1;
                return ! 0
            } (t)) {
                var i = window.location.search;
                i.indexOf("?") > -1 && (o = i.substr(1))
            } else {
                o = Object.keys(t).map(function(e) {
                    return e + "=" + encodeURIComponent(t[e])
                }).join("&")
            }
            "" !== o && (a = a + "&a=" + encodeURIComponent(o));
            var l = document.createElement("img");
            l.src = a,
            l.style.width = "1px",
            l.style.height = "1px",
            l.style.display = "none",
            document.body.appendChild(l)
        }

    } ();

    return {
      appRouter:window.appRouter,
      installShortcut:window.installShortcut,
      channelReady:window.channelReady
    }
  }
})()
