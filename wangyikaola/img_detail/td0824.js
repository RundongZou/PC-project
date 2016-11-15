(function(){
var _window=window,
    _document=document,
    x="location",
    Md = "https:" == _document.location.protocol ? "https://cm.1rtb.com": "http://cm.1rtb.com",
    Md1 = "https:" == _document.location.protocol ? "https://cm1.1rtb.com": "http://cm1.1rtb.com",
    Pd = function(url) {
        var host = Md + "/track",
        img = new Image(1, 1);
        img.src = host + url;
        img.onload = function() {
            loadJS("/html/mapping.html");           
        };
    },
    getProduct = function() {
        var product = '?' + serialize([], _window._ms_product)
        Pd(product)
    },
    getCart = function() {
        var cart = '?' + serialize([], _window._ms_cart)
        Pd(cart)
    },
    getOrder = function() {
        var order = '?' + serialize([], _window._ms_orderSuccess)
        Pd(order)
    },
    getPay = function() {
        var pay = '?' + serialize([], _window._ms_paySuccess)
        Pd(pay)
    },
    parm=function(){
        var stime = new Date().getTime() / 1000;
        var pvid = '';
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < 16; i++) {pvid += str[Math.floor(Math.random() * str.length)]}
        if (_window._mdsp) {
            var _mdsp=_window._mdsp;
            var url = "";
            var ro = _window.ro;
            for(var s=0;s<_mdsp.length;s++){
              for(var i=0;i<_mdsp[s].length;i++){
                //console.log(_mdsp[s][i]);
                url=url + _mdsp[s][i];
              }
            }
            var rs=Math.random();
            
            url = url + "&r="+rs + '&pvid=' + pvid + '&stime=' + stime 
            url = url + '&uuid=' + _document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1")
            url = url + "&src="+encodeURIComponent(_window.location.href);
            if(ro){
            	url = url + "&ro=" + encodeURIComponent(ro);
            }
            Pd(url);
            if(_window._ms_product != undefined) {
                getProduct()
            }
            if(_window._ms_cart != undefined) {
                getCart()
            }
            if(_window._ms_orderSuccess != undefined) {
                getOrder()
            }
            if(_window._ms_paySuccess != undefined) {
                getPay()
            }
        }
        _window.onbeforeunload = function() {
            var url_ = _document.location.protocol + '//cm.1rtb.com/track?',
                etime = new Date().getTime() / 1000,
                sType = 'leave',
                s = ro,
                ref = encodeURIComponent(_document.referrer),
                src = encodeURIComponent(_window.location.href),
                uuid = _document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
                url_ = url_ + "pvid=" + pvid + '&etime=' + etime + '&stime=' + stime  + '&sType=' + sType + '&ref=' + ref + '&src=' + src  + '&uuid=' + uuid + '&s=' + ro;
            img = new Image(1, 1);
            img.src = url_;
        }
    },
    loadJS = function (path) {
        var mtd = _document.createElement('iframe'); mtd.async = true;
        mtd.src = ('https:' == _document.location.protocol ? 'https://d.1rtb.com' : 'http://d.1rtb.com') + path;
        mtd.width = 0; mtd.height = 0; mtd.setAttribute("frameborder","0",0);
        mtd.style.display = "none";
        var s = _document.getElementsByTagName('body')[0]; s.parentNode.insertBefore(mtd, s);
    },
    getKeys = function(a) {
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
    },
    serialize = function(m, a){
        var n = getKeys(a);
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
    (function(){parm();})();
})();