!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mapbox-gl")):"function"==typeof define&&define.amd?define(["exports","mapbox-gl"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).mapboxPmTiles={},e.mapboxgl)}(this,(function(e,t){"use strict";var r=Math.pow,n=(e,t,r)=>new Promise(((n,i)=>{var o=e=>{try{a(r.next(e))}catch(t){i(t)}},s=e=>{try{a(r.throw(e))}catch(t){i(t)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())})),i=Uint8Array,o=Uint16Array,s=Int32Array,a=new i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l=new i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),c=new i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),h=function(e,t){for(var r=new o(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];var i=new s(r[30]);for(n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return{b:r,r:i}},u=h(a,2),d=u.b,f=u.r;d[28]=258,f[258]=28;var g,m=h(l,0).b,p=new o(32768);for(v=0;v<32768;++v)g=(61680&(g=(52428&(g=(43690&v)>>1|(21845&v)<<1))>>2|(13107&g)<<2))>>4|(3855&g)<<4,p[v]=((65280&g)>>8|(255&g)<<8)>>1;var y=function(e,t,r){for(var n=e.length,i=0,s=new o(t);i<n;++i)e[i]&&++s[e[i]-1];var a,l=new o(t);for(i=1;i<t;++i)l[i]=l[i-1]+s[i-1]<<1;if(r){a=new o(1<<t);var c=15-t;for(i=0;i<n;++i)if(e[i])for(var h=i<<4|e[i],u=t-e[i],d=l[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[p[d]>>c]=h}else for(a=new o(n),i=0;i<n;++i)e[i]&&(a[i]=p[l[e[i]-1]++]>>15-e[i]);return a},w=new i(288);for(v=0;v<144;++v)w[v]=8;for(v=144;v<256;++v)w[v]=9;for(v=256;v<280;++v)w[v]=7;for(v=280;v<288;++v)w[v]=8;var v,x=new i(32);for(v=0;v<32;++v)x[v]=5;var b=y(w,9,1),T=y(x,5,1),D=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},U=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},L=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],z=function(e,t,r){var n=new Error(t||M[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,z),!r)throw n;return n},E=function(e,t,r,n){var o=e.length,s=n?n.length:0;if(!o||t.f&&!t.l)return r||new i(0);var h=!r||2!=t.i,u=t.i;r||(r=new i(3*o));var f=function(e){var t=r.length;if(e>t){var n=new i(Math.max(2*t,e));n.set(r),r=n}},g=t.f||0,p=t.p||0,w=t.b||0,v=t.l,x=t.d,M=t.m,E=t.n,C=8*o;do{if(!v){g=U(e,p,1);var A=U(e,p+1,3);if(p+=3,!A){var _=e[(H=4+((p+7)/8|0))-4]|e[H-3]<<8,S=H+_;if(S>o){u&&z(0);break}h&&f(w+_),r.set(e.subarray(H,S),w),t.b=w+=_,t.p=p=8*S,t.f=g;continue}if(1==A)v=b,x=T,M=9,E=5;else if(2==A){var B=U(e,p,31)+257,P=U(e,p+10,15)+4,Z=B+U(e,p+5,31)+1;p+=14;for(var O=new i(Z),k=new i(19),I=0;I<P;++I)k[c[I]]=U(e,p+3*I,7);p+=3*P;var V=D(k),R=(1<<V)-1,$=y(k,V,1);for(I=0;I<Z;){var H,q=$[U(e,p,R)];if(p+=15&q,(H=q>>4)<16)O[I++]=H;else{var j=0,W=0;for(16==H?(W=3+U(e,p,3),p+=2,j=O[I-1]):17==H?(W=3+U(e,p,7),p+=3):18==H&&(W=11+U(e,p,127),p+=7);W--;)O[I++]=j}}var J=O.subarray(0,B),K=O.subarray(B);M=D(J),E=D(K),v=y(J,M,1),x=y(K,E,1)}else z(1);if(p>C){u&&z(0);break}}h&&f(w+131072);for(var N=(1<<M)-1,F=(1<<E)-1,Y=p;;Y=p){var G=(j=v[L(e,p)&N])>>4;if((p+=15&j)>C){u&&z(0);break}if(j||z(2),G<256)r[w++]=G;else{if(256==G){Y=p,v=null;break}var Q=G-254;if(G>264){var X=a[I=G-257];Q=U(e,p,(1<<X)-1)+d[I],p+=X}var ee=x[L(e,p)&F],te=ee>>4;ee||z(3),p+=15&ee;K=m[te];if(te>3){X=l[te];K+=L(e,p)&(1<<X)-1,p+=X}if(p>C){u&&z(0);break}h&&f(w+131072);var re=w+Q;if(w<K){var ne=s-K,ie=Math.min(K,re);for(ne+w<0&&z(3);w<ie;++w)r[w]=n[ne+w]}for(;w<re;w+=4)r[w]=r[w-K],r[w+1]=r[w+1-K],r[w+2]=r[w+2-K],r[w+3]=r[w+3-K];w=re}}t.l=v,t.p=Y,t.b=w,t.f=g,v&&(g=1,t.m=M,t.d=x,t.n=E)}while(!g);return w==r.length?r:function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var n=new i(r-t);return n.set(e.subarray(t,r)),n}(r,0,w)},C=new i(0),A=function(e){31==e[0]&&139==e[1]&&8==e[2]||z(6,"invalid gzip data");var t=e[3],r=10;4&t&&(r+=2+(e[10]|e[11]<<8));for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!e[r++]);return r+(2&t)},_=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},S=function(e,t){return(8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31)&&z(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&z(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),2+(e[1]>>3&4)};function B(e,t){return 31==e[0]&&139==e[1]&&8==e[2]?function(e,t){var r=A(e);return r+8>e.length&&z(6,"invalid gzip data"),E(e.subarray(r,-8),{i:2},t&&t.out||new i(_(e)),t&&t.dictionary)}(e,t):8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31?function(e,t){return E(e,{i:2},t&&t.out,t&&t.dictionary)}(e,t):function(e,t){return E(e.subarray(S(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}(e,t)}var P="undefined"!=typeof TextDecoder&&new TextDecoder;try{P.decode(C,{stream:!0}),1}catch(we){}var Z=(e,t)=>e*r(2,t),O=(e,t)=>Math.floor(e/r(2,t)),k=(e,t)=>Z(e.getUint16(t+1,!0),8)+e.getUint8(t),I=(e,t)=>Z(e.getUint32(t+2,!0),16)+e.getUint16(t,!0),V=(e,t,r,n,i)=>{if(e!==n.getUint8(i))return e-n.getUint8(i);const o=k(n,i+1);if(t!==o)return t-o;const s=k(n,i+4);return r!==s?r-s:0},R=(e,t,r,n)=>{const i=$(e,t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!1}:null},$=(e,t,r,n)=>{let i=0,o=e.byteLength/17-1;for(;i<=o;){const s=o+i>>1,a=V(t,r,n,e,17*s);if(a>0)i=s+1;else{if(!(a<0))return[I(e,17*s+7),e.getUint32(17*s+13,!0)];o=s-1}}return null},H=(e,t)=>e.isDir&&!t.isDir?1:!e.isDir&&t.isDir?-1:e.z!==t.z?e.z-t.z:e.x!==t.x?e.x-t.x:e.y-t.y,q=(e,t)=>{const r=e.getUint8(17*t);return{z:127&r,x:k(e,17*t+1),y:k(e,17*t+4),offset:I(e,17*t+7),length:e.getUint32(17*t+13,!0),isDir:r>>7==1}},j=e=>{const t=[],r=new DataView(e);for(let n=0;n<r.byteLength/17;n++)t.push(q(r,n));return W(t)},W=e=>{e.sort(H);const t=new ArrayBuffer(17*e.length),r=new Uint8Array(t);for(let n=0;n<e.length;n++){const t=e[n];let i=t.z;t.isDir&&(i|=128),r[17*n]=i,r[17*n+1]=255&t.x,r[17*n+2]=t.x>>8&255,r[17*n+3]=t.x>>16&255,r[17*n+4]=255&t.y,r[17*n+5]=t.y>>8&255,r[17*n+6]=t.y>>16&255,r[17*n+7]=255&t.offset,r[17*n+8]=255&O(t.offset,8),r[17*n+9]=255&O(t.offset,16),r[17*n+10]=255&O(t.offset,24),r[17*n+11]=255&O(t.offset,32),r[17*n+12]=255&O(t.offset,48),r[17*n+13]=255&t.length,r[17*n+14]=t.length>>8&255,r[17*n+15]=t.length>>16&255,r[17*n+16]=t.length>>24&255}return t};var J={getHeader:function(e){return n(this,null,(function*(){const t=yield e.getBytes(0,512e3),r=new DataView(t.data),n=r.getUint32(4,!0),i=r.getUint16(8,!0),o=new TextDecoder("utf-8"),s=JSON.parse(o.decode(new DataView(t.data,10,n)));let a=0;"gzip"===s.compression&&(a=2);let l=0;"minzoom"in s&&(l=+s.minzoom);let c=0;"maxzoom"in s&&(c=+s.maxzoom);let h=0,u=0,d=0,f=-180,g=-85,m=180,p=85;if(s.bounds){const e=s.bounds.split(",");f=+e[0],g=+e[1],m=+e[2],p=+e[3]}if(s.center){const e=s.center.split(",");h=+e[0],u=+e[1],d=+e[2]}return{specVersion:r.getUint16(2,!0),rootDirectoryOffset:10+n,rootDirectoryLength:17*i,jsonMetadataOffset:10,jsonMetadataLength:n,leafDirectoryOffset:0,leafDirectoryLength:void 0,tileDataOffset:0,tileDataLength:void 0,numAddressedTiles:0,numTileEntries:0,numTileContents:0,clustered:!1,internalCompression:1,tileCompression:a,tileType:1,minZoom:l,maxZoom:c,minLon:f,minLat:g,maxLon:m,maxLat:p,centerZoom:d,centerLon:h,centerLat:u,etag:t.etag}}))},getZxy:function(e,t,r,i,o,s,a){return n(this,null,(function*(){let n=yield r.getArrayBuffer(t,e.rootDirectoryOffset,e.rootDirectoryLength,e);1===e.specVersion&&(n=j(n));const l=R(new DataView(n),i,o,s);if(l){let e=(yield t.getBytes(l.offset,l.length,a)).data;const r=new DataView(e);return 31===r.getUint8(0)&&139===r.getUint8(1)&&(e=B(new Uint8Array(e))),{data:e}}const c=((e,t)=>{if(e.byteLength<17)return null;const r=e.byteLength/17,n=q(e,r-1);if(n.isDir){const e=n.z,r=t.z-e;return{z:e,x:Math.trunc(t.x/(1<<r)),y:Math.trunc(t.y/(1<<r))}}return null})(new DataView(n),{z:i,x:o,y:s});if(c){const l=((e,t,r,n)=>{const i=$(e,128|t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!0}:null})(new DataView(n),c.z,c.x,c.y);if(l){let n=yield r.getArrayBuffer(t,l.offset,l.length,e);1===e.specVersion&&(n=j(n));const c=R(new DataView(n),i,o,s);if(c){let e=(yield t.getBytes(c.offset,c.length,a)).data;const r=new DataView(e);return 31===r.getUint8(0)&&139===r.getUint8(1)&&(e=B(new Uint8Array(e))),{data:e}}}}}))}},K=class{constructor(){var e;this.tilev4=(e,t)=>n(this,null,(function*(){if("json"===e.type){const t=e.url.substr(10);let r=this.tiles.get(t);r||(r=new ae(t),this.tiles.set(t,r));const n=yield r.getHeader();return{data:{tiles:[`${e.url}/{z}/{x}/{y}`],minzoom:n.minZoom,maxzoom:n.maxZoom,bounds:[n.minLon,n.minLat,n.maxLon,n.maxLat]}}}const r=new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/),n=e.url.match(r);if(!n)throw new Error("Invalid PMTiles protocol URL");const i=n[1];let o=this.tiles.get(i);o||(o=new ae(i),this.tiles.set(i,o));const s=n[2],a=n[3],l=n[4],c=yield o.getHeader(),h=yield null==o?void 0:o.getZxy(+s,+a,+l,t.signal);return h?{data:new Uint8Array(h.data),cacheControl:h.cacheControl,expires:h.expires}:1===c.tileType?{data:new Uint8Array}:{data:null}})),this.tile=(e=this.tilev4,(t,r)=>{if(r instanceof AbortController)return e(t,r);const n=new AbortController;return e(t,n).then((e=>r(void 0,e.data,e.cacheControl||"",e.expires||"")),(e=>r(e))).catch((e=>r(e))),{cancel:()=>n.abort()}}),this.tiles=new Map}add(e){this.tiles.set(e.source.getKey(),e)}get(e){return this.tiles.get(e)}};function N(e,t){return 4294967296*(t>>>0)+(e>>>0)}function F(e){const t=e.buf;let r=t[e.pos++],n=127&r;return r<128?n:(r=t[e.pos++],n|=(127&r)<<7,r<128?n:(r=t[e.pos++],n|=(127&r)<<14,r<128?n:(r=t[e.pos++],n|=(127&r)<<21,r<128?n:(r=t[e.pos],n|=(15&r)<<28,function(e,t){const r=t.buf;let n=r[t.pos++],i=(112&n)>>4;if(n<128)return N(e,i);if(n=r[t.pos++],i|=(127&n)<<3,n<128)return N(e,i);if(n=r[t.pos++],i|=(127&n)<<10,n<128)return N(e,i);if(n=r[t.pos++],i|=(127&n)<<17,n<128)return N(e,i);if(n=r[t.pos++],i|=(127&n)<<24,n<128)return N(e,i);if(n=r[t.pos++],i|=(1&n)<<31,n<128)return N(e,i);throw new Error("Expected varint not more than 10 bytes")}(n,e)))))}function Y(e,t,r,n){if(0===n){1===r&&(t[0]=e-1-t[0],t[1]=e-1-t[1]);const n=t[0];t[0]=t[1],t[1]=n}}var G=[0,1,5,21,85,341,1365,5461,21845,87381,349525,1398101,5592405,22369621,89478485,357913941,1431655765,5726623061,22906492245,91625968981,366503875925,1466015503701,5864062014805,23456248059221,93824992236885,375299968947541,0x5555555555555];function Q(e,t){return n(this,null,(function*(){if(1===t||0===t)return e;if(2===t){if(void 0===globalThis.DecompressionStream)return B(new Uint8Array(e));const t=new Response(e).body;if(!t)throw Error("Failed to read response stream");const r=t.pipeThrough(new globalThis.DecompressionStream("gzip"));return new Response(r).arrayBuffer()}throw Error("Compression method not supported")}))}var X=(e=>(e[e.Unknown=0]="Unknown",e[e.Mvt=1]="Mvt",e[e.Png=2]="Png",e[e.Jpeg=3]="Jpeg",e[e.Webp=4]="Webp",e[e.Avif=5]="Avif",e))(X||{});function ee(e,t){let r=0,n=e.length-1;for(;r<=n;){const i=n+r>>1,o=t-e[i].tileId;if(o>0)r=i+1;else{if(!(o<0))return e[i];n=i-1}}if(n>=0){if(0===e[n].runLength)return e[n];if(t-e[n].tileId<e[n].runLength)return e[n]}return null}var te=class{constructor(e,t=new Headers){this.url=e,this.customHeaders=t,this.mustReload=!1}getKey(){return this.url}setHeaders(e){this.customHeaders=e}getBytes(e,t,r,i){return n(this,null,(function*(){let n,o;r?o=r:(n=new AbortController,o=n.signal);const s=new Headers(this.customHeaders);let a;s.set("range",`bytes=${e}-${e+t-1}`),this.mustReload&&(a="reload");let l=yield fetch(this.url,{signal:o,cache:a,headers:s});if(0===e&&416===l.status){const e=l.headers.get("Content-Range");if(!e||!e.startsWith("bytes */"))throw Error("Missing content-length on 416 response");const t=+e.substr(8);l=yield fetch(this.url,{signal:o,cache:"reload",headers:{range:"bytes=0-"+(t-1)}})}let c=l.headers.get("Etag");if((null==c?void 0:c.startsWith("W/"))&&(c=null),416===l.status||i&&c&&c!==i)throw this.mustReload=!0,new ie(i);if(l.status>=300)throw Error(`Bad response code: ${l.status}`);const h=l.headers.get("Content-Length");if(200===l.status&&(!h||+h>t))throw n&&n.abort(),Error("Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving.");return{data:yield l.arrayBuffer(),etag:c||void 0,cacheControl:l.headers.get("Cache-Control")||void 0,expires:l.headers.get("Expires")||void 0}}))}};function re(e,t){const n=e.getUint32(t+4,!0),i=e.getUint32(t+0,!0);return n*r(2,32)+i}function ne(e){const t={buf:new Uint8Array(e),pos:0},r=F(t),n=[];let i=0;for(let o=0;o<r;o++){const e=F(t);n.push({tileId:i+e,offset:0,length:0,runLength:1}),i+=e}for(let o=0;o<r;o++)n[o].runLength=F(t);for(let o=0;o<r;o++)n[o].length=F(t);for(let o=0;o<r;o++){const e=F(t);n[o].offset=0===e&&o>0?n[o-1].offset+n[o-1].length:e-1}return n}var ie=class extends Error{};function oe(e,t){return n(this,null,(function*(){const r=yield e.getBytes(0,16384);if(19792!==new DataView(r.data).getUint16(0,!0))throw new Error("Wrong magic number for PMTiles archive");if(function(e){const t=new DataView(e);return 2===t.getUint16(2,!0)?(console.warn("PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),2):1===t.getUint16(2,!0)?(console.warn("PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),1):3}(r.data)<3)return[yield J.getHeader(e)];const n=function(e,t){const r=new DataView(e),n=r.getUint8(7);if(n>3)throw Error(`Archive is spec version ${n} but this library supports up to spec version 3`);return{specVersion:n,rootDirectoryOffset:re(r,8),rootDirectoryLength:re(r,16),jsonMetadataOffset:re(r,24),jsonMetadataLength:re(r,32),leafDirectoryOffset:re(r,40),leafDirectoryLength:re(r,48),tileDataOffset:re(r,56),tileDataLength:re(r,64),numAddressedTiles:re(r,72),numTileEntries:re(r,80),numTileContents:re(r,88),clustered:1===r.getUint8(96),internalCompression:r.getUint8(97),tileCompression:r.getUint8(98),tileType:r.getUint8(99),minZoom:r.getUint8(100),maxZoom:r.getUint8(101),minLon:r.getInt32(102,!0)/1e7,minLat:r.getInt32(106,!0)/1e7,maxLon:r.getInt32(110,!0)/1e7,maxLat:r.getInt32(114,!0)/1e7,centerZoom:r.getUint8(118),centerLon:r.getInt32(119,!0)/1e7,centerLat:r.getInt32(123,!0)/1e7,etag:t}}(r.data.slice(0,127),r.etag),i=r.data.slice(n.rootDirectoryOffset,n.rootDirectoryOffset+n.rootDirectoryLength),o=`${e.getKey()}|${n.etag||""}|${n.rootDirectoryOffset}|${n.rootDirectoryLength}`,s=ne(yield t(i,n.internalCompression));return[n,[o,s.length,s]]}))}var se=class{constructor(e=100,t=!0,r=Q){this.cache=new Map,this.invalidations=new Map,this.maxCacheEntries=e,this.counter=1,this.decompress=r}getHeader(e){return n(this,null,(function*(){const t=e.getKey(),r=this.cache.get(t);if(r){r.lastUsed=this.counter++;return yield r.data}const n=new Promise(((t,r)=>{oe(e,this.decompress).then((e=>{e[1]&&this.cache.set(e[1][0],{lastUsed:this.counter++,data:Promise.resolve(e[1][2])}),t(e[0]),this.prune()})).catch((e=>{r(e)}))}));return this.cache.set(t,{lastUsed:this.counter++,data:n}),n}))}getDirectory(e,t,r,i){return n(this,null,(function*(){const o=`${e.getKey()}|${i.etag||""}|${t}|${r}`,s=this.cache.get(o);if(s){s.lastUsed=this.counter++;return yield s.data}const a=new Promise(((o,s)=>{(function(e,t,r,i,o){return n(this,null,(function*(){const n=yield e.getBytes(r,i,void 0,o.etag),s=ne(yield t(n.data,o.internalCompression));if(0===s.length)throw new Error("Empty directory is invalid");return s}))})(e,this.decompress,t,r,i).then((e=>{o(e),this.prune()})).catch((e=>{s(e)}))}));return this.cache.set(o,{lastUsed:this.counter++,data:a}),a}))}getArrayBuffer(e,t,r,i){return n(this,null,(function*(){const n=`${e.getKey()}|${i.etag||""}|${t}|${r}`,o=this.cache.get(n);if(o){o.lastUsed=this.counter++;return yield o.data}const s=new Promise(((o,s)=>{e.getBytes(t,r,void 0,i.etag).then((e=>{o(e.data),this.cache.has(n),this.prune()})).catch((e=>{s(e)}))}));return this.cache.set(n,{lastUsed:this.counter++,data:s}),s}))}prune(){if(this.cache.size>=this.maxCacheEntries){let e,t=1/0;this.cache.forEach(((r,n)=>{r.lastUsed<t&&(t=r.lastUsed,e=n)})),e&&this.cache.delete(e)}}invalidate(e){return n(this,null,(function*(){const t=e.getKey();if(this.invalidations.get(t))return yield this.invalidations.get(t);this.cache.delete(e.getKey());const r=new Promise(((r,n)=>{this.getHeader(e).then((e=>{r(),this.invalidations.delete(t)})).catch((e=>{n(e)}))}));this.invalidations.set(t,r)}))}},ae=class{constructor(e,t,r){this.source="string"==typeof e?new te(e):e,this.decompress=r||Q,this.cache=t||new se}getHeader(){return n(this,null,(function*(){return yield this.cache.getHeader(this.source)}))}getZxyAttempt(e,t,i,o){return n(this,null,(function*(){const n=function(e,t,n){if(e>26)throw Error("Tile zoom level exceeds max safe number limit (26)");if(t>r(2,e)-1||n>r(2,e)-1)throw Error("tile x/y outside zoom level bounds");const i=G[e];let o=0,s=0,a=0;const l=[t,n];let c=r(2,e)/2;for(;c>0;)o=(l[0]&c)>0?1:0,s=(l[1]&c)>0?1:0,a+=c*c*(3*o^s),Y(c,l,o,s),c/=2;return i+a}(e,t,i),s=yield this.cache.getHeader(this.source);if(s.specVersion<3)return J.getZxy(s,this.source,this.cache,e,t,i,o);if(e<s.minZoom||e>s.maxZoom)return;let a=s.rootDirectoryOffset,l=s.rootDirectoryLength;for(let e=0;e<=3;e++){const e=ee(yield this.cache.getDirectory(this.source,a,l,s),n);if(!e)return;if(e.runLength>0){const t=yield this.source.getBytes(s.tileDataOffset+e.offset,e.length,o,s.etag);return{data:yield this.decompress(t.data,s.tileCompression),cacheControl:t.cacheControl,expires:t.expires}}a=s.leafDirectoryOffset+e.offset,l=e.length}throw Error("Maximum directory depth exceeded")}))}getZxy(e,t,r,i){return n(this,null,(function*(){try{return yield this.getZxyAttempt(e,t,r,i)}catch(we){if(we instanceof ie)return this.cache.invalidate(this.source),yield this.getZxyAttempt(e,t,r,i);throw we}}))}getMetadataAttempt(){return n(this,null,(function*(){const e=yield this.cache.getHeader(this.source),t=yield this.source.getBytes(e.jsonMetadataOffset,e.jsonMetadataLength,void 0,e.etag),r=yield this.decompress(t.data,e.internalCompression),n=new TextDecoder("utf-8");return JSON.parse(n.decode(r))}))}getMetadata(){return n(this,null,(function*(){try{return yield this.getMetadataAttempt()}catch(we){if(we instanceof ie)return this.cache.invalidate(this.source),yield this.getMetadataAttempt();throw we}}))}};const le=t.Style.getSourceType("vector"),ce="pmtile-source",he=(e,...t)=>{for(const r of t)for(const t in r)e[t]=r[t];return e},ue=e=>(180+e)/360,de=e=>(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))/360;class fe{constructor(e,r,n){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=r||0,this.maxzoom=n||24}validateBounds(e){return Array.isArray(e)&&4===e.length?[Math.max(-180,e[0]),Math.max(-90,e[1]),Math.min(180,e[2]),Math.min(90,e[3])]:[-180,-90,180,90]}contains(e){const t=Math.pow(2,e.z),r=Math.floor(ue(this.bounds.getWest())*t),n=Math.floor(de(this.bounds.getNorth())*t),i=Math.ceil(ue(this.bounds.getEast())*t),o=Math.ceil(de(this.bounds.getSouth())*t);return e.x>=r&&e.x<i&&e.y>=n&&e.y<o}}class ge{constructor(e,t={}){he(this,t),this.type=e}}class me extends ge{constructor(e,t={}){super("error",he({error:e},t))}}const pe=class extends le{constructor(e,t,r,n){super(e,t,r,n),this.roundZoom=!0,this.type="vector",this.id=e,this._dataType="vector",this.dispatcher=r,this._implementation=t,this._implementation||this.fire(new me(new Error(`Missing options for ${this.id} custom source`)));const{url:i}=t;this.reparseOverscaled=!0,this.scheme="zxy",this.tileSize=512,this._loaded=!1,this.type="vector",this._protocol=new K,this.tiles=[`pmtiles://${i}/{z}/{x}/{y}`];const o=new ae(i);this._protocol.add(o),this._instance=o}static async getMetadata(e){return new ae(e).getMetadata()}static async getHeader(e){return new ae(e).getHeader()}getExtent(){const{minZoom:e,maxZoom:t,minLon:r,minLat:n,maxLon:i,maxLat:o,centerZoom:s,centerLon:a,centerLat:l}=this.header;return[r,n,i,o]}hasTile(e){return!this.tileBounds||this.tileBounds.contains(e.canonical)}load(e){this._loaded=!1,this.fire(new ge("dataloading",{dataType:"source"})),this._tileJSONRequest=Promise.all([this._instance.getHeader(),this._instance.getMetadata()]).then((([e,t])=>{this.header=e;const{specVersion:r,clustered:n,tileType:i,minZoom:o,maxZoom:s,minLon:a,minLat:l,maxLon:c,maxLat:h,centerZoom:u,centerLon:d,centerLat:f}=e,g=[o,s,a,l,c,h];switch(g.includes(void 0)||g.includes(null)||(this.tileBounds=new fe([a,l,c,h],o,s),this.minzoom=o,this.maxzoom=s),null==this.maxzoom&&console.warn("The maxzoom parameter is not defined in the source json. This can cause memory leak. So make sure to define maxzoom in the layer"),this._tileJSONRequest=void 0,this._loaded=!0,he(this,t),this.tileType=i,i){case X.Png:this.contentType="image/png";break;case X.Jpeg:this.contentType="image/jpeg";break;case X.Webp:this.contentType="image/webp";break;case X.Avif:this.contentType="image/avif"}[X.Jpeg,X.Png].includes(this.tileType)?(this.loadTile=this.loadRasterTile,this.type="raster"):this.tileType===X.Mvt?(this.loadTile=this.loadVectorTile,this.type="vector"):this.fire(new me(new Error("Unsupported Tile Type"))),this.fire(new ge("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new ge("data",{dataType:"source",sourceDataType:"content"}))})).catch((t=>{this.fire(new me(t)),e&&e(t)}))}loaded(){return this._loaded}loadVectorTile(e,t){var r,n,i;const o=(r,n)=>{var i,o;return delete e.request,e.aborted?t(null):r&&404!==r.status?t(r):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),(null==(i=this.map)?void 0:i._refreshExpiredTiles)&&n&&e.setExpiryData(n),e.loadVectorData(n,null==(o=this.map)?void 0:o.painter),t(null),void(e.reloadCallback&&(this.loadVectorTile(e,e.reloadCallback),e.reloadCallback=null)))},s=null==(r=this.map)?void 0:r._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),a=null==(n=this.map)?void 0:n._requestManager.transformRequest(s,"Tile"),l={request:a,data:{},uid:e.uid,tileID:e.tileID,tileZoom:e.tileZoom,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:"vector",source:this.id,scope:this.scope,showCollisionBoxes:null==(i=this.map)?void 0:i.showCollisionBoxes,promoteId:this.promoteId,isSymbolTile:e.isSymbolTile,extraShadowCaster:e.isExtraShadowCaster},c=(t,r,n,i)=>{!t&&r?(l.data={cacheControl:n,expires:i,rawData:r},this.map._refreshExpiredTiles&&e.setExpiryData({cacheControl:n,expires:i}),e.actor&&e.actor.send("loadTile",l,o.bind(this),void 0,!0)):o.call(this,t)};e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=t:e.request=this._protocol.tile({...e,url:s},c):(e.actor=this._tileWorkers[s]=this._tileWorkers[s]||this.dispatcher.getActor(),e.request=this._protocol.tile({...a},c))}loadRasterTileData(e,t){e.setTexture(t,this.map.painter)}loadRasterTile(e,t){var r,n;const i=null==(r=this.map)?void 0:r._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),o=null==(n=this.map)?void 0:n._requestManager.transformRequest(i,"Tile"),s=new AbortController;e.request={cancel:()=>s.abort()},this._protocol.tile(o,s).then((({data:r,cacheControl:n,expires:i})=>{if(delete e.request,e.aborted)return t(null);if(null==r){const r={width:this.tileSize,height:this.tileSize,data:null};return this.loadRasterTileData(e,r),e.state="loaded",t(null)}r&&r.resourceTiming&&(e.resourceTiming=r.resourceTiming),this.map._refreshExpiredTiles&&e.setExpiryData({cacheControl:n,expires:i});const o=new window.Blob([new Uint8Array(r)],{type:"image/png"});window.createImageBitmap(o).then((r=>{this.loadRasterTileData(e,r),e.state="loaded",t(null)})).catch((r=>(e.state="errored",t(new Error(`Can't infer data type for ${this.id}, only raster data supported at the moment. ${r}`)))))}).bind(this)).catch((r=>{20!==r.code&&(e.state="errored",t(r))}))}};pe.SOURCE_TYPE=ce;let ye=pe;e.PmTilesSource=ye,e.SOURCE_TYPE=ce,e.default=ye,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
