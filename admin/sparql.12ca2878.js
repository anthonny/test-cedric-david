("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("3as8q",(function(t,e){var n,r,o,u,a;function i(t){return new RegExp("^(?:"+t.join("|")+")$","i")}n=t.exports,r="sparql",o=function(){return F},Object.defineProperty(n,r,{get:o,set:u,enumerable:!0,configurable:!0});var c=i(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),s=i(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load","into"]),l=/[*+\-<>=&|\^\/!\?]/;function f(t,e){var n,r=t.next();if(a=null,"$"==r||"?"==r)return"?"==r&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variableName.local");if("<"!=r||t.match(/^[\s\u00a0=]/,!1)){if('"'==r||"'"==r)return e.tokenize=(n=r,function(t,e){for(var r,o=!1;null!=(r=t.next());){if(r==n&&!o){e.tokenize=f;break}o=!o&&"\\"==r}return"string"}),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(r))return a=r,"bracket";if("#"==r)return t.skipToEnd(),"comment";if(l.test(r))return"operator";if(":"==r)return d(t),"atom";if("@"==r)return t.eatWhile(/[a-z\d\-]/i),"meta";if(t.eatWhile(/[_\w\d]/),t.eat(":"))return d(t),"atom";var o=t.current();return c.test(o)?"builtin":s.test(o)?"keyword":"variable"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function d(t){t.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function p(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function m(t){t.indent=t.context.indent,t.context=t.context.prev}const F={name:"sparql",startState:function(){return{tokenize:f,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==a)p(e,")",t.column());else if("["==a)p(e,"]",t.column());else if("{"==a)p(e,"}",t.column());else if(/[\]\}\)]/.test(a)){for(;e.context&&"pattern"==e.context.type;)m(e);e.context&&a==e.context.type&&(m(e),"}"==a&&e.context&&"pattern"==e.context.type&&m(e))}else"."==a&&e.context&&"pattern"==e.context.type?m(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?p(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var r=e&&e.charAt(0),o=t.context;if(/[\]\}]/.test(r))for(;o&&"pattern"==o.type;)o=o.prev;var u=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(u?0:1):o.indent+(u?0:n.unit):0},languageData:{commentTokens:{line:"#"}}}}));