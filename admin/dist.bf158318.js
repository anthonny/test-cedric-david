!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8;t.register("iaa7T",(function(n,r){e(n.exports,"SQLDialect",(function(){return B})),e(n.exports,"keywordCompletionSource",(function(){return R})),e(n.exports,"keywordCompletion",(function(){return j})),e(n.exports,"schemaCompletionSource",(function(){return L})),e(n.exports,"schemaCompletion",(function(){return Z})),e(n.exports,"StandardSQL",(function(){return D})),e(n.exports,"sql",(function(){return V})),e(n.exports,"PostgreSQL",(function(){return I})),e(n.exports,"MySQL",(function(){return W})),e(n.exports,"MariaSQL",(function(){return G})),e(n.exports,"MSSQL",(function(){return A})),e(n.exports,"SQLite",(function(){return Y})),e(n.exports,"Cassandra",(function(){return K})),e(n.exports,"PLSQL",(function(){return M}));var a=t("4MEq6"),i=t("8rtkk"),o=t("fNk7f"),s=t("6XZrJ");function l(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function c(e,t,n){for(let r=!1;;){if(e.next<0)return;if(e.next==t&&!r)return void e.advance();r=n&&!r&&92==e.next,e.advance()}}function d(e,t){for(;95==e.next||l(e.next);)null!=t&&(t+=String.fromCharCode(e.next)),e.advance();return t}function u(e,t){for(;48==e.next||49==e.next;)e.advance();t&&e.next==t&&e.advance()}function m(e,t){for(;;){if(46==e.next){if(t)break;t=!0}else if(e.next<48||e.next>57)break;e.advance()}if(69==e.next||101==e.next)for(e.advance(),43!=e.next&&45!=e.next||e.advance();e.next>=48&&e.next<=57;)e.advance()}function p(e){for(;!(e.next<0||10==e.next);)e.advance()}function f(e,t){for(let n=0;n<t.length;n++)if(t.charCodeAt(n)==e)return!0;return!1}const g=" \t\r\n";function h(e,t,n){let r=Object.create(null);r.true=r.false=5,r.null=r.unknown=6;for(let t of e.split(" "))t&&(r[t]=20);for(let e of t.split(" "))e&&(r[e]=21);for(let e of(n||"").split(" "))e&&(r[e]=24);return r}const b="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",_="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",v={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:h(_,b)};function y(e){return new(0,o.ExternalTokenizer)((t=>{var n;let{next:r}=t;if(t.advance(),f(r,g)){for(;f(t.next,g);)t.advance();t.acceptToken(36)}else if(36==r&&36==t.next&&e.doubleDollarQuotedStrings)!function(e){for(;;){if(e.next<0||e.peek(1)<0)return;if(36==e.next&&36==e.peek(1))return void e.advance(2);e.advance()}}(t),t.acceptToken(3);else if(39==r||34==r&&e.doubleQuotedStrings)c(t,r,e.backslashEscapes),t.acceptToken(3);else if(35==r&&e.hashComments||47==r&&47==t.next&&e.slashComments)p(t),t.acceptToken(1);else if(45!=r||45!=t.next||e.spaceAfterDashes&&32!=t.peek(1))if(47==r&&42==t.next){t.advance();for(let e=-1,n=1;!(t.next<0);)if(t.advance(),42==e&&47==t.next){if(n--,!n){t.advance();break}e=-1}else 47==e&&42==t.next?(n++,e=-1):e=t.next;t.acceptToken(2)}else if(101!=r&&69!=r||39!=t.next)if(110!=r&&78!=r||39!=t.next||!e.charSetCasts)if(95==r&&e.charSetCasts)for(let n=0;;n++){if(39==t.next&&n>1){t.advance(),c(t,39,e.backslashEscapes),t.acceptToken(3);break}if(!l(t.next))break;t.advance()}else if(40==r)t.acceptToken(7);else if(41==r)t.acceptToken(8);else if(123==r)t.acceptToken(9);else if(125==r)t.acceptToken(10);else if(91==r)t.acceptToken(11);else if(93==r)t.acceptToken(12);else if(59==r)t.acceptToken(13);else if(e.unquotedBitLiterals&&48==r&&98==t.next)t.advance(),u(t),t.acceptToken(22);else if(98!=r&&66!=r||39!=t.next&&34!=t.next){if(48==r&&(120==t.next||88==t.next)||(120==r||88==r)&&39==t.next){let e=39==t.next;for(t.advance();(a=t.next)>=48&&a<=57||a>=97&&a<=102||a>=65&&a<=70;)t.advance();e&&39==t.next&&t.advance(),t.acceptToken(4)}else if(46==r&&t.next>=48&&t.next<=57)m(t,!0),t.acceptToken(4);else if(46==r)t.acceptToken(14);else if(r>=48&&r<=57)m(t,!1),t.acceptToken(4);else if(f(r,e.operatorChars)){for(;f(t.next,e.operatorChars);)t.advance();t.acceptToken(15)}else if(f(r,e.specialVar))t.next==r&&t.advance(),function(e){if(39==e.next||34==e.next||96==e.next){let t=e.next;e.advance(),c(e,t,!1)}else d(e)}(t),t.acceptToken(17);else if(f(r,e.identifierQuotes))c(t,r,!1),t.acceptToken(19);else if(58==r||44==r)t.acceptToken(16);else if(l(r)){let a=d(t,String.fromCharCode(r));t.acceptToken(46==t.next?18:null!==(n=e.words[a.toLowerCase()])&&void 0!==n?n:18)}}else{const n=t.next;t.advance(),e.treatBitsAsBytes?(c(t,n,e.backslashEscapes),t.acceptToken(23)):(u(t,n),t.acceptToken(22))}else t.advance(),c(t,39,e.backslashEscapes),t.acceptToken(3);else t.advance(),c(t,39,!0);else p(t),t.acceptToken(1);var a}))}const x=y(v),O=o.LRParser.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,x],topRules:{Script:[0,25]},tokenPrec:0});function k(e){let t=e.cursor().moveTo(e.from,-1);for(;/Comment/.test(t.name);)t.moveTo(t.from,-1);return t.node}function w(e,t){let n=e.sliceString(t.from,t.to),r=/^([`'"])(.*)\1$/.exec(n);return r?r[2]:n}function Q(e){return e&&("Identifier"==e.name||"QuotedIdentifier"==e.name)}function S(e,t){if("CompositeIdentifier"==t.name){let n=[];for(let r=t.firstChild;r;r=r.nextSibling)Q(r)&&n.push(w(e,r));return n}return[w(e,t)]}function C(e,t){for(let n=[];;){if(!t||"."!=t.name)return n;let r=k(t);if(!Q(r))return n;n.unshift(w(e,r)),t=k(r)}}function P(e,t){let n=(0,a.syntaxTree)(e).resolveInner(t,-1),r=function(e,t){let n;for(let e=t;!n;e=e.parent){if(!e)return null;"Statement"==e.name&&(n=e)}let r=null;for(let t=n.firstChild,a=!1,i=null;t;t=t.nextSibling){let n="Keyword"==t.name?e.sliceString(t.from,t.to).toLowerCase():null,o=null;if(a)if("as"==n&&i&&Q(t.nextSibling))o=w(e,t.nextSibling);else{if(n&&q.has(n))break;i&&Q(t)&&(o=w(e,t))}else a="from"==n;o&&(r||(r=Object.create(null)),r[o]=S(e,i)),i=/Identifier$/.test(t.name)?t:null}return r}(e.doc,n);return"Identifier"==n.name||"QuotedIdentifier"==n.name||"Keyword"==n.name?{from:n.from,quoted:"QuotedIdentifier"==n.name?e.doc.sliceString(n.from,n.from+1):null,parents:C(e.doc,k(n)),aliases:r}:"."==n.name?{from:t,quoted:null,parents:C(e.doc,n),aliases:r}:{from:t,quoted:null,parents:[],empty:!0,aliases:r}}const q=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));const T=/^\w*$/,U=/^[`'"]?\w*[`'"]?$/;class z{child(e){let t=this.children||(this.children=Object.create(null));return t[e]||(t[e]=new z)}childCompletions(e){return this.children?Object.keys(this.children).filter((e=>e)).map((t=>({label:t,type:e}))):[]}constructor(){this.list=[],this.children=void 0}}let X=O.configure({props:[a.indentNodeProp.add({Statement:(0,a.continuedIndent)()}),a.foldNodeProp.add({Statement:e=>({from:e.firstChild.to,to:e.to}),BlockComment:e=>({from:e.from+2,to:e.to-2})}),(0,i.styleTags)({Keyword:i.tags.keyword,Type:i.tags.typeName,Builtin:i.tags.standard(i.tags.name),Bits:i.tags.number,Bytes:i.tags.string,Bool:i.tags.bool,Null:i.tags.null,Number:i.tags.number,String:i.tags.string,Identifier:i.tags.name,QuotedIdentifier:i.tags.special(i.tags.string),SpecialVar:i.tags.special(i.tags.name),LineComment:i.tags.lineComment,BlockComment:i.tags.blockComment,Operator:i.tags.operator,"Semi Punctuation":i.tags.punctuation,"( )":i.tags.paren,"{ }":i.tags.brace,"[ ]":i.tags.squareBracket})]});class B{get extension(){return this.language.extension}static define(e){let t=function(e,t,n,r){let a={};for(let t in v)a[t]=(e.hasOwnProperty(t)?e:v)[t];return t&&(a.words=h(t,n||"",r)),a}(e,e.keywords,e.types,e.builtin),n=a.LRLanguage.define({name:"sql",parser:X.configure({tokenizers:[{from:x,to:y(t)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new B(t,n)}constructor(e,t){this.dialect=e,this.language=t}}function R(e,t=!1){return function(e,t){let n=Object.keys(e).map((n=>({label:t?n.toUpperCase():n,type:21==e[n]?"type":20==e[n]?"keyword":"variable",boost:-1})));return(0,s.ifNotIn)(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],(0,s.completeFromList)(n))}(e.dialect.words,t)}function j(e,t=!1){return e.language.data.of({autocomplete:R(e,t)})}function L(e){return e.schema?function(e,t,n,r,a){let i=new z,o=i.child(a||"");for(let t in e){let n=t.indexOf(".");(n>-1?i.child(t.slice(0,n)):o).child(n>-1?t.slice(n+1):t).list=e[t].map((e=>"string"==typeof e?{label:e,type:"property"}:e))}o.list=(t||o.childCompletions("type")).concat(r?o.child(r).list:[]);for(let e in i.children){let t=i.child(e);t.list.length||(t.list=t.childCompletions("type"))}return i.list=o.list.concat(n||i.childCompletions("type")),e=>{let{parents:t,from:n,quoted:a,empty:s,aliases:l}=P(e.state,e.pos);if(s&&!e.explicit)return null;l&&1==t.length&&(t=l[t[0]]||t);let c=i;for(let e of t){for(;!c.children||!c.children[e];)if(c==i)c=o;else{if(c!=o||!r)return null;c=c.child(r)}c=c.child(e)}let d=a&&e.state.sliceDoc(e.pos,e.pos+1)==a,u=c.list;return c==i&&l&&(u=u.concat(Object.keys(l).map((e=>({label:e,type:"constant"}))))),{from:n,to:d?e.pos+1:void 0,options:(m=a,p=u,m?p.map((e=>Object.assign(Object.assign({},e),{label:m+e.label+m,apply:void 0}))):p),validFor:a?U:T};var m,p}}(e.schema,e.tables,e.schemas,e.defaultTable,e.defaultSchema):()=>null}function Z(e){return e.schema?(e.dialect||D).language.data.of({autocomplete:L(e)}):[]}function V(e={}){let t=e.dialect||D;return new(0,a.LanguageSupport)(t.language,[Z(e),j(t,!!e.upperCaseKeywords)])}const D=B.define({}),I=B.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:_+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:b+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),N="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",E=b+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",$="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",W=B.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"group_concat "+N,types:E,builtin:$}),G=B.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"always generated groupby_concat hard persistent shutdown soft virtual "+N,types:E,builtin:$}),A=B.define({keywords:_+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:b+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),Y=B.define({keywords:_+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:b+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),K=B.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:b+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),M=B.define({keywords:_+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:b+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0})}))}();