("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("k9O0I",(function(e,r){var t,n,a,o;function i(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}t=e.exports,n="tcl",a=function(){return m},Object.defineProperty(t,n,{get:a,set:o,enumerable:!0,configurable:!0});var l=i("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),f=i("if elseif else and not or eq ne in ni for foreach while switch"),u=/[+\-*&%=<>!?^\/\|]/;function s(e,r,t){return r.tokenize=t,t(e,r)}function c(e,r){var t=r.beforeParams;r.beforeParams=!1;var n,a=e.next();if('"'!=a&&"'"!=a||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(a))return"("==a&&t?r.inParams=!0:")"==a&&(r.inParams=!1),null;if(/\d/.test(a))return e.eatWhile(/[\w\.]/),"number";if("#"==a)return e.eat("*")?s(e,r,d):"#"==a&&e.match(/ *\[ *\[/)?s(e,r,p):(e.skipToEnd(),"comment");if('"'==a)return e.skipTo(/"/),"comment";if("$"==a)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(u.test(a))return e.eatWhile(u),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var o=e.current().toLowerCase();return l&&l.propertyIsEnumerable(o)?"keyword":f&&f.propertyIsEnumerable(o)?(r.beforeParams=!0,"keyword"):null}return s(e,r,(n=a,function(e,r){for(var t,a=!1,o=!1;null!=(t=e.next());){if(t==n&&!a){o=!0;break}a=!a&&"\\"==t}return o&&(r.tokenize=c),"string"}))}function d(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=c;break}n="*"==t}return"comment"}function p(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=c;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}const m={name:"tcl",startState:function(){return{tokenize:c,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}}}));