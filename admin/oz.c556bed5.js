("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("2tA9d",(function(e,t){var n,r,a,o;function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}n=e.exports,r="oz",a=function(){return x},Object.defineProperty(n,r,{get:a,set:o,enumerable:!0,configurable:!0});var u=/[\^@!\|<>#~\.\*\-\+\\/,=]/,c=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,f=/(:::)|(\.\.\.)|(=<:)|(>=:)/,s=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],l=["end"],d=i(["true","false","nil","unit"]),h=i(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),m=i(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),p=i(s),k=i(l);function z(e,t){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(f)||e.match(c))return"operator";if(e.match(d))return"atom";var n=e.match(m);if(n)return t.doInCurrentLine?t.doInCurrentLine=!1:t.currentIndent++,"proc"==n[0]||"fun"==n[0]?t.tokenize=y:"class"==n[0]?t.tokenize=g:"meth"==n[0]&&(t.tokenize=b),"keyword";if(e.match(p)||e.match(h))return"keyword";if(e.match(k))return t.currentIndent--,"keyword";var r,a=e.next();if('"'==a||"'"==a)return t.tokenize=(r=a,function(e,t){for(var n,a=!1,o=!1;null!=(n=e.next());){if(n==r&&!a){o=!0;break}a=!a&&"\\"==n}return!o&&a||(t.tokenize=z),"string"}),t.tokenize(e,t);if(/[~\d]/.test(a)){if("~"==a){if(!/^[0-9]/.test(e.peek()))return null;if("0"==e.next()&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}return"0"==a&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return"%"==a?(e.skipToEnd(),"comment"):"/"==a&&e.eat("*")?(t.tokenize=w,w(e,t)):u.test(a)?"operator":(e.eatWhile(/\w/),"variable")}function g(e,t){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=z,"type")}function b(e,t){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=z,"def")}function y(e,t){return e.eatSpace()?null:!t.hasPassedFirstStage&&e.eat("{")?(t.hasPassedFirstStage=!0,"bracket"):t.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),t.hasPassedFirstStage=!1,t.tokenize=z,"def"):(t.tokenize=z,null)}function w(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=z;break}r="*"==n}return"comment"}const x={name:"oz",startState:function(){return{tokenize:z,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,t){return e.sol()&&(t.doInCurrentLine=0),t.tokenize(e,t)},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(k)||r.match(p)||r.match(/(\[])/)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{indentOnInut:(I=s.concat(l),new RegExp("[\\[\\]]|("+I.join("|")+")$")),commentTokens:{line:"%",block:{open:"/*",close:"*/"}}}};var I}));