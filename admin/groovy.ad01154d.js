("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("3Jqx4",(function(e,t){var n,r,i,o;function a(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n=e.exports,r="groovy",i=function(){return w},Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0});var l,s=a("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),u=a("catch class def do else enum finally for if interface switch trait try while"),f=a("return break continue"),c=a("null true false this");function p(e,t){var n=e.next();if('"'==n||"'"==n)return d(n,e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return l=n,null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if("/"==n){if(e.eat("*"))return t.tokenize.push(h),h(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";if(y(t.lastToken,!1))return d(n,e,t)}if("-"==n&&e.eat(">"))return l="->",null;if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta";if("."==t.lastToken)return"property";if(e.eat(":"))return l="proplabel","property";var r=e.current();return c.propertyIsEnumerable(r)?"atom":s.propertyIsEnumerable(r)?(u.propertyIsEnumerable(r)?l="newstatement":f.propertyIsEnumerable(r)&&(l="standalone"),"keyword"):"variable"}function d(e,t,n){var r=!1;if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string";r=!0}function i(t,n){for(var i,o=!1,a=!r;null!=(i=t.next());){if(i==e&&!o){if(!r)break;if(t.match(e+e)){a=!0;break}}if('"'==e&&"$"==i&&!o){if(t.eat("{"))return n.tokenize.push(m()),"string";if(t.match(/^\w/,!1))return n.tokenize.push(k),"string"}o=!o&&"\\"==i}return a&&n.tokenize.pop(),"string"}return n.tokenize.push(i),i(t,n)}function m(){var e=1;function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++;return p(t,n)}return t.isBase=!0,t}function k(e,t){var n=e.match(/^(\.|[\w\$_]+)/);return n?"."==n[0]?null:"variable":(t.tokenize.pop(),t.tokenize[t.tokenize.length-1](e,t))}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop();break}r="*"==n}return"comment"}function y(e,t){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!t}function g(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function b(e,t,n){return e.context=new g(e.indented,t,n,null,e.context)}function v(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}p.isBase=!0;const w={name:"groovy",startState:function(e){return{tokenize:[p],context:new g(-e,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||y(t.lastToken,!0)||(v(t),n=t.context)),e.eatSpace())return null;l=null;var r=t.tokenize[t.tokenize.length-1](e,t);if("comment"==r)return r;if(null==n.align&&(n.align=!0),";"!=l&&":"!=l||"statement"!=n.type)if("->"==l&&"statement"==n.type&&"}"==n.prev.type)v(t),t.context.align=!1;else if("{"==l)b(t,e.column(),"}");else if("["==l)b(t,e.column(),"]");else if("("==l)b(t,e.column(),")");else if("}"==l){for(;"statement"==n.type;)n=v(t);for("}"==n.type&&(n=v(t));"statement"==n.type;)n=v(t)}else l==n.type?v(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==l)&&b(t,e.column(),"statement");else v(t);return t.startOfLine=!1,t.lastToken=l||r,r},indent:function(e,t,n){if(!e.tokenize[e.tokenize.length-1].isBase)return null;var r=t&&t.charAt(0),i=e.context;"statement"!=i.type||y(e.lastToken,!0)||(i=i.prev);var o=r==i.type;return"statement"==i.type?i.indented+("{"==r?0:n.unit):i.align?i.column+(o?0:1):i.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}));