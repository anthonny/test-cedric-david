("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("63X6L",(function(e,t){var n,r,i,a;function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}n=e.exports,r="cython",i=function(){return p},Object.defineProperty(n,r,{get:i,set:a,enumerable:!0,configurable:!0});var l=o(["and","or","not","is"]),s=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],c=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function u(e){return e.scopes[e.scopes.length-1]}function f(e){for(var t="error",n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,r=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],i=0;i<r.length;i++)r[i]||r.splice(i--,1);var a=e.hangingIndent,f=s,p=c;null!=e.extra_keywords&&(f=f.concat(e.extra_keywords)),null!=e.extra_builtins&&(p=p.concat(e.extra_builtins));var d=!(e.version&&Number(e.version)<3);if(d){var m=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;f=f.concat(["nonlocal","False","True","None","async","await"]),p=p.concat(["ascii","bytes","exec","print"]);var h=new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else m=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,f=f.concat(["exec","print"]),p=p.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),h=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var b=o(f),g=o(p);function y(e,n){var r=e.sol()&&"\\"!=n.lastToken;if(r&&(n.indent=e.indentation()),r&&"py"==u(n).type){var i=u(n).offset;if(e.eatSpace()){var a=e.indentation();return a>i?v(e,n):a<i&&x(e,n)&&"#"!=e.peek()&&(n.errorToken=!0),null}var o=k(e,n);return i>0&&x(e,n)&&(o+=" "+t),o}return k(e,n)}function k(i,a,o){if(i.eatSpace())return null;if(!o&&i.match(/^#.*/))return"comment";if(i.match(/^[0-9\.]/,!1)){var s=!1;if(i.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(s=!0),i.match(/^[\d_]+\.\d*/)&&(s=!0),i.match(/^\.\d+/)&&(s=!0),s)return i.eat(/J/i),"number";var c=!1;if(i.match(/^0x[0-9a-f_]+/i)&&(c=!0),i.match(/^0b[01_]+/i)&&(c=!0),i.match(/^0o[0-7_]+/i)&&(c=!0),i.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(i.eat(/J/i),c=!0),i.match(/^0(?![\dx])/i)&&(c=!0),c)return i.eat(/L/i),"number"}if(i.match(h))return-1!==i.current().toLowerCase().indexOf("f")?(a.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,a="string";function o(e){return function(t,n){var r=k(t,n,!0);return"punctuation"==r&&("{"==t.current()?n.tokenize=o(e+1):"}"==t.current()&&(n.tokenize=e>1?o(e-1):l)),r}}function l(l,s){for(;!l.eol();)if(l.eatWhile(/[^'"\{\}\\]/),l.eat("\\")){if(l.next(),i&&l.eol())return a}else{if(l.match(n))return s.tokenize=r,a;if(l.match("{{"))return a;if(l.match("{",!1))return s.tokenize=o(0),l.current()?a:s.tokenize(l,s);if(l.match("}}"))return a;if(l.match("}"))return t;l.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return a}return l.isString=!0,l}(i.current(),a.tokenize),a.tokenize(i,a)):(a.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,a="string";function o(o,l){for(;!o.eol();)if(o.eatWhile(/[^'"\\]/),o.eat("\\")){if(o.next(),i&&o.eol())return a}else{if(o.match(n))return l.tokenize=r,a;o.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;l.tokenize=r}return a}return o.isString=!0,o}(i.current(),a.tokenize),a.tokenize(i,a));for(var u=0;u<r.length;u++)if(i.match(r[u]))return"operator";return i.match(n)?"punctuation":"."==a.lastToken&&i.match(m)?"property":i.match(b)||i.match(l)?"keyword":i.match(g)?"builtin":i.match(/^(self|cls)\b/)?"self":i.match(m)?"def"==a.lastToken||"class"==a.lastToken?"def":"variable":(i.next(),o?null:t)}function v(e,t){for(;"py"!=u(t).type;)t.scopes.pop();t.scopes.push({offset:u(t).offset+e.indentUnit,type:"py",align:null})}function x(e,t){for(var n=e.indentation();t.scopes.length>1&&u(t).offset>n;){if("py"!=u(t).type)return!0;t.scopes.pop()}return u(t).offset!=n}function _(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&"@"==i)return e.match(m,!1)?"meta":d?"operator":t;if(/\S/.test(i)&&(n.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=n.lastToken||(r="meta"),"pass"!=i&&"return"!=i||(n.dedent=!0),"lambda"==i&&(n.lambda=!0),":"==i&&!n.lambda&&"py"==u(n).type&&e.match(/^\s*(?:#|$)/,!1)&&v(e,n),1==i.length&&!/string|comment/.test(r)){var o="[({".indexOf(i);if(-1!=o&&function(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(a||e.indentUnit),type:n,align:r})}(e,n,"])}".slice(o,o+1)),-1!=(o="])}".indexOf(i))){if(u(n).type!=i)return t;n.indent=n.scopes.pop().offset-(a||e.indentUnit)}}return n.dedent&&e.eol()&&"py"==u(n).type&&n.scopes.length>1&&n.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:y,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=_(e,n);return i&&"comment"!=i&&(n.lastToken="keyword"==i||"punctuation"==i?e.current():i),"punctuation"==i&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:i},indent:function(e,t,n){if(e.tokenize!=y)return e.tokenize.isString?null:0;var r=u(e),i=r.type==t.charAt(0)||"py"==r.type&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return null!=r.align?r.align-(i?1:0):r.offset-(i?a||n.unit:0)},languageData:{autocomplete:s.concat(c).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}f({});const p=f({extra_keywords:(d="by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE",d.split(" "))});var d}));