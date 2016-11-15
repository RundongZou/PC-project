(function() {
    window._vlion = window._vlion || {};
    window._vlion.parameter = {
        tid: "354",
        postURL: "dmp.kejet.net",
        audienceJS: "kaola_audience.js",
        version: "2.4",
        vlion_url: function() {
            return (("https:" === document.location.protocol) ? "https://": "http://") + this.postURL + "/j?"
        },
        sudienceUrl: function() {
            return (("https:" === document.location.protocol) ? "https://": "http://") + this.postURL + "/ad/" + this.audienceJS
        },
        mps: function() {
            var a = {
                all: this.tid + "0101",
                index: this.tid + "0102",
                list: this.tid + "0103",
                goods: this.tid + "0104",
                cart: this.tid + "0105",
                add_cart: this.tid + "0106",
                order_submit: this.tid + "0107",
                order_success: this.tid + "0108",
                register: this.tid + "0109",
                login: this.tid + "0110",
                activity: this.tid + "0111",
                search: this.tid + "0112",
                download: this.tid + "0113",
                consult: this.tid + "0114"
            };
            return a
        }
    };
    window._vlion._main = window._vlion._main || {};
    window._vlion._main.init = function() {
        window._vlion._main.getPost();
        window._vlion._main.delayLoad();
        window._vlion._main.Loadjs(window._vlion.parameter.sudienceUrl())
    };
    window._vlion._main.delayLoad = function() {
        window._vlion = window._vlion || [];
        window._vlion.push = function() {
            var g = false;
            var h = this.length >>> 0;
            for (var e = 0; e < arguments.length; e++) {
                this[h] = arguments[e];
                if (this[h] == "$delayLoad") {
                    g = true
                }
                h = h + 1 >>> 0
            }
            this.length = h;
            if (g) {
                var i = this[0][0];
                window._vlion._main.getPost()
            }
            return h
        }
    };
    window._vlion._main.getPost = function() {
        if (typeof(window._vlion) != "undefined") {
            var a = "";
            if (typeof(_vlion.good) != "undefined") {
                a = window._vlion._main.getGoods()
            }
            if (typeof(_vlion.cart) != "undefined") {
                a = window._vlion._main.getCart()
            }
            if (typeof(_vlion.order_submit) != "undefined") {
                a = window._vlion._main.getOrder_submit()
            }
            if (typeof(_vlion.order_success) != "undefined") {
                a = window._vlion._main.getOrder_success()
            }
            if (a != "") {
                window._vlion._main.Loadjs(window._vlion.parameter.vlion_url() + a)
            }
        }
    };
    window._vlion._main.getRefer = function() {
        var a = document.referrer;
        a == location.href && (a = "");
        try {
            a = "" == a ? opener.location: a;
            a = "" == a ? "-": a
        } catch(b) {
            a = "-"
        }
        return a
    };
    window._vlion._main.RequestURL = function() {
        var a = window.location.href;
        a == location.href && (f = "");
        try {
            a = "" == a ? opener.location: a;
            a = "" == a ? "-": a
        } catch(b) {
            a = "-"
        }
        return a
    };
    window._vlion._main.getTitle = function() {
        var a = document.title;
        return a == "" ? "-": a
    };
    window._vlion._main.getRandom = function() {
        return Math.random()
    };
    window._vlion._main.getHost = function() {
        var a = document.location.host;
        return a == "" ? "-": a
    };
    window._vlion._main.getpxWH = function() {
        return window.screen.width + "*" + window.screen.height
    };
    window._vlion._main.getTimestamp = function() {
        var a = new Date().getTime();
        return a
    };
    window._vlion._main.Loadjs = function(c) {
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = c;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a)
    };
    window._vlion._main.itemInfo = function(a, b) {
        var k = [],
        i;
        switch (typeof b) {
        case "string":
            i = b;
            break;
        case "object":
            for (var c = 0; c < a.length; c++) {
                var j = b[a[c]] || "";
                j = j.toString();
                k.push(encodeURIComponent(j))
            }
            i = k.join(",");
            break;
        case "number":
            i = b;
            break;
        default:
            return i = ""
        }
        return i
    };
    window._vlion._main.getKeys = function(a) {
        if (Object.keys) {
            return Object.keys(a)
        }
        var b = [];
        for (var c in a) {
            if (a.hasOwnProperty(c)) {
                b.push(c)
            }
        }
        return b
    };
    window._vlion._main.serialize = function(m, a) {
        var n = window._vlion._main.getKeys(a);
        var i = [];
        var b = [];
        for (var c = 0; c < n.length; c++) {
            var o = false;
            for (var p = 0; p < m.length; p++) {
                if (m[p] == n[c]) {
                    o = true
                }
            }
            if (o == false) {
                i.push(n[c])
            }
        }
        for (var c = 0; c < i.length; c++) {
            b.push(i[c] + "=" + encodeURIComponent(a[i[c]]))
        }
        b = b.join("&");
        return b
    };
    window._vlion._main.arraySerialize = function(d, c) {
        var g = "";
        var h = [];
        for (var e = 0; e < d.length; e++) {
            var b = d[e] + "=" + c[e];
            h.push(b)
        }
        g += h.join("&");
        return g
    };
    window._vlion._main.getOtherpar = function() {
        var b = ["t", "r", "u", "title", "host", "px", "v", "rd"];
        var a = [window._vlion.parameter.tid, encodeURIComponent(window._vlion._main.getRefer()), encodeURIComponent(window._vlion._main.RequestURL()), encodeURIComponent(window._vlion._main.getTitle()), window._vlion._main.getHost(), window._vlion._main.getpxWH(), window._vlion.parameter.version, window._vlion._main.getRandom()];
        return window._vlion._main.arraySerialize(b, a)
    };
    window._vlion._main.getGoods = function() {
        var g = ["pcode", "name", "category", "category_id", "category_url", "price", "discount_price", "img_url", "productUrl", "brand", "brand_img", "brand_url", "warehouse", "soldOut", "extend"];
        var i = encodeURIComponent(_vlion._main.itemInfo(g, window._vlion.good.goods));
        var j = "";
        j = window._vlion._main.serialize(["goods", "0", "push"], window._vlion.good);
        var d = ["good", "mp", "pageLeve"];
        var c = [i, window._vlion.parameter.mps().goods, "goods"];
        var b = _vlion._main.arraySerialize(d, c);
        var k = [b, j, window._vlion._main.getOtherpar()];
        return k.join("&")
    };
    window._vlion._main.getCart = function() {
        var g = _vlion._main.serialize(["0", "push"], window._vlion.cart);
        var d = ["mp", "pageLeve"];
        var c = [window._vlion.parameter.mps().cart, "cart"];
        var b = _vlion._main.arraySerialize(d, c);
        var h = [b, g, window._vlion._main.getOtherpar()];
        return h.join("&")
    };
    window._vlion._main.getOrder_submit = function() {
        var g = _vlion._main.serialize([], window._vlion.order_submit);
        var d = ["mp", "pageLeve"];
        var c = [window._vlion.parameter.mps().order_submit, "order_submit"];
        var b = _vlion._main.arraySerialize(d, c);
        var h = [b, g, window._vlion._main.getOtherpar()];
        return h.join("&")
    };
    window._vlion._main.getOrder_success = function() {
        var g = _vlion._main.serialize([], window._vlion.order_success);
        var d = ["mp", "pageLeve"];
        var c = [window._vlion.parameter.mps().order_success, "order_success"];
        var b = _vlion._main.arraySerialize(d, c);
        var h = [b, g, window._vlion._main.getOtherpar()];
        return h.join("&")
    };
    window._vlion._main.init()
})();