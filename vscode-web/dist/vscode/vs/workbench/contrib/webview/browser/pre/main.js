(function(){"use strict";const P=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&navigator.userAgent.indexOf("CriOS")===-1&&navigator.userAgent.indexOf("FxiOS")===-1,D=({onFocus:t,onBlur:p})=>{const u=50;let m=document.hasFocus();setInterval(()=>{const c=document.hasFocus();c!==m&&(m=c,c?t():p())},u)},b=()=>document.getElementById("active-frame"),h=()=>document.getElementById("pending-frame"),S="__vscode_post_message__",K=`
	html {
		scrollbar-color: var(--vscode-scrollbarSlider-background) var(--vscode-editor-background);
	}

	body {
		background-color: transparent;
		color: var(--vscode-editor-foreground);
		font-family: var(--vscode-font-family);
		font-weight: var(--vscode-font-weight);
		font-size: var(--vscode-font-size);
		margin: 0;
		padding: 0 20px;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	a {
		color: var(--vscode-textLink-foreground);
	}

	a:hover {
		color: var(--vscode-textLink-activeForeground);
	}

	a:focus,
	input:focus,
	select:focus,
	textarea:focus {
		outline: 1px solid -webkit-focus-ring-color;
		outline-offset: -1px;
	}

	code {
		color: var(--vscode-textPreformat-foreground);
	}

	blockquote {
		background: var(--vscode-textBlockQuote-background);
		border-color: var(--vscode-textBlockQuote-border);
	}

	kbd {
		color: var(--vscode-editor-foreground);
		border-radius: 3px;
		vertical-align: middle;
		padding: 1px 3px;

		background-color: hsla(0,0%,50%,.17);
		border: 1px solid rgba(71,71,71,.4);
		border-bottom-color: rgba(88,88,88,.4);
		box-shadow: inset 0 -1px 0 rgba(88,88,88,.4);
	}
	.vscode-light kbd {
		background-color: hsla(0,0%,87%,.5);
		border: 1px solid hsla(0,0%,80%,.7);
		border-bottom-color: hsla(0,0%,73%,.7);
		box-shadow: inset 0 -1px 0 hsla(0,0%,73%,.7);
	}

	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	::-webkit-scrollbar-corner {
		background-color: var(--vscode-editor-background);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--vscode-scrollbarSlider-background);
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		background-color: var(--vscode-scrollbarSlider-activeBackground);
	}`;function T(t,p,u){const m=u?encodeURIComponent(u):void 0;return`
			globalThis.acquireVsCodeApi = (function() {
				const originalPostMessage = window.parent['${p?"postMessage":S}'].bind(window.parent);
				const doPostMessage = (channel, data) => {
					${p?"originalPostMessage({ command: channel, data: data }, '*');":"originalPostMessage(channel, data);"}
				};

				let acquired = false;

				let state = ${u?`JSON.parse(decodeURIComponent("${m}"))`:void 0};

				return () => {
					if (acquired && !${t}) {
						throw new Error('An instance of the VS Code API has already been acquired');
					}
					acquired = true;
					return Object.freeze({
						postMessage: function(msg) {
							doPostMessage('onmessage', msg);
						},
						setState: function(newState) {
							state = newState;
							doPostMessage('do-update-state', JSON.stringify(newState));
							return newState;
						},
						getState: function() {
							return state;
						}
					});
				};
			})();
			delete window.parent;
			delete window.top;
			delete window.frameElement;
		`}function x(t){let p=!0,u,m=[];const c={initialScrollProgress:void 0},v=(e,a)=>{if(!!e&&(a&&(a.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),a.classList.add(c.activeTheme),a.dataset.vscodeThemeKind=c.activeTheme,a.dataset.vscodeThemeName=c.themeName||""),c.styles)){const r=e.documentElement.style;for(let o=r.length-1;o>=0;o--){const s=r[o];s&&s.startsWith("--vscode-")&&r.removeProperty(s)}for(const o of Object.keys(c.styles))r.setProperty(`--${o}`,c.styles[o])}},N=e=>{if(!(!e||!e.view||!e.view.document)){let a=e.view.document.getElementsByTagName("base")[0],r=e.target;for(;r;){if(r.tagName&&r.tagName.toLowerCase()==="a"&&r.href){if(r.getAttribute("href")==="#")e.view.scrollTo(0,0);else if(r.hash&&(r.getAttribute("href")===r.hash||a&&r.href.indexOf(a.href)>=0)){let o=e.view.document.getElementById(r.hash.substr(1,r.hash.length-1));o&&o.scrollIntoView()}else t.postMessage("did-click-link",r.href.baseVal||r.href);e.preventDefault();break}r=r.parentNode}}},O=e=>{if(!(!e.view||!e.view.document)&&e.button===1){let a=e.target;for(;a;){if(a.tagName&&a.tagName.toLowerCase()==="a"&&a.href){e.preventDefault();break}a=a.parentNode}}},F=e=>{if(q(e))e.preventDefault();else if(_(e))if(t.onElectron)e.preventDefault();else return;t.postMessage("did-keydown",{key:e.key,keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})},W=e=>{t.postMessage("did-keyup",{key:e.key,keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})};function _(e){const a=e.ctrlKey||e.metaKey,r=e.shiftKey&&e.key.toLowerCase()==="insert";return a&&["c","v","x"].includes(e.key.toLowerCase())||r}function q(e){return(e.ctrlKey||e.metaKey)&&["z","y"].includes(e.key.toLowerCase())}let y=!1;const B=e=>{y||t.postMessage("did-scroll-wheel",{deltaMode:e.deltaMode,deltaX:e.deltaX,deltaY:e.deltaY,deltaZ:e.deltaZ,detail:e.detail,type:e.type})},Y=e=>{if(!(!e.target||!e.target.body)&&!y){const a=e.currentTarget.scrollY/e.target.body.clientHeight;isNaN(a)||(y=!0,window.requestAnimationFrame(()=>{try{t.postMessage("did-scroll",a)}catch(r){}y=!1}))}};function $(e){const a=e.options,r=e.contents,o=new DOMParser().parseFromString(r,"text/html");if(o.querySelectorAll("a").forEach(d=>{d.title||(d.title=d.getAttribute("href"))}),a.allowScripts){const d=o.createElement("script");d.id="_vscodeApiScript",d.textContent=T(a.allowMultipleAPIAcquire,t.useParentPostMessage,e.state),o.head.prepend(d)}const s=o.createElement("style");s.id="_defaultStyles",s.textContent=K,o.head.prepend(s),v(o,o.body);const f=o.querySelector('meta[http-equiv="Content-Security-Policy"]');if(!f)t.postMessage("no-csp-found");else try{f.setAttribute("content",t.rewriteCSP(f.getAttribute("content"),e.endpoint))}catch(d){console.error(`Could not rewrite csp: ${d}`)}return`<!DOCTYPE html>
`+o.documentElement.outerHTML}document.addEventListener("DOMContentLoaded",()=>{const e=document.location.search.match(/\bid=([\w-]+)/),a=e?e[1]:void 0;if(!!document.body){t.onMessage("styles",(o,s)=>{c.styles=s.styles,c.activeTheme=s.activeTheme,c.themeName=s.themeName;const f=b();!f||f.contentDocument&&v(f.contentDocument,f.contentDocument.body)}),t.onMessage("focus",()=>{const o=b();if(!o||!o.contentWindow){window.focus();return}document.activeElement!==o&&o.contentWindow.focus()});let r=0;t.onMessage("content",async(o,s)=>{const f=++r;if(await t.ready,f===r){const d=s.options,C=$(s),w=b(),H=p;let k;if(p)p=!1,k=(n,l)=>{isNaN(c.initialScrollProgress)||l.scrollY===0&&l.scroll(0,n.clientHeight*c.initialScrollProgress)};else{const n=w&&w.contentDocument&&w.contentDocument.body?w.contentWindow.scrollY:0;k=(l,g)=>{g.scrollY===0&&g.scroll(0,n)}}const M=h();M&&(M.setAttribute("id",""),document.body.removeChild(M)),H||(m=[]);const i=document.createElement("iframe");i.setAttribute("id","pending-frame"),i.setAttribute("frameborder","0"),i.setAttribute("sandbox",d.allowScripts?"allow-scripts allow-forms allow-same-origin allow-pointer-lock allow-downloads":"allow-same-origin allow-pointer-lock"),i.setAttribute("allow",d.allowScripts?"clipboard-read; clipboard-write;":""),t.fakeLoad?i.src=`./fake.html?id=${a}`:i.src="about:blank?webviewFrame",i.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",document.body.appendChild(i),t.fakeLoad||i.contentDocument.open();function L(n){setTimeout(()=>{t.fakeLoad&&(n.open(),n.write(C),n.close(),A(i)),n&&v(n,n.body)},0)}if(t.fakeLoad&&!d.allowScripts&&P){const n=setInterval(()=>{if(!i.parentElement){clearInterval(n);return}i.contentDocument.readyState!=="loading"&&(clearInterval(n),L(i.contentDocument))},10)}else i.contentWindow.addEventListener("DOMContentLoaded",n=>{const l=n.target?n.target:void 0;L(l)});const E=(n,l)=>{n&&n.body&&k(n.body,l);const g=h();if(g&&g.contentDocument&&g.contentDocument===n){const I=b();I&&document.body.removeChild(I),v(g.contentDocument,g.contentDocument.body),g.setAttribute("id","active-frame"),g.style.visibility="visible",t.focusIframeOnCreate&&g.contentWindow.focus(),l.addEventListener("scroll",Y),l.addEventListener("wheel",B),document.hasFocus()&&l.focus(),m.forEach(U=>{l.postMessage(U,"*")}),m=[]}t.postMessage("did-load")};function A(n){clearTimeout(u),u=void 0,u=setTimeout(()=>{clearTimeout(u),u=void 0,E(n.contentDocument,n.contentWindow)},200),n.contentWindow.addEventListener("load",function(l){const g=l.target;u&&(clearTimeout(u),u=void 0,E(g,this))}),n.contentWindow.addEventListener("click",N),n.contentWindow.addEventListener("auxclick",O),n.contentWindow.addEventListener("keydown",F),n.contentWindow.addEventListener("keyup",W),n.contentWindow.addEventListener("contextmenu",l=>l.preventDefault()),t.onIframeLoaded&&t.onIframeLoaded(n)}t.fakeLoad||A(i),t.fakeLoad||(i.contentDocument.write(C),i.contentDocument.close()),t.postMessage("did-set-content",void 0)}}),t.onMessage("message",(o,s)=>{if(!h()){const d=b();if(d){d.contentWindow.postMessage(s,"*");return}}m.push(s)}),t.onMessage("initial-scroll-position",(o,s)=>{c.initialScrollProgress=s}),t.onMessage("execCommand",(o,s)=>{const f=b();!f||f.contentDocument.execCommand(s)}),D({onFocus:()=>t.postMessage("did-focus"),onBlur:()=>t.postMessage("did-blur")}),window[S]=(o,s)=>{switch(o){case"onmessage":case"do-update-state":t.postMessage(o,s);break}},t.postMessage("webview-ready",{})}})}typeof module!="undefined"?module.exports=x:window.createWebviewManager=x})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c185983a683d14c396952dd432459097bc7f757f/core/vs/workbench/contrib/webview/browser/pre/main.js.map
