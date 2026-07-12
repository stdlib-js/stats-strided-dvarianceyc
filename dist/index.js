"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var y=q(function(C,p){
function E(r,e,a,i,f){var n,u,t,s,c,o,v;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||i===0)return 0;for(n=a[f],u=f+i,t=0,v=2;v<=r;v++)s=a[u],n+=s,c=v*s-n,t+=1/(v*(v-1))*c*c,u+=i;return t/o}p.exports=E
});var x=q(function(D,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),S=y();function b(r,e,a,i){return S(r,e,a,i,O(r,i))}m.exports=b
});var R=q(function(F,l){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),h=y();g(j,"ndarray",h);l.exports=j
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),d,_=w(k(__dirname,"./native.js"));z(_)?d=A:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
