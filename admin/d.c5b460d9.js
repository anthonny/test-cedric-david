("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("dgfoP",(function(e,t){var n,r,i,o;function a(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n=e.exports,r="d",i=function(){return z},Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0});var l="body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";const u={keywords:a("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters "+l),blockKeywords:a(l),builtin:a("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:a("exit failure success true false null"),hooks:{"@":function(e,t){return e.eatWhile(/[\w\$_]/),"meta"}}};var s,c=u.statementIndentUnit,f=u.keywords,d=u.builtin,p=u.blockKeywords,m=u.atoms,y=u.hooks,b=u.multiLineStrings,h=/[+\-*&%=<>!?|\/]/;function g(e,t){var n,r=e.next();if(y[r]){var i=y[r](e,t);if(!1!==i)return i}if('"'==r||"'"==r||"`"==r)return t.tokenize=(n=r,function(e,t){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==n&&!i){o=!0;break}i=!i&&"\\"==r}return(o||!i&&!b)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(r))return s=r,null;if(/\d/.test(r))return e.eatWhile(/[\w\.]/),"number";if("/"==r){if(e.eat("+"))return t.tokenize=k,k(e,t);if(e.eat("*"))return t.tokenize=v,v(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(h.test(r))return e.eatWhile(h),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var o=e.current();return f.propertyIsEnumerable(o)?(p.propertyIsEnumerable(o)&&(s="newstatement"),"keyword"):d.propertyIsEnumerable(o)?(p.propertyIsEnumerable(o)&&(s="newstatement"),"builtin"):m.propertyIsEnumerable(o)?"atom":"variable"}function v(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function k(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="+"==n}return"comment"}function w(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function x(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new w(r,t,n,null,e.context)}function _(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}const z={name:"d",startState:function(e){return{tokenize:null,context:new w(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;s=null;var r=(t.tokenize||g)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),";"!=s&&":"!=s&&","!=s||"statement"!=n.type)if("{"==s)x(t,e.column(),"}");else if("["==s)x(t,e.column(),"]");else if("("==s)x(t,e.column(),")");else if("}"==s){for(;"statement"==n.type;)n=_(t);for("}"==n.type&&(n=_(t));"statement"==n.type;)n=_(t)}else s==n.type?_(t):(("}"==n.type||"top"==n.type)&&";"!=s||"statement"==n.type&&"newstatement"==s)&&x(t,e.column(),"statement");else _(t);return t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=g&&null!=e.tokenize)return null;var r=e.context,i=t&&t.charAt(0);"statement"==r.type&&"}"==i&&(r=r.prev);var o=i==r.type;return"statement"==r.type?r.indented+("{"==i?0:c||n.unit):r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}));