("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire14b8.register("dEJBi",(function(e,i){var $,r,t,n;function o(e){for(var i={},$=e.split(" "),r=0;r<$.length;++r)i[$[r]]=!0;return i}$=e.exports,r="mirc",t=function(){return u},Object.defineProperty($,r,{get:t,set:n,enumerable:!0,configurable:!0});var a=o("$! $$ $& $? $+ $abook $abs $active $activecid $activewid $address $addtok $agent $agentname $agentstat $agentver $alias $and $anick $ansi2mirc $aop $appactive $appstate $asc $asctime $asin $atan $avoice $away $awaymsg $awaytime $banmask $base $bfind $binoff $biton $bnick $bvar $bytes $calc $cb $cd $ceil $chan $chanmodes $chantypes $chat $chr $cid $clevel $click $cmdbox $cmdline $cnick $color $com $comcall $comchan $comerr $compact $compress $comval $cos $count $cr $crc $creq $crlf $ctime $ctimer $ctrlenter $date $day $daylight $dbuh $dbuw $dccignore $dccport $dde $ddename $debug $decode $decompress $deltok $devent $dialog $did $didreg $didtok $didwm $disk $dlevel $dll $dllcall $dname $dns $duration $ebeeps $editbox $emailaddr $encode $error $eval $event $exist $feof $ferr $fgetc $file $filename $filtered $finddir $finddirn $findfile $findfilen $findtok $fline $floor $fopen $fread $fserve $fulladdress $fulldate $fullname $fullscreen $get $getdir $getdot $gettok $gmt $group $halted $hash $height $hfind $hget $highlight $hnick $hotline $hotlinepos $ial $ialchan $ibl $idle $iel $ifmatch $ignore $iif $iil $inelipse $ini $inmidi $inpaste $inpoly $input $inrect $inroundrect $insong $instok $int $inwave $ip $isalias $isbit $isdde $isdir $isfile $isid $islower $istok $isupper $keychar $keyrpt $keyval $knick $lactive $lactivecid $lactivewid $left $len $level $lf $line $lines $link $lock $lock $locked $log $logstamp $logstampfmt $longfn $longip $lower $ltimer $maddress $mask $matchkey $matchtok $md5 $me $menu $menubar $menucontext $menutype $mid $middir $mircdir $mircexe $mircini $mklogfn $mnick $mode $modefirst $modelast $modespl $mouse $msfile $network $newnick $nick $nofile $nopath $noqt $not $notags $notify $null $numeric $numok $oline $onpoly $opnick $or $ord $os $passivedcc $pic $play $pnick $port $portable $portfree $pos $prefix $prop $protect $puttok $qt $query $rand $r $rawmsg $read $readomo $readn $regex $regml $regsub $regsubex $remove $remtok $replace $replacex $reptok $result $rgb $right $round $scid $scon $script $scriptdir $scriptline $sdir $send $server $serverip $sfile $sha1 $shortfn $show $signal $sin $site $sline $snick $snicks $snotify $sock $sockbr $sockerr $sockname $sorttok $sound $sqrt $ssl $sreq $sslready $status $strip $str $stripped $syle $submenu $switchbar $tan $target $ticks $time $timer $timestamp $timestampfmt $timezone $tip $titlebar $toolbar $treebar $trust $ulevel $ulist $upper $uptime $url $usermode $v1 $v2 $var $vcmd $vcmdstat $vcmdver $version $vnick $vol $wid $width $wildsite $wildtok $window $wrap $xor"),s=o("abook ajinvite alias aline ame amsg anick aop auser autojoin avoice away background ban bcopy beep bread break breplace bset btrunc bunset bwrite channel clear clearall cline clipboard close cnick color comclose comopen comreg continue copy creq ctcpreply ctcps dcc dccserver dde ddeserver debug dec describe dialog did didtok disable disconnect dlevel dline dll dns dqwindow drawcopy drawdot drawfill drawline drawpic drawrect drawreplace drawrot drawsave drawscroll drawtext ebeeps echo editbox emailaddr enable events exit fclose filter findtext finger firewall flash flist flood flush flushini font fopen fseek fsend fserve fullname fwrite ghide gload gmove gopts goto gplay gpoint gqreq groups gshow gsize gstop gtalk gunload hadd halt haltdef hdec hdel help hfree hinc hload hmake hop hsave ial ialclear ialmark identd if ignore iline inc invite iuser join kick linesep links list load loadbuf localinfo log mdi me menubar mkdir mnick mode msg nick noop notice notify omsg onotice part partall pdcc perform play playctrl pop protect pvoice qme qmsg query queryn quit raw reload remini remote remove rename renwin reseterror resetidle return rlevel rline rmdir run ruser save savebuf saveini say scid scon server set showmirc signam sline sockaccept sockclose socklist socklisten sockmark sockopen sockpause sockread sockrename sockudp sockwrite sound speak splay sreq strip switchbar timer timestamp titlebar tnick tokenize toolbar topic tray treebar ulist unload unset unsetall updatenl url uwho var vcadd vcmd vcrem vol while whois window winhelp write writeint if isalnum isalpha isaop isavoice isban ischan ishop isignore isin isincs isletter islower isnotify isnum ison isop isprotect isreg isupper isvoice iswm iswmcs elseif else goto menu nicklist status title icon size option text edit button check radio box scroll list combo link tab item"),l=o("if elseif else and not or eq ne in ni for foreach while switch"),c=/[+\-*&%=<>!?^\/\|]/;function d(e,i,$){return i.tokenize=$,$(e,i)}function m(e,i){var $=i.beforeParams;i.beforeParams=!1;var r=e.next();if(/[\[\]{}\(\),\.]/.test(r))return"("==r&&$?i.inParams=!0:")"==r&&(i.inParams=!1),null;if(/\d/.test(r))return e.eatWhile(/[\w\.]/),"number";if("\\"==r)return e.eat("\\"),e.eat(/./),"number";if("/"==r&&e.eat("*"))return d(e,i,p);if(";"==r&&e.match(/ *\( *\(/))return d(e,i,f);if(";"!=r||i.inParams){if('"'==r)return e.eat(/"/),"keyword";if("$"==r)return e.eatWhile(/[$_a-z0-9A-Z\.:]/),a&&a.propertyIsEnumerable(e.current().toLowerCase())?"keyword":(i.beforeParams=!0,"builtin");if("%"==r)return e.eatWhile(/[^,\s()]/),i.beforeParams=!0,"string";if(c.test(r))return e.eatWhile(c),"operator";e.eatWhile(/[\w\$_{}]/);var t=e.current().toLowerCase();return s&&s.propertyIsEnumerable(t)?"keyword":l&&l.propertyIsEnumerable(t)?(i.beforeParams=!0,"keyword"):null}return e.skipToEnd(),"comment"}function p(e,i){for(var $,r=!1;$=e.next();){if("/"==$&&r){i.tokenize=m;break}r="*"==$}return"comment"}function f(e,i){for(var $,r=0;$=e.next();){if(";"==$&&2==r){i.tokenize=m;break}")"==$?r++:" "!=$&&(r=0)}return"meta"}const u={name:"mirc",startState:function(){return{tokenize:m,beforeParams:!1,inParams:!1}},token:function(e,i){return e.eatSpace()?null:i.tokenize(e,i)}}}));