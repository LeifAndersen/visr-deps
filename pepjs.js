/*! For license information please see pepjs.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(function(){return t={978:function(t){t.exports=function(){"use strict";var t=["bubbles","cancelable","view","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],e=[!1,!1,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0];function n(n,i){i=i||Object.create(null);var r=document.createEvent("Event");r.initEvent(n,i.bubbles||!1,i.cancelable||!1);for(var o,a=2;a<t.length;a++)r[o=t[a]]=i[o]||e[a];r.buttons=i.buttons||0;var s;return s=void 0!==i.pressure&&r.buttons?i.pressure:r.buttons?.5:0,r.x=r.clientX,r.y=r.clientY,r.pointerId=i.pointerId||0,r.width=i.width||1,r.height=i.height||1,r.pressure=s,r.tiltX=i.tiltX||0,r.tiltY=i.tiltY||0,r.twist=i.twist||0,r.tangentialPressure=i.tangentialPressure||0,r.pointerType=i.pointerType||"",r.hwTimestamp=i.hwTimestamp||0,r.isPrimary=i.isPrimary||!1,r.detail=0,r}var i=window.Map&&window.Map.prototype.forEach?Map:r;function r(){this.array=[],this.size=0}r.prototype={set:function(t,e){if(void 0===e)return this.delete(t);this.has(t)||this.size++,this.array[t]=e},has:function(t){return void 0!==this.array[t]},delete:function(t){this.has(t)&&(delete this.array[t],this.size--)},get:function(t){return this.array[t]},clear:function(){this.array.length=0,this.size=0},forEach:function(t,e){return this.array.forEach((function(n,i){t.call(e,n,i,this)}),this)}};var o=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],a=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],s={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},u="undefined"!=typeof SVGElementInstance,c={pointermap:new i,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(t,e){var n=e,i=n.events;i&&(i.forEach((function(t){n[t]&&(this.eventMap[t]=n[t].bind(n))}),this),this.eventSources[t]=n,this.eventSourceList.push(n))},register:function(t){for(var e,n=this.eventSourceList.length,i=0;i<n&&(e=this.eventSourceList[i]);i++)e.register.call(e,t)},unregister:function(t){for(var e,n=this.eventSourceList.length,i=0;i<n&&(e=this.eventSourceList[i]);i++)e.unregister.call(e,t)},contains:function(t,e){try{return t.contains(e)}catch(t){return!1}},down:function(t){t.bubbles=!0,this.fireEvent("pointerdown",t)},move:function(t){t.bubbles=!0,this.fireEvent("pointermove",t)},up:function(t){t.bubbles=!0,this.fireEvent("pointerup",t)},enter:function(t){t.bubbles=!1,this.fireEvent("pointerenter",t)},leave:function(t){t.bubbles=!1,this.fireEvent("pointerleave",t)},over:function(t){t.bubbles=!0,this.fireEvent("pointerover",t)},out:function(t){t.bubbles=!0,this.fireEvent("pointerout",t)},cancel:function(t){t.bubbles=!0,this.fireEvent("pointercancel",t)},leaveOut:function(t){this.out(t),this.propagate(t,this.leave,!1)},enterOver:function(t){this.over(t),this.propagate(t,this.enter,!0)},eventHandler:function(t){if(!t._handledByPE){var e=t.type,n=this.eventMap&&this.eventMap[e];n&&n(t),t._handledByPE=!0}},listen:function(t,e){e.forEach((function(e){this.addEvent(t,e)}),this)},unlisten:function(t,e){e.forEach((function(e){this.removeEvent(t,e)}),this)},addEvent:function(t,e){t.addEventListener(e,this.boundHandler)},removeEvent:function(t,e){t.removeEventListener(e,this.boundHandler)},makeEvent:function(t,e){this.captureInfo[e.pointerId]&&(e.relatedTarget=null);var i=new n(t,e);return e.preventDefault&&(i.preventDefault=e.preventDefault),i._target=i._target||e.target,i},fireEvent:function(t,e){var n=this.makeEvent(t,e);return this.dispatchEvent(n)},cloneEvent:function(t){for(var e,n=Object.create(null),i=0;i<o.length;i++)n[e=o[i]]=t[e]||a[i],!u||"target"!==e&&"relatedTarget"!==e||n[e]instanceof SVGElementInstance&&(n[e]=n[e].correspondingUseElement);return t.preventDefault&&(n.preventDefault=function(){t.preventDefault()}),n},getTarget:function(t){var e=this.captureInfo[t.pointerId];return e?t._target!==e&&t.type in s?void 0:e:t._target},propagate:function(t,e,n){for(var i=t.target,r=[];null!=i&&i!==document&&!i.contains(t.relatedTarget);)if(r.push(i),!(i=i.parentNode))return;n&&r.reverse(),r.forEach((function(n){t.target=n,e.call(this,t)}),this)},setCapture:function(t,e,i){this.captureInfo[t]&&this.releaseCapture(t,i),this.captureInfo[t]=e,this.implicitRelease=this.releaseCapture.bind(this,t,i),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease);var r=new n("gotpointercapture",{bubbles:!0});r.pointerId=t,r._target=e,i||this.asyncDispatchEvent(r)},releaseCapture:function(t,e){var i=this.captureInfo[t];if(i){this.captureInfo[t]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease);var r=new n("lostpointercapture",{bubbles:!0});r.pointerId=t,r._target=i,e||this.asyncDispatchEvent(r)}},dispatchEvent:function(t){var e=this.getTarget(t);if(e)return e.dispatchEvent(t)},asyncDispatchEvent:function(t){requestAnimationFrame(this.dispatchEvent.bind(this,t))}};c.boundHandler=c.eventHandler.bind(c);var l={shadow:function(t){if(t)return t.shadowRoot||t.webkitShadowRoot},canTarget:function(t){return t&&Boolean(t.elementFromPoint)},targetingShadow:function(t){var e=this.shadow(t);if(this.canTarget(e))return e},olderShadow:function(t){var e=t.olderShadowRoot;if(!e){var n=t.querySelector("shadow");n&&(e=n.olderShadowRoot)}return e},allShadows:function(t){for(var e=[],n=this.shadow(t);n;)e.push(n),n=this.olderShadow(n);return e},searchRoot:function(t,e,n){if(t){var i,r,o=t.elementFromPoint(e,n);for(r=this.targetingShadow(o);r;){if(i=r.elementFromPoint(e,n)){var a=this.targetingShadow(i);return this.searchRoot(a,e,n)||i}r=this.olderShadow(r)}return o}},owner:function(t){for(var e=t;e.parentNode;)e=e.parentNode;return e.nodeType!==Node.DOCUMENT_NODE&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(e=document),e},findTarget:function(t){var e=t.clientX,n=t.clientY,i=this.owner(t.target);return i.elementFromPoint(e,n)||(i=document),this.searchRoot(i,e,n)}},h=Array.prototype.forEach.call.bind(Array.prototype.forEach),p=Array.prototype.map.call.bind(Array.prototype.map),f=Array.prototype.slice.call.bind(Array.prototype.slice),v=Array.prototype.filter.call.bind(Array.prototype.filter),d=window.MutationObserver||window.WebKitMutationObserver,m={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};function b(t,e,n,i){this.addCallback=t.bind(i),this.removeCallback=e.bind(i),this.changedCallback=n.bind(i),d&&(this.observer=new d(this.mutationWatcher.bind(this)))}function E(t){return"{ -ms-touch-action: "+t+"; touch-action: "+t+"; }"}b.prototype={watchSubtree:function(t){this.observer&&l.canTarget(t)&&this.observer.observe(t,m)},enableOnSubtree:function(t){this.watchSubtree(t),t===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(t)},installNewSubtree:function(t){h(this.findElements(t),this.addElement,this)},findElements:function(t){return t.querySelectorAll?t.querySelectorAll("[touch-action]"):[]},removeElement:function(t){this.removeCallback(t)},addElement:function(t){this.addCallback(t)},elementChanged:function(t,e){this.changedCallback(t,e)},concatLists:function(t,e){return t.concat(f(e))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(t){return t.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(t){var e=p(t,this.findElements,this);return e.push(v(t,this.isElement)),e.reduce(this.concatLists,[])},mutationWatcher:function(t){t.forEach(this.mutationHandler,this)},mutationHandler:function(t){"childList"===t.type?(this.flattenMutationTree(t.addedNodes).forEach(this.addElement,this),this.flattenMutationTree(t.removedNodes).forEach(this.removeElement,this)):"attributes"===t.type&&this.elementChanged(t.target,t.oldValue)}};var g=[{selector:'[touch-action="none"]',value:"none"},{selector:'[touch-action="auto"]',value:"auto"},{selector:'[touch-action~="pan-x"]',value:"pan-x"},{selector:'[touch-action~="pan-y"]',value:"pan-y"},{selector:'[touch-action~="pan-up"]',value:"pan-up"},{selector:'[touch-action~="pan-down"]',value:"pan-down"},{selector:'[touch-action~="pan-left"]',value:"pan-left"},{selector:'[touch-action~="pan-right"]',value:"pan-right"}],y="",T=window.PointerEvent||window.MSPointerEvent,w=!window.ShadowDOMPolyfill&&document.head.createShadowRoot;var P=c.pointermap,S=[1,4,2,8,16],O=!1;try{O=1===new MouseEvent("test",{buttons:1}).buttons}catch(t){}var M,I={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","webkitmouseforcechanged","mousemove","mouseup","mouseover","mouseout"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(t){for(var e,n=this.lastTouches,i=t.clientX,r=t.clientY,o=0,a=n.length;o<a&&(e=n[o]);o++){var s=Math.abs(i-e.x),u=Math.abs(r-e.y);if(s<=25&&u<=25)return!0}},prepareEvent:function(t){var e=c.cloneEvent(t),n=e.preventDefault;return e.preventDefault=function(){t.preventDefault(),n()},e.pointerId=this.POINTER_ID,e.isPrimary=!0,e.pointerType=this.POINTER_TYPE,"webkitForce"in t&&(e.pressure=t.webkitForce-MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN),e},prepareButtonsForMove:function(t,e){var n=P.get(this.POINTER_ID);0!==e.which&&n?t.buttons=n.buttons:t.buttons=0,e.buttons=t.buttons},mousedown:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=P.get(this.POINTER_ID),n=this.prepareEvent(t);O||(n.buttons=S[n.button],e&&(n.buttons|=e.buttons),t.buttons=n.buttons),P.set(this.POINTER_ID,t),e&&0!==e.buttons?c.move(n):c.down(n)}},webkitmouseforcechanged:function(t){this.mousemove(t)},mousemove:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);O||this.prepareButtonsForMove(e,t),e.button=-1,P.set(this.POINTER_ID,t),c.move(e)}},mouseup:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=P.get(this.POINTER_ID),n=this.prepareEvent(t);if(!O){var i=S[n.button];n.buttons=e?e.buttons&~i:0,t.buttons=n.buttons}P.set(this.POINTER_ID,t),n.buttons&=~S[n.button],0===n.buttons?c.up(n):c.move(n)}},mouseover:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);O||this.prepareButtonsForMove(e,t),e.button=-1,P.set(this.POINTER_ID,t),c.enterOver(e)}},mouseout:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);O||this.prepareButtonsForMove(e,t),e.button=-1,c.leaveOut(e)}},cancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.deactivateMouse()},deactivateMouse:function(){P.delete(this.POINTER_ID)}},N=c.captureInfo,_=l.findTarget.bind(l),R=l.allShadows.bind(l),D=c.pointermap,C="touch-action",Y={events:["touchstart","touchmove","touchforcechange","touchend","touchcancel"],register:function(t){M.enableOnSubtree(t)},unregister:function(){},elementAdded:function(t){var e=t.getAttribute(C),n=this.touchActionToScrollType(e);"number"==typeof n&&(t._scrollType=n,c.listen(t,this.events),R(t).forEach((function(t){t._scrollType=n,c.listen(t,this.events)}),this))},elementRemoved:function(t){if(D.size>0){var e=this.events;t.addEventListener("touchend",(function(){t._scrollType=void 0,c.unlisten(t,e)}))}else t._scrollType=void 0,c.unlisten(t,this.events);R(t).forEach((function(t){t._scrollType=void 0,c.unlisten(t,this.events)}),this)},elementChanged:function(t,e){var n=t.getAttribute(C),i=this.touchActionToScrollType(n),r=this.touchActionToScrollType(e);"number"==typeof i&&"number"==typeof r?(t._scrollType=i,R(t).forEach((function(t){t._scrollType=i}),this)):"number"==typeof r?this.elementRemoved(t):"number"==typeof i&&this.elementAdded(t)},scrollTypes:{UP:function(t){return t.includes("pan-y")||t.includes("pan-up")?1:0},DOWN:function(t){return t.includes("pan-y")||t.includes("pan-down")?2:0},LEFT:function(t){return t.includes("pan-x")||t.includes("pan-left")?4:0},RIGHT:function(t){return t.includes("pan-x")||t.includes("pan-right")?8:0}},touchActionToScrollType:function(t){if(t){if("auto"===t)return 15;if("none"===t)return 0;var e=t.split(" "),n=this.scrollTypes;return n.UP(e)|n.DOWN(e)|n.LEFT(e)|n.RIGHT(e)}},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(t){return this.firstTouch===t.identifier},setPrimaryTouch:function(t){(0===D.size||1===D.size&&D.has(1))&&(this.firstTouch=t.identifier,this.firstXY={X:t.clientX,Y:t.clientY},this.scrolling=!1)},removePrimaryPointer:function(t){t.isPrimary&&(this.firstTouch=null,this.firstXY=null)},typeToButtons:function(t){var e=0;return"touchstart"!==t&&"touchmove"!==t&&"touchforcechange"!==t||(e=1),e},touchToPointer:function(t){var e=this.currentTouchEvent,n=c.cloneEvent(t),i=n.pointerId=t.identifier+2;if(n.target=N[i]||_(n),n.bubbles=!0,n.cancelable=!0,n.button=0,n.buttons=this.typeToButtons(e.type),n.width=2*(t.radiusX||t.webkitRadiusX||0),n.height=2*(t.radiusY||t.webkitRadiusY||0),n.pressure=void 0!==t.force?t.force:void 0!==t.webkitForce?t.webkitForce:void 0,n.isPrimary=this.isPrimaryTouch(t),t.altitudeAngle){var r=Math.tan(t.altitudeAngle),o=180/Math.PI;n.tiltX=Math.atan(Math.cos(t.azimuthAngle)/r)*o,n.tiltY=Math.atan(Math.sin(t.azimuthAngle)/r)*o}else n.tiltX=0,n.tiltY=0;"stylus"===t.touchType?n.pointerType="pen":n.pointerType=this.POINTER_TYPE,n.altKey=e.altKey,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.shiftKey=e.shiftKey;var a=this;return n.preventDefault=function(){a.scrolling=!1,a.firstXY=null,e.preventDefault()},n},processTouches:function(t,e){var n=t.changedTouches;this.currentTouchEvent=t;for(var i,r=0;r<n.length;r++)i=n[r],e.call(this,this.touchToPointer(i))},shouldScroll:function(t){if(this.firstXY){var e,n=t.currentTarget._scrollType;if(0===n)e=!1;else if(15===n)e=!0;else{var i=t.changedTouches[0],r=i.clientY-this.firstXY.Y,o=Math.abs(r),a=i.clientX-this.firstXY.X,s=Math.abs(a),u=1&n,c=2&n,l=4&n,h=8&n;l&&h?e=s>o:l?e=s>o&&a>0:h&&(e=s>o&&a<0),e||(u&&c?e=s<o:u?e=s<o&&r>0:c&&(e=s<o&&r<0))}return this.firstXY=null,e}},findTouch:function(t,e){for(var n,i=0,r=t.length;i<r&&(n=t[i]);i++)if(n.identifier===e)return!0},vacuumTouches:function(t){var e=t.touches;if(D.size>=e.length){var n=[];D.forEach((function(t,i){if(1!==i&&!this.findTouch(e,i-2)){var r=t.out;n.push(r)}}),this),n.forEach(this.cancelOut,this)}},touchstart:function(t){this.vacuumTouches(t),this.setPrimaryTouch(t.changedTouches[0]),this.dedupSynthMouse(t),this.scrolling||this.processTouches(t,this.overDown)},overDown:function(t){D.set(t.pointerId,{target:t.target,out:t,outTarget:t.target}),c.enterOver(t),c.down(t)},touchforcechange:function(t){this.touchmove(t)},touchmove:function(t){this.scrolling||(this.shouldScroll(t)?(this.scrolling=!0,this.touchcancel(t)):("touchforcechange"!==t.type&&t.preventDefault(),this.processTouches(t,this.moveOverOut)))},moveOverOut:function(t){var e=t,n=D.get(e.pointerId);if(n){var i=n.out,r=n.outTarget;c.move(e),i&&r!==e.target&&(i.relatedTarget=e.target,e.relatedTarget=r,i.target=r,e.target?(c.leaveOut(i),c.enterOver(e)):(e.target=r,e.relatedTarget=null,this.cancelOut(e))),n.out=e,n.outTarget=e.target}},touchend:function(t){this.dedupSynthMouse(t),this.processTouches(t,this.upOut)},upOut:function(t){this.scrolling||(c.up(t),c.leaveOut(t)),this.cleanUpPointer(t)},touchcancel:function(t){this.processTouches(t,this.cancelOut)},cancelOut:function(t){c.cancel(t),c.leaveOut(t),this.cleanUpPointer(t)},cleanUpPointer:function(t){D.delete(t.pointerId),this.removePrimaryPointer(t)},dedupSynthMouse:function(t){var e=I.lastTouches,n=t.changedTouches[0];if(this.isPrimaryTouch(n)){var i={x:n.clientX,y:n.clientY};e.push(i);var r=function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}.bind(null,e,i);setTimeout(r,2500)}}};M=new b(Y.elementAdded,Y.elementRemoved,Y.elementChanged,Y);var X,F,A,L=c.pointermap,x=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,k={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(t){var e=t;return x&&((e=c.cloneEvent(t)).pointerType=this.POINTER_TYPES[t.pointerType]),e},cleanup:function(t){L.delete(t)},MSPointerDown:function(t){L.set(t.pointerId,t);var e=this.prepareEvent(t);c.down(e)},MSPointerMove:function(t){var e=this.prepareEvent(t);c.move(e)},MSPointerUp:function(t){var e=this.prepareEvent(t);c.up(e),this.cleanup(t.pointerId)},MSPointerOut:function(t){var e=this.prepareEvent(t);c.leaveOut(e)},MSPointerOver:function(t){var e=this.prepareEvent(t);c.enterOver(e)},MSPointerCancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.cleanup(t.pointerId)},MSLostPointerCapture:function(t){var e=c.makeEvent("lostpointercapture",t);c.dispatchEvent(e)},MSGotPointerCapture:function(t){var e=c.makeEvent("gotpointercapture",t);c.dispatchEvent(e)}};function K(t){if(!c.pointermap.has(t)){var e=new Error("NotFoundError");throw e.name="NotFoundError",e}}function U(t){for(var e=t.parentNode;e&&e!==t.ownerDocument;)e=e.parentNode;if(!e){var n=new Error("InvalidStateError");throw n.name="InvalidStateError",n}}function j(t){return 0!==c.pointermap.get(t).buttons}return window.navigator.msPointerEnabled?(X=function(t){K(t),U(this),j(t)&&(c.setCapture(t,this,!0),this.msSetPointerCapture(t))},F=function(t){K(t),c.releaseCapture(t,!0),this.msReleasePointerCapture(t)}):(X=function(t){K(t),U(this),j(t)&&c.setCapture(t,this)},F=function(t){K(t),c.releaseCapture(t)}),A=function(t){return!!c.captureInfo[t]},function(){if(T){g.forEach((function(t){y+=t.selector+E(t.value)+"\n",w&&(y+=function(t){return"body /shadow-deep/ "+t}(t.selector)+E(t.value)+"\n")}));var t=document.createElement("style");t.textContent=y,document.head.appendChild(t)}}(),function(){if(!window.PointerEvent){if(window.PointerEvent=n,window.navigator.msPointerEnabled){var t=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:t,enumerable:!0}),c.registerSource("ms",k)}else Object.defineProperty(window.navigator,"maxTouchPoints",{value:0,enumerable:!0}),c.registerSource("mouse",I),void 0!==window.ontouchstart&&c.registerSource("touch",Y);c.register(document)}}(),window.Element&&!window.Element.prototype.setPointerCapture&&Object.defineProperties(window.Element.prototype,{setPointerCapture:{value:X},releasePointerCapture:{value:F},hasPointerCapture:{value:A}}),{dispatcher:c,Installer:b,PointerEvent:n,PointerMap:i,targetFinding:l}}()}},e={},function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}(978);var t,e}));