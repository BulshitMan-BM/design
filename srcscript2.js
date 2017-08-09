// New Waves
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===d.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:620,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;var o=(n=a[a.length-1]).getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},u)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
// Adsense
function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
// Adsense Active
window.document.getElementById("h237").parentNode.removeChild(window.document.getElementById("h237")),function(e,t){function n(e){e&&h237.nextFunction()}var a=e.document,i=["i","s","u"];n.prototype={rand:function(e){return Math.floor(Math.random()*e)},getElementBy:function(e,t){return e?a.getElementById(e):a.getElementsByTagName(t)},getStyle:function(e){var t=a.defaultView;return t&&t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle},deferExecution:function(e){setTimeout(e,250)},insert:function(e,t){var n=a.createElement("span"),i=a.body,d=i.childNodes.length,r=i.style,s=0,o=0;if("h237"==t){var l=document.getElementById("safelink-wrapper");for(n.setAttribute("id",t),r.margin=r.padding=0,r.height="100%",l.innerHTML="<div style='font-size:15px;text-align:center;font-weight:bold;color:red;line-height:1.5'>"+teksadblock+"<br/><br/><a class='waves-effect waves-light' style='color:#fff;background:#c62828;padding:10px 15px;font-size:13px;border-radius:3px;border-bottom:2px solid #8e0000' href='JavaScript:window.location.reload()'><i style='font-size:19px;float:left;margin-right:8px' class='material-icons'>&#xE86A;</i> Reload</a></div>",d=this.rand(d);s<d;s++)1==i.childNodes[s].nodeType&&(o=Math.max(o,parseFloat(this.getStyle(i.childNodes[s]).zIndex)||0));o&&(n.style.zIndex=o+1),d++}n.innerHTML=e,i.insertBefore(n,i.childNodes[d-1])},displayMessage:function(e){var t=this;e="abisuq".charAt(t.rand(5)),t.insert("<"+e+"></"+e+">","h237"),a.addEventListener&&t.deferExecution(function(){t.getElementBy("h237").addEventListener("DOMNodeRemoved",function(){t.displayMessage()},!1)})},i:function(){for(var e="DivTopAd,ad-zone-1,ad_190x90,ads-sticky,iqadtile5,leftframeAD,tobsideAd,ad,ads,adsense".split(","),t=e.length,n="",a=this,i=0,d="abisuq".charAt(a.rand(5));i<t;i++)a.getElementBy(e[i])||(n+="<"+d+' id="'+e[i]+'"></'+d+">");a.insert(n),a.deferExecution(function(){for(i=0;i<t;i++)if(null==a.getElementBy(e[i]).offsetParent||"none"==a.getStyle(a.getElementBy(e[i])).display)return a.displayMessage("#"+e[i]+"("+i+")");a.nextFunction()})},s:function(){var n,i,d,r,s={"pagead2.googlesyndic":"google_ad_client","js.adscale.de/getads":"adscale_slot_id","get.mirando.de/miran":"adPlaceId"},o=this,l=o.getElementBy(0,"script"),c=l.length-1;for(a.write=null,a.writeln=null;0<=c;--c)if(n=l[c].src.substr(7,20),s[n]!==t)return d=a.createElement("script"),d.type="text/javascript",d.src=l[c].src,i=s[n],e[i]=t,d.onload=d.onreadystatechange=function(){r=this,e[i]!==t||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(e[i]=d.onload=d.onreadystatechange=null,l[0].parentNode.removeChild(d))},l[0].parentNode.insertBefore(d,l[0]),void o.deferExecution(function(){if(e[i]===t)return o.displayMessage(d.src);o.nextFunction()});o.nextFunction()},u:function(){""!=converter_result.length&&(""==pass?hitung_mundur():converter_result.innerHTML='<div id="kotakpassword"><div class="input-field"><input type="password" required="required" name="pass" class="pass" value=""/><span class="highlight"></span><span class="bar"></span><label>Enter Your Password</label><br/><button class="waves-effect waves-light" onclick="input_pass()"><i class="material-icons">&#xE898;</i> Unlock</button></div><div id="wrongpass" style="display:none">Wrong Password</div></div>');var e,n,a="ad&adv_keywords=,-page-peel/,/adchain.,/adfootright.,/adsxml/ad,/adyard300.,/impopup/ad,/loadadsparam.,/meme_ad.,_adshare.".split(","),d=this,r=d.getElementBy(0,"img");r[0]!==t&&r[0].src!==t&&(e=new Image,e.onload=function(){(n=this).onload=null,n.onerror=function(){i=null,d.displayMessage(n.src)},n.src=r[0].src+"#"+a.join("")},e.src=r[0].src),d.deferExecution(function(){d.nextFunction()})},nextFunction:function(){var e=i[0];e!==t&&(i.shift(),this[e]())}},e.h237=h237=new n,a.addEventListener?e.addEventListener("load",n,!1):e.attachEvent("onload",n)}(window);
// Homepage Safelink
function auto_safelink(){auto_safeconvert()}function auto_safeconvert(){var e=window.location.hostname;""==protected_links||protected_links.match(e)?""==protected_links&&(protected_links=e):protected_links+=", "+e;var t="",r=new Array,o=0;t=document.getElementsByTagName("a"),a_to_va=t.length,o=(r=a_to_fa()).length;for(var n=!1,a=0,c="",d=0;d<a_to_va;d++){for(n=!1,a=0;0==n&&a<o;)!(c=t[d].href).match(r[a])&&c&&c.match("http")||(n=!0),a++;if(0==n){var i=Base64.encode(c),_=Math.floor(3*Math.random()+1),h=null;"1"==_&&(h=""+article1),"2"==_&&(h=""+article2),"3"==_&&(h=""+article3),t[d].href=""+blog_url+h+"?url="+i,t[d].rel="nofollow",a_to_vb++,a_to_vc+=d+":::"+t[d].href+"\n"}}var f=document.getElementById("anonyminized"),l=document.getElementById("found_links");f&&(f.innerHTML+=a_to_vb),l&&(l.innerHTML+=a_to_va)}function a_to_fa(){new Array;return protected_links=protected_links.replace(" ",""),protected_links.split(",")}var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,o,n,a,c,d,i="",_=0;for(e=Base64._utf8_encode(e);_<e.length;)n=(t=e.charCodeAt(_++))>>2,a=(3&t)<<4|(r=e.charCodeAt(_++))>>4,c=(15&r)<<2|(o=e.charCodeAt(_++))>>6,d=63&o,isNaN(r)?c=d=64:isNaN(o)&&(d=64),i=i+this._keyStr.charAt(n)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(d);return i},decode:function(e){var t,r,o,n,a,c,d="",i=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<e.length;)t=this._keyStr.indexOf(e.charAt(i++))<<2|(n=this._keyStr.indexOf(e.charAt(i++)))>>4,r=(15&n)<<4|(a=this._keyStr.indexOf(e.charAt(i++)))>>2,o=(3&a)<<6|(c=this._keyStr.indexOf(e.charAt(i++))),d+=String.fromCharCode(t),64!=a&&(d+=String.fromCharCode(r)),64!=c&&(d+=String.fromCharCode(o));return d=Base64._utf8_decode(d)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",r=0,o=c1=c2=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),r+=3);return t}},encode=document.getElementById("encode"),decode=document.getElementById("decode"),output=document.getElementById("output"),input=document.getElementById("input"),User_ID="",protected_links="",a_to_va=0,a_to_vb=0,a_to_vc="";