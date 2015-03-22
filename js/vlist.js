/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2013 Sergi Mansilla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";function VirtualList(t){function e(t){var e=t.target.scrollTop;if(!a||Math.abs(e-a)>l){var i=parseInt(e/r)-n;o._renderChunk(o.container,0>i?0:i),a=e}h=Date.now(),t.preventDefault&&t.preventDefault()}var i=t&&t.w+"px"||"100%",s=t&&t.h+"px"||"100%",r=this.itemHeight=t.itemHeight;this.items=t.items,this.generatorFn=t.generatorFn,this.totalRows=t.totalRows||t.items&&t.items.length,this.container=VirtualList.createContainer(i,s);var n=Math.ceil(t.h/r);this.cachedItemsLen=3*n,this._renderChunk(this.container,0);var a,o=this,l=n*r,h=0;this.rmNodeInterval=setInterval(function(){if(Date.now()-h>100)for(var t=document.querySelectorAll('[data-rm="1"]'),e=0,i=t.length;i>e;e++)o.container.removeChild(t[e])},300),this.container.addEventListener("scroll",e)}VirtualList.prototype.createRow=function(t){var e;if(this.generatorFn)e=this.generatorFn(t);else if(this.items)if("string"==typeof this.items[t]){var i=document.createTextNode(this.items[t]);e=document.createElement("div"),e.style.height=this.itemHeight+"px",e.appendChild(i)}else e=this.items[t];return e.classList.add("vrow"),e.style.position="absolute",e.style.top=t*this.itemHeight+"px",e},VirtualList.prototype._renderChunk=function(t,e){var i=e+this.cachedItemsLen;i>this.totalRows&&(i=this.totalRows);for(var s=document.createDocumentFragment(),r=e;i>r;r++)s.appendChild(this.createRow(r));for(var n=1,a=t.childNodes.length;a>n;n++)t.childNodes[n].style.display="none",t.childNodes[n].setAttribute("data-rm","2");t.appendChild(s)},VirtualList.createContainer=function(t,e){var i=document.createElement("div"); i.className="container",i.style.width=t,i.id="collapse_list",i.style.height=e,i.style.overflow="auto",i.style.position="absolute",i.style.padding=0,i.style.border="1px solid black"; return i;},VirtualList.createScroller=function(t){var e=document.createElement("div");return e.style.opacity=0,e.style.position="absolute",e.style.top=0,e.style.left=0,e.style.width="1px",e.style.height=t+"px",e};