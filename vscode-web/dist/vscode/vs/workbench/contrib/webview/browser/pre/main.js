(function(){"use strict";const I=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&navigator.userAgent.indexOf("CriOS")===-1&&navigator.userAgent.indexOf("FxiOS")===-1,D=({onFocus:t,onBlur:m})=>{const g=50;let p=document.hasFocus();setInterval(()=>{const c=document.hasFocus();c!==p&&(p=c,c?t():m())},g)},b=()=>document.getElementById("active-frame"),h=()=>document.getElementById("pending-frame"),K=`
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
	}`;function O(t,m){const g=m?encodeURIComponent(m):void 0;return`
			globalThis.acquireVsCodeApi = (function() {
				const originalPostMessage = window.parent.postMessage.bind(window.parent);
				const targetOrigin = '*';
				let acquired = false;

				let state = ${m?`JSON.parse(decodeURIComponent("${g}"))`:void 0};

				return () => {
					if (acquired && !${t}) {
						throw new Error('An instance of the VS Code API has already been acquired');
					}
					acquired = true;
					return Object.freeze({
						postMessage: function(msg) {
							return originalPostMessage({ command: 'onmessage', data: msg }, targetOrigin);
						},
						setState: function(newState) {
							state = newState;
							originalPostMessage({ command: 'do-update-state', data: JSON.stringify(newState) }, targetOrigin);
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
		`}function x(t){let m=!0,g,p=[];const c={initialScrollProgress:void 0},v=(e,a)=>{if(!!e&&(a&&(a.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),a.classList.add(c.activeTheme),a.dataset.vscodeThemeKind=c.activeTheme,a.dataset.vscodeThemeName=c.themeName||""),c.styles)){const r=e.documentElement.style;for(let n=r.length-1;n>=0;n--){const i=r[n];i&&i.startsWith("--vscode-")&&r.removeProperty(i)}for(const n of Object.keys(c.styles))r.setProperty(`--${n}`,c.styles[n])}},P=e=>{if(!(!e||!e.view||!e.view.document)){let a=e.view.document.getElementsByTagName("base")[0],r=e.target;for(;r;){if(r.tagName&&r.tagName.toLowerCase()==="a"&&r.href){if(r.getAttribute("href")==="#")e.view.scrollTo(0,0);else if(r.hash&&(r.getAttribute("href")===r.hash||a&&r.href.indexOf(a.href)>=0)){let n=e.view.document.getElementById(r.hash.substr(1,r.hash.length-1));n&&n.scrollIntoView()}else t.postMessage("did-click-link",r.href.baseVal||r.href);e.preventDefault();break}r=r.parentNode}}},T=e=>{if(!(!e.view||!e.view.document)&&e.button===1){let a=e.target;for(;a;){if(a.tagName&&a.tagName.toLowerCase()==="a"&&a.href){e.preventDefault();break}a=a.parentNode}}},N=e=>{if(q(e))e.preventDefault();else if(W(e))if(t.onElectron)e.preventDefault();else return;t.postMessage("did-keydown",{key:e.key,keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})},F=e=>{t.postMessage("did-keyup",{key:e.key,keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})};function W(e){const a=e.ctrlKey||e.metaKey,r=e.shiftKey&&e.key.toLowerCase()==="insert";return a&&["c","v","x"].includes(e.key.toLowerCase())||r}function q(e){return(e.ctrlKey||e.metaKey)&&["z","y"].includes(e.key.toLowerCase())}let y=!1;const B=e=>{y||t.postMessage("did-scroll-wheel",{deltaMode:e.deltaMode,deltaX:e.deltaX,deltaY:e.deltaY,deltaZ:e.deltaZ,detail:e.detail,type:e.type})},Y=e=>{if(!(!e.target||!e.target.body)&&!y){const a=e.currentTarget.scrollY/e.target.body.clientHeight;isNaN(a)||(y=!0,window.requestAnimationFrame(()=>{try{t.postMessage("did-scroll",a)}catch(r){}y=!1}))}};function _(e){const a=e.options,r=e.contents,n=new DOMParser().parseFromString(r,"text/html");if(n.querySelectorAll("a").forEach(d=>{d.title||(d.title=d.getAttribute("href"))}),a.allowScripts){const d=n.createElement("script");d.id="_vscodeApiScript",d.textContent=O(a.allowMultipleAPIAcquire,e.state),n.head.prepend(d)}const i=n.createElement("style");i.id="_defaultStyles",i.textContent=K,n.head.prepend(i),v(n,n.body);const u=n.querySelector('meta[http-equiv="Content-Security-Policy"]');if(!u)t.postMessage("no-csp-found");else try{u.setAttribute("content",t.rewriteCSP(u.getAttribute("content"),e.endpoint))}catch(d){console.error(`Could not rewrite csp: ${d}`)}return`<!DOCTYPE html>
`+n.documentElement.outerHTML}document.addEventListener("DOMContentLoaded",()=>{const e=document.location.search.match(/\bid=([\w-]+)/),a=e?e[1]:void 0;if(!!document.body){t.onMessage("styles",(n,i)=>{c.styles=i.styles,c.activeTheme=i.activeTheme,c.themeName=i.themeName;const u=b();!u||u.contentDocument&&v(u.contentDocument,u.contentDocument.body)}),t.onMessage("focus",()=>{const n=b();if(!n||!n.contentWindow){window.focus();return}document.activeElement!==n&&n.contentWindow.focus()});let r=0;t.onMessage("content",async(n,i)=>{const u=++r;if(await t.ready,u===r){const d=i.options,M=_(i),w=b(),H=m;let k;if(m)m=!1,k=(o,l)=>{isNaN(c.initialScrollProgress)||l.scrollY===0&&l.scroll(0,o.clientHeight*c.initialScrollProgress)};else{const o=w&&w.contentDocument&&w.contentDocument.body?w.contentWindow.scrollY:0;k=(l,f)=>{f.scrollY===0&&f.scroll(0,o)}}const S=h();S&&(S.setAttribute("id",""),document.body.removeChild(S)),H||(p=[]);const s=document.createElement("iframe");s.setAttribute("id","pending-frame"),s.setAttribute("frameborder","0"),s.setAttribute("sandbox",d.allowScripts?"allow-scripts allow-forms allow-same-origin allow-pointer-lock allow-downloads":"allow-same-origin allow-pointer-lock"),s.setAttribute("allow",d.allowScripts?"clipboard-read; clipboard-write;":""),t.fakeLoad?s.src=`./fake.html?id=${a}`:s.src="about:blank?webviewFrame",s.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",document.body.appendChild(s),t.fakeLoad||s.contentDocument.open();function C(o){setTimeout(()=>{t.fakeLoad&&(o.open(),o.write(M),o.close(),E(s)),o&&v(o,o.body)},0)}if(t.fakeLoad&&!d.allowScripts&&I){const o=setInterval(()=>{if(!s.parentElement){clearInterval(o);return}s.contentDocument.readyState!=="loading"&&(clearInterval(o),C(s.contentDocument))},10)}else s.contentWindow.addEventListener("DOMContentLoaded",o=>{const l=o.target?o.target:void 0;C(l)});const L=(o,l)=>{o&&o.body&&k(o.body,l);const f=h();if(f&&f.contentDocument&&f.contentDocument===o){const A=b();A&&document.body.removeChild(A),v(f.contentDocument,f.contentDocument.body),f.setAttribute("id","active-frame"),f.style.visibility="visible",t.focusIframeOnCreate&&f.contentWindow.focus(),l.addEventListener("scroll",Y),l.addEventListener("wheel",B),document.hasFocus()&&l.focus(),p.forEach($=>{l.postMessage($,"*")}),p=[]}t.postMessage("did-load")};function E(o){clearTimeout(g),g=void 0,g=setTimeout(()=>{clearTimeout(g),g=void 0,L(o.contentDocument,o.contentWindow)},200),o.contentWindow.addEventListener("load",function(l){const f=l.target;g&&(clearTimeout(g),g=void 0,L(f,this))}),o.contentWindow.addEventListener("click",P),o.contentWindow.addEventListener("auxclick",T),o.contentWindow.addEventListener("keydown",N),o.contentWindow.addEventListener("keyup",F),o.contentWindow.addEventListener("contextmenu",l=>l.preventDefault()),t.onIframeLoaded&&t.onIframeLoaded(o)}t.fakeLoad||E(s),t.fakeLoad||(s.contentDocument.write(M),s.contentDocument.close()),t.postMessage("did-set-content",void 0)}}),t.onMessage("message",(n,i)=>{if(!h()){const d=b();if(d){d.contentWindow.postMessage(i,"*");return}}p.push(i)}),t.onMessage("initial-scroll-position",(n,i)=>{c.initialScrollProgress=i}),t.onMessage("execCommand",(n,i)=>{const u=b();!u||u.contentDocument.execCommand(i)}),D({onFocus:()=>t.postMessage("did-focus"),onBlur:()=>t.postMessage("did-blur")}),t.postMessage("webview-ready",{})}})}typeof module!="undefined"?module.exports=x:window.createWebviewManager=x})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f30a9b73e8ffc278e71575118b6bf568f04587c8/core/vs/workbench/contrib/webview/browser/pre/main.js.map
