window.resolution = (function (exports) {
	class Resolution {
		constructor() {
			this.scaleX = 1;
			this.scaleY = 1;
			this.loadNum = 0;
		}

		init(designWidth, designHeight, cb = new Function()) {
			this._designWidth = designWidth;
			this._designHeight = designHeight;
			this.designWidth = resolution.clientWidth / 2;
			this.designHeight = resolution.clientHeight / 2;
			this.container = document.querySelector('#GameDiv');
			const userAgent = window.navigator.userAgent;
			this.onMobile = userAgent.indexOf('Mobile') > -1;
			this.onSafari = userAgent.indexOf('Safari') > -1;
			window.addEventListener('resize', () => {
				this.resize();
			});
			window.addEventListener('orientationchange', e => {
				this.resize();
			});
			setTimeout(() => {
				this.resize();
				cb && cb();
			}, 0.05e3);
		}

		get clientWidth() {
			return window.innerWidth || document.body.clientWidth;
		}
		get clientHeight() {
			return (
				window.innerHeight ||
				document.body.clientHeight ||
				document.documentElement.clientHeight
			);
		}

        isMobileBrowser() {
            // 非Web环境（如原生APP）直接返回false
            if (typeof window === 'undefined' || !navigator) {
                return false;
            }

            // 获取浏览器用户代理字符串（转为小写便于检测）
            const userAgent = navigator.userAgent.toLowerCase();

            // 手机浏览器特征关键词（包含常见移动设备和浏览器）
            const mobileKeywords = [
                'mobile',    // 通用移动设备标识
                'android',   // Android设备
                'iphone',    // iPhone设备
                'ipad',      // iPad（可选，根据需求决定是否视为移动设备）
                'ipod',      // iPod Touch
                'windows phone', // 微软手机系统
                'blackberry',    // 黑莓手机
                'opera mini',    //  Opera移动浏览器
                'ucbrowser',     // UC浏览器（移动版）
                'miui',          // 小米系统（移动设备）
                'harmonyos'      // 鸿蒙系统（移动设备）
            ];

            // 检测是否包含任意移动设备关键词
            return mobileKeywords.some(keyword => userAgent.includes(keyword));
        }

		resize() {
			var scaleX = 1;
			var scaleY = 1;
			var canvasWidth = this.clientWidth;
			var canvasHeight = this.clientHeight;
			var canvasStyle = this.container.style;
			scaleX = scaleY = Math.min(scaleX, scaleY);
			canvasWidth = Math.ceil(this.clientWidth * scaleX);
			canvasHeight = Math.ceil(this.clientHeight * scaleY);
			canvasStyle.width = canvasWidth + 'px';
			canvasStyle.height = canvasHeight + 'px';
            if(typeof cc != 'undefined' && this.isMobileBrowser()) {
                if(canvasWidth > canvasHeight) {
                    cc.view?.setDesignResolutionSize(this._designWidth, this._designHeight, cc.view._rpFixedHeight)
                } else {
                    cc.view?.setDesignResolutionSize(this._designWidth, this._designHeight, cc.view._rpFixedWidth);
                }
            }
		}
	}
	return new Resolution();
})({});
