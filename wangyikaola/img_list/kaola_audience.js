(function() {
    window._vlion._audience = window._vlion._audience || {};
    window._vlion._audience.init = function() {
		
        window._vlion._audience.$All();
        window._vlion._audience.pusheven();
		window._vlion._audience.sendPOST();
    };
    window._vlion._audience.post = function(b) {
        var c = [b, window._vlion._main.getOtherpar()];
        var a = c.join("&");
        window._vlion._main.Loadjs(window._vlion.parameter.vlion_url() + a);
    };
    window._vlion._audience.serialize = function(e) {
         var b = [],g=[];
        for (var c = 0; c < e.length; c++) {
            var d = e[c].shift();
            var a = e[c];
            var f = "";
            f = window._vlion._audience.executeFun(window._vlion._audience[d], a);
            if (typeof(f) != "undefined" && f != "") {
                b.push(f)
            }
			if(d=="$logInit"){
            	g.push(b.join("&"));
            	b=[];
            }
        }
        for(var i=0;i<g.length;i++){
        	window._vlion._audience.post(g[i]);
        }
    };
    window._vlion._audience.$setGeneral = function(a) {
        var c = ["mp", "pageLeve", "uname", "uid"];
        var b = [window._vlion.parameter.mps()[a[0]], a[0], a[2], a[3]];
        return window._vlion._main.arraySerialize(c, b)
    };
    window._vlion._audience.$setCustom = function(a) {
        var c = ["pageLeve", "uname", "uid"];
        var b = [a[0], a[2], a[3]];
        return window._vlion._main.arraySerialize(c, b)
    };
    window._vlion._audience.$addCustomMp = function(a) {
        var c = ["mp"];
        var b = [a[0]];
        return window._vlion._main.arraySerialize(c, b)
    };
    window._vlion._audience.$addSearchResult = function(a) {
        var c = ["keyword", "total"];
        var b = [encodeURIComponent(a[0]), a[1]];
        return window._vlion._main.arraySerialize(c, b)
    };
    window._vlion._audience.$All = function() {
        window._vlion_mvp = window._vlion_mvp || [];
        _vlion_mvp.push(["$setGeneral", "all", "", "", ""]);
        _vlion_mvp.push(["$logInit"])
    };
    window._vlion._audience.executeFun = function(b, a) {
        if (b) {
            return b && b(a)
        }
    };
    window._vlion._audience.pusheven = function() {
        if (typeof(window._vlion_mvp) != "undefined" || window._vlion_mvp != null) {
            window._vlion._audience.serialize(_vlion_mvp)
        } else {
            window._vlion_mvp = window._vlion_mvp || [];
            window._vlion_mvp.push = function() {
                var e = false;
                var f = this.length >>> 0;
                for (var c = 0; c < arguments.length; c++) {
                    this[f] = arguments[c];
                    if (this[f] == "$logInit") {
                        e = true
                    }
                    f = f + 1 >>> 0
                }
                this.length = f;
                if (e) {
                    window._vlion._audience.serialize(_vlion_mvp)
                }
                return f
            }
        }
    };
	
	//xs statr
	window._vlion._audience.ifurl=function(){
		if(window.__WM_tag_params){
			return window.__WM_tag_params.pagetype;
		}else{
			return "other";
		}
	};
	window._vlion._audience.sendPOST = function() {
		var  b=window._vlion._audience.ifurl();
		var a = (("https:" === document.location.protocol) ? "https://": "http://");
		switch (b) {
		case "home":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Lhb&c=Q2");
			break;
		case "activity":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Mhb&c=Q2");
			break;
		case "category":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Nhb&c=Q2");
			break;
		case "product":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Ohb&c=Q2");
			break;
		case "cart":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Phb&c=Q2");
			break;
		case "orderConfrim":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Qhb&c=Q2");
			break;
		case "orderSuc":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Rhb&c=Q2");
			break;
		case "paySuc":
			window._vlion._main.Loadjs(a + "aw.kejet.net/t?p=Shb&c=Q2");
			break;
		default:
			break;
		}
	};
	//xs end
	
	
    window._vlion._audience.init()
})();