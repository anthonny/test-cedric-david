("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("fSFou",(function(e,n){var t,i,r,a;function o(e,n){for(var t=0;t<e.length;t++)n(e[t],t)}function l(e,n){for(var t=0;t<e.length;t++)if(n(e[t],t))return!0;return!1}t=e.exports,i="dylan",r=function(){return w},Object.defineProperty(t,i,{get:r,set:a,enumerable:!0,configurable:!0});var f={unnamedDefinition:["interface"],namedDefinition:["module","library","macro","C-struct","C-union","C-function","C-callable-wrapper"],typeParameterizedDefinition:["class","C-subtype","C-mapped-subtype"],otherParameterizedDefinition:["method","function","C-variable","C-address"],constantSimpleDefinition:["constant"],variableSimpleDefinition:["variable"],otherSimpleDefinition:["generic","domain","C-pointer-type","table"],statement:["if","block","begin","method","case","for","select","when","unless","until","while","iterate","profiling","dynamic-bind"],separator:["finally","exception","cleanup","else","elseif","afterwards"],other:["above","below","by","from","handler","in","instance","let","local","otherwise","slot","subclass","then","to","keyed-by","virtual"],signalingCalls:["signal","error","cerror","break","check-type","abort"]};f.otherDefinition=f.unnamedDefinition.concat(f.namedDefinition).concat(f.otherParameterizedDefinition),f.definition=f.typeParameterizedDefinition.concat(f.otherDefinition),f.parameterizedDefinition=f.typeParameterizedDefinition.concat(f.otherParameterizedDefinition),f.simpleDefinition=f.constantSimpleDefinition.concat(f.variableSimpleDefinition).concat(f.otherSimpleDefinition),f.keyword=f.statement.concat(f.separator).concat(f.other);var c="[-_a-zA-Z?!*@<>$%]+",s=new RegExp("^"+c),u={symbolKeyword:c+":",symbolClass:"<"+c+">",symbolGlobal:"\\*"+c+"\\*",symbolConstant:"\\$"+c},d={symbolKeyword:"atom",symbolClass:"tag",symbolGlobal:"variableName.standard",symbolConstant:"variableName.constant"};for(var m in u)u.hasOwnProperty(m)&&(u[m]=new RegExp("^"+u[m]));u.keyword=[/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];var p={keyword:"keyword",definition:"def",simpleDefinition:"def",signalingCalls:"builtin"},b={},y={};function h(e,n,t){return n.tokenize=t,t(e,n)}function k(e,n){var t=e.peek();if("'"==t||'"'==t)return e.next(),h(e,n,g(t,"string"));if("/"==t){if(e.next(),e.eat("*"))return h(e,n,x);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}else if(/[+\-\d\.]/.test(t)){if(e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i)||e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i)||e.match(/^[+-]?\d+/))return"number"}else{if("#"==t)return e.next(),'"'==(t=e.peek())?(e.next(),h(e,n,g('"',"string"))):"b"==t?(e.next(),e.eatWhile(/[01]/),"number"):"x"==t?(e.next(),e.eatWhile(/[\da-f]/i),"number"):"o"==t?(e.next(),e.eatWhile(/[0-7]/),"number"):"#"==t?(e.next(),"punctuation"):"["==t||"("==t?(e.next(),"bracket"):e.match(/f|t|all-keys|include|key|next|rest/i)?"atom":(e.eatWhile(/[-a-zA-Z]/),"error");if("~"==t)return e.next(),"="==(t=e.peek())?(e.next(),"="==(t=e.peek())?(e.next(),"operator"):"operator"):"operator";if(":"==t){if(e.next(),"="==(t=e.peek()))return e.next(),"operator";if(":"==t)return e.next(),"punctuation"}else{if(-1!="[](){}".indexOf(t))return e.next(),"bracket";if(-1!=".,".indexOf(t))return e.next(),"punctuation";if(e.match("end"))return"keyword"}}for(var i in u)if(u.hasOwnProperty(i)){var r=u[i];if(r instanceof Array&&l(r,(function(n){return e.match(n)}))||e.match(r))return d[i]}return/[+\-*\/^=<>&|]/.test(t)?(e.next(),"operator"):e.match("define")?"def":(e.eatWhile(/[\w\-]/),b.hasOwnProperty(e.current())?y[e.current()]:e.current().match(s)?"variable":(e.next(),"variableName.standard"))}function x(e,n){for(var t,i=!1,r=!1,a=0;t=e.next();){if("/"==t&&i){if(!(a>0)){n.tokenize=k;break}a--}else"*"==t&&r&&a++;i="*"==t,r="/"==t}return"comment"}function g(e,n){return function(t,i){for(var r,a=!1,o=!1;null!=(r=t.next());){if(r==e&&!a){o=!0;break}a=!a&&"\\"==r}return!o&&a||(i.tokenize=k),n}}o(["keyword","definition","simpleDefinition","signalingCalls"],(function(e){o(f[e],(function(n){b[n]=e,y[n]=p[e]}))}));const w={name:"dylan",startState:function(){return{tokenize:k,currentIndent:0}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},languageData:{commentTokens:{block:{open:"/*",close:"*/"}}}}}));