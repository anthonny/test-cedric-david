("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("8N6v5",(function(e,t){var n,a,i,r;n=e.exports,a="smalltalk",i=function(){return m},Object.defineProperty(n,a,{get:i,set:r,enumerable:!0,configurable:!0});var o=/[+\-\/\\*~<>=@%|&?!.,:;^]/,l=/true|false|nil|self|super|thisContext/,s=function(e,t){this.next=e,this.parent=t},u=function(e,t,n){this.name=e,this.context=t,this.eos=n},c=function(){this.context=new s(d,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};c.prototype.userIndent=function(e,t){this.userIndentationDelta=e>0?e/t-this.indentation:0};var d=function(e,t,n){var a=new u(null,t,!1),i=e.next();return'"'===i?a=f(e,new s(f,t)):"'"===i?a=p(e,new s(p,t)):"#"===i?"'"===e.peek()?(e.next(),a=h(e,new s(h,t))):e.eatWhile(/[^\s.{}\[\]()]/)?a.name="string.special":a.name="meta":"$"===i?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),a.name="string.special"):"|"===i&&n.expectVariable?a.context=new s(x,t):/[\[\]{}()]/.test(i)?(a.name="bracket",a.eos=/[\[{(]/.test(i),"["===i?n.indentation++:"]"===i&&(n.indentation=Math.max(0,n.indentation-1))):o.test(i)?(e.eatWhile(o),a.name="operator",a.eos=";"!==i):/\d/.test(i)?(e.eatWhile(/[\w\d]/),a.name="number"):/[\w_]/.test(i)?(e.eatWhile(/[\w\d_]/),a.name=n.expectVariable?l.test(e.current())?"keyword":"variable":null):a.eos=n.expectVariable,a},f=function(e,t){return e.eatWhile(/[^"]/),new u("comment",e.eat('"')?t.parent:t,!0)},p=function(e,t){return e.eatWhile(/[^']/),new u("string",e.eat("'")?t.parent:t,!1)},h=function(e,t){return e.eatWhile(/[^']/),new u("string.special",e.eat("'")?t.parent:t,!1)},x=function(e,t){var n=new u(null,t,!1);return"|"===e.next()?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};const m={name:"smalltalk",startState:function(){return new c},token:function(e,t){if(t.userIndent(e.indentation(),e.indentUnit),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e,t){e.userIndent(0,t)},indent:function(e,t,n){var a=e.context.next===d&&t&&"]"===t.charAt(0)?-1:e.userIndentationDelta;return(e.indentation+a)*n.unit},languageData:{indentOnInput:/^\s*\]$/}}}));