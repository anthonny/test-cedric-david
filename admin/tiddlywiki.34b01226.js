("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("9zwvf",(function(e,t){var r,n,i,a;r=e.exports,n="tiddlyWiki",i=function(){return A},Object.defineProperty(r,n,{get:i,set:a,enumerable:!0,configurable:!0});var o={},u={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},f=/[\w_\-]/i,l=/^\-\-\-\-+$/,c=/^\/\*\*\*$/,m=/^\*\*\*\/$/,s=/^<<<$/,k=/^\/\/\{\{\{$/,h=/^\/\/\}\}\}$/,d=/^<!--\{\{\{-->$/,b=/^<!--\}\}\}-->$/,p=/^\{\{\{$/,g=/^\}\}\}$/,w=/.*?\}\}\}/;function v(e,t,r){return t.tokenize=r,r(e,t)}function $(e,t){var r=e.sol(),n=e.peek();if(t.block=!1,r&&/[<\/\*{}\-]/.test(n)){if(e.match(p))return t.block=!0,v(e,t,x);if(e.match(s))return"quote";if(e.match(c)||e.match(m))return"comment";if(e.match(k)||e.match(h)||e.match(d)||e.match(b))return"comment";if(e.match(l))return"contentSeparator"}if(e.next(),r&&/[\/\*!#;:>|]/.test(n)){if("!"==n)return e.skipToEnd(),"header";if("*"==n)return e.eatWhile("*"),"comment";if("#"==n)return e.eatWhile("#"),"comment";if(";"==n)return e.eatWhile(";"),"comment";if(":"==n)return e.eatWhile(":"),"comment";if(">"==n)return e.eatWhile(">"),"quote";if("|"==n)return"header"}if("{"==n&&e.match("{{"))return v(e,t,x);if(/[hf]/i.test(n)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==n)return"string";if("~"==n)return"brace";if(/[\[\]]/.test(n)&&e.match(n))return"brace";if("@"==n)return e.eatWhile(f),"link";if(/\d/.test(n))return e.eatWhile(/\d/),"number";if("/"==n){if(e.eat("%"))return v(e,t,y);if(e.eat("/"))return v(e,t,W)}if("_"==n&&e.eat("_"))return v(e,t,_);if("-"==n&&e.eat("-")){if(" "!=e.peek())return v(e,t,T);if(" "==e.peek())return"brace"}return"'"==n&&e.eat("'")?v(e,t,z):"<"==n&&e.eat("<")?v(e,t,q):(e.eatWhile(/[\w\$_]/),o.propertyIsEnumerable(e.current())?"keyword":null)}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=$;break}n="%"==r}return"comment"}function z(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=$;break}n="'"==r}return"strong"}function x(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(w)||r&&e.sol()&&e.match(g)?(t.tokenize=$,"comment"):(e.next(),"comment")}function W(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=$;break}n="/"==r}return"emphasis"}function _(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=$;break}n="_"==r}return"link"}function T(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=$;break}n="-"==r}return"deleted"}function q(e,t){if("<<"==e.current())return"meta";var r=e.next();return r?">"==r&&">"==e.peek()?(e.next(),t.tokenize=$,"meta"):(e.eatWhile(/[\w\$_]/),u.propertyIsEnumerable(e.current())?"keyword":null):(t.tokenize=$,null)}const A={name:"tiddlywiki",startState:function(){return{tokenize:$}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}));