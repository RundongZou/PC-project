function move(element, target, fn) {
	clearInterval(element.timer); //一定要注意，刚开始就要清定时器!!!
	element.timer = setInterval(function() {
		var isComplete = true;
		for(var attr in target) {
			if(attr == 'opacity') {
				var current = Math.round(parseFloat(getstyle(element, attr)) * 100);
			} else {
				var current = Math.round(parseFloat(getstyle(element, attr)));
			}
			if(!current) {
				current = 0;
			}
			var speed = (target[attr] - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(current != target[attr]) {
				element.style[attr] = current + speed + "px";
				isComplete = false;
				if(current != target[attr]) {
					if(attr == 'opacity') {
						//关于透明度的一个兼容
						//ie 如果是ie，就直接用就行
						element.style[attr] = 'alpha(opacity:' + parseInt(current + speed) + ')'; //加current的原因：有一个渐变的过程
						//其他浏览器 如果是其他浏览器，还需要除以100
						element.style[attr] = (current + speed) / 100;
					} else {
						element.style[attr] = current + speed + "px";
					}
				}
			}
		}
		if(isComplete) {
			clearInterval(element.timer);
			if(fn) {
				fn();
			}
		}
	}, 30)
}

//获得当前的样式的值
function getstyle(dom, name) {
	if(dom.currentStyle) {
		return dom.currentStyle[name];
	} else {
		return window.getComputedStyle(dom, false)[name];
	}
}