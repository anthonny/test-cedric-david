("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("doSpM",(function(e,n){var t,r,i,o;function a(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}t=e.exports,r="octave",i=function(){return w},Object.defineProperty(t,r,{get:i,set:o,enumerable:!0,configurable:!0});var c=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),l=new RegExp("^[\\(\\[\\{\\},:=;\\.]"),s=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),u=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),f=new RegExp("^((>>=)|(<<=))"),m=new RegExp("^[\\]\\)]"),d=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),p=a(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),h=a(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);function g(e,n){return e.sol()||"'"!==e.peek()?(n.tokenize=k,k(e,n)):(e.next(),n.tokenize=k,"operator")}function b(e,n){return e.match(/^.*%}/)?(n.tokenize=k,"comment"):(e.skipToEnd(),"comment")}function k(e,n){if(e.eatSpace())return null;if(e.match("%{"))return n.tokenize=b,e.skipToEnd(),"comment";if(e.match(/^[%#]/))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return e.tokenize=k,"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(e.match(a(["nan","NaN","inf","Inf"])))return"number";var t=e.match(/^"(?:[^"]|"")*("|$)/)||e.match(/^'(?:[^']|'')*('|$)/);return t?t[1]?"string":"error":e.match(h)?"keyword":e.match(p)?"builtin":e.match(d)?"variable":e.match(c)||e.match(s)?"operator":e.match(l)||e.match(u)||e.match(f)?null:e.match(m)?(n.tokenize=g,null):(e.next(),"error")}const w={name:"octave",startState:function(){return{tokenize:k}},token:function(e,n){var t=n.tokenize(e,n);return"number"!==t&&"variable"!==t||(n.tokenize=g),t},languageData:{commentTokens:{line:"%"}}}}));