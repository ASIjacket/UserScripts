// ==UserScript==
// @name         Pagetual
// @name:zh-CN   东方永页机
// @name:zh-TW   東方永頁機
// @name:ja      東方永頁機
// @name:ru      Пейджетуал
// @name:de      Pagetual
// @name:es      Pagetual
// @name:fr      Pagetual
// @name:it      Pagetual
// @name:ko      東方永頁機
// @namespace    hoothin
// @version      1.3.9.3
// @description  Most compatible Auto pager script ever! Simply auto loading paginated web pages.
// @description:zh-CN  自动加载并拼接下一分页内容（适用于论坛、漫画站、小说站、资讯站、博客等），无需规则支持所有网页
// @description:zh-TW  自動加載並拼接下一分頁內容（適用於論壇、漫畫站、小說站、資訊站、博客等），無需規則支持所有網頁
// @description:ja     Webページを自動で読み込み継ぎ足し表示を行うブラウザ拡張です
// @description:ru     Просто автоматически загрузите следующую страницу
// @description:de     Laden Sie einfach automatisch die nächste Seite
// @description:es     Carga automática de páginas web paginadas
// @description:fr     Chargement automatique des pages Web paginées
// @description:it     Caricamento automatico di pagine Web impaginate
// @description:ko     다음 페이지를 자동으로 로드하세요
// @author       hoothin
// @include      http://*
// @include      https://*
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAD3VU33VU32VEz8U073VU32VU33VU32VUz0Uk/3VE32VU32VUz2VU32VU32VU32VU33VU33U0z2VU34Wkv3VE32VUz/mpj/nJj2VUz2VU32VE33VEz2VU32VU32VUz3VE32VEz3VE3/mZf2Vkz2VU3/mpilFFolAAAAJXRSTlMA3Lp/GvTBT5YQLuawZ/DOyZwlPQeKc21N04+FX1bqpm9DNoB4T68ePwAAAitJREFUWMPt1tuasiAUBuCFCG5Rs3QybTPV1/1f4v/3PDkyIojn8x5qBrI+ltAfh32/yysmBKvyXb+njb6bDL9kzTd5SzjDAsYT8nFoGSxYe6BVqoNDp2jFDit25BRgVUAODB4YWcETWVTwVNGiGN5iWtBgg4YMCpsoI38dNunmmWyxUTvbPwwbsYR0fIzZLQ0pTG8eieRmBLMmpdH9uimQEf6TNRnXXKLZHixpJtywLzOgMHtFCqdM64DahHRnOE1dsrekm9wr2WtLcAlpdHwcp1pAJySXYnERclzp4+v19jXdmcTvQUJtz+ZaI4i05/V/UGYrCxbaAsOYoNfIKEQxpqQuzCgJJJ/3f42O8ywEZuMVWi/8hODxGj3GW2b0udkbGULLDOjimAG0S3fLGlBnXQM9irG1CiQdVQi0dqQsOSDlyEEz7Vy9OxxfR71VCXsSB23jMrKJYZXSjw57sqgLn5Z0wolsOCz0RyJkyeYjgz7pwwVq20eboZwtVUl2EnN5gJ50dQZFdryATvABRTr/tJXkUMdaAK5pwtCapwtFLskguwuyMh/Sd9WChQ4sIvIUYSk3PYqQvCQlOC04IfN7PkdjOyRKWhdKXMmiAFt9i3sJ5jxoRuR0vqAghxxwHuqfQE5OHGDKOrwEnqs1DgAZ2e4Eev1d45TN7JfhrQLKgfwMFYAsvp33dXII073aVQLI2gN5S58lfmGnKKFtah7nkgnBZB7zlP7Y/QNiTM6sYNzawwAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.addStyle
// @grant        GM.openInTab
// @grant        GM.deleteValue
// @downloadURL  https://greasyfork.org/scripts/438684-pagetual/code/Pagetual.user.js
// @updateURL    https://greasyfork.org/scripts/438684-pagetual/code/Pagetual.user.js
// @supportURL   https://github.com/hoothin/UserScripts/issues
// @connect      wedata.net
// @connect      githubusercontent.com
// @run-at       document-idle
// @exclude      http://www.toodledo.com/tasks/*
// @exclude      http*://maps.google.com*/*
// @exclude      *://www.google.*/_/chrome/newtab*
// @exclude      *://mega.*/*
// @exclude      *://*.mega.*/*
// @exclude      *://*.youku.com/v_*
// @exclude      *://*pan.baidu.com
// @exclude      *://*.iqiyi.com/v_*
// @exclude      *://*.iqiyi.com/w_*
// @exclude      *://*.iqiyi.com/a_*
// @exclude      *://*.le.com/ptv/vplay/*
// @exclude      *://v.qq.com/x/cover/*
// @exclude      *://v.qq.com/x/page/*
// @exclude      *://v.qq.com/tv/*
// @exclude      *://*.tudou.com/listplay/*
// @exclude      *://*.tudou.com/albumplay/*
// @exclude      *://*.tudou.com/programs/view/*
// @exclude      *://*.mgtv.com/b/*
// @exclude      *://film.sohu.com/album/*
// @exclude      *://tv.sohu.com/v/*
// @exclude      *://*.bilibili.com/video/*
// @exclude      *://*.bilibili.com/bangumi/play/*
// @exclude      *://*.baofeng.com/play/*
// @exclude      *://vip.pptv.com/show/*
// @exclude      *://v.pptv.com/show/*
// @exclude      *://www.le.com/ptv/vplay/*
// @exclude      *://www.wasu.cn/Play/show/*
// @exclude      *://m.v.qq.com/*
// @exclude      *://m.iqiyi.com/*
// @exclude      *://m.youku.com/alipay_video/*
// @exclude      *://m.mgtv.com/b/*
// @exclude      *://m.tv.sohu.com/v/*
// @exclude      *://m.film.sohu.com/album/*
// @exclude      *://m.le.com/ptv/vplay/*
// @exclude      *://m.pptv.com/show/*
// @exclude      *://m.acfun.cn/v/*
// @exclude      *://m.bilibili.com/video/*
// @exclude      *://m.bilibili.com/anime/*
// @exclude      *://m.bilibili.com/bangumi/play/*
// @exclude      *://m.wasu.cn/Play/show/*
// @exclude      *://www.youtube.com
// @exclude      *://www.youtube.com/
// @exclude      *://www.youtube.com/watch*
// @exclude      *://baike.baidu.com/*
// @exclude      *://*.instagram.com/*
// @exclude      *://order.jd.com/*
// @exclude      *://pagetual.hoothin.com/*
// @exclude      *://hoothin.github.io/PagetualGuide/*
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    if (window.name === 'pagetual-iframe') {
        var domloaded = function (){
            window.scroll(window.scrollX, 999999);
            //window.parent.postMessage('pagetual-iframe:DOMLoaded', '*');
        };
        if(window.opera){
            document.addEventListener('DOMContentLoaded', domloaded, false);
        } else {
            domloaded();
        }
        return;
    }

    if(window.top != window.self){
        //return;
    }

    const lang = navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
    var i18n=(name, param)=>{
        let config={};
        switch (lang){
            case "zh-CN":
            case "zh-SG":
                config={
                    disable:"暂时禁用",
                    disableSite:"在此站禁用",
                    enable:"启用翻页",
                    toTop:"回到顶部",
                    toBottom:"前往页尾",
                    current:"当前页",
                    forceIframe:"强制拼接",
                    cancelForceIframe:"取消强制拼接",
                    configure:"打开配置页",
                    firstUpdate:"点击此处初始化规则",
                    update:"更新规则",
                    click2update:"点击立即更新规则",
                    loadNow:"立即翻页",
                    loadConfirm:"要翻几页？（0为不间断）",
                    noNext:"没有找到下一页，请新建规则",
                    passSec:"更新于 #t# 秒前",
                    passMin:"更新于 #t# 分钟前",
                    passHour:"更新于 #t# 小时前",
                    passDay:"更新于 #t# 天前",
                    cantDel:"无法删除内置规则",
                    confirmDel:"是否确认要删除此规则？",
                    updateSucc:"更新成功",
                    beginUpdate:"正在更新，请稍候",
                    customUrls:"导入规则url，一行一条，AutoPagerize 格式规则需要以\"0|\"开头",
                    customRules:"输入【东方永页机】格式的自定义规则",
                    save:"保存设置",
                    loadingText:"少女祈祷中...",
                    opacity:"分页隔条不透明值",
                    hideBar:"空白处双击隐藏分页隔条",
                    dbClick2Stop:"空白处双击暂停翻页",
                    sortTitle:"排序在下次更新规则后生效",
                    autoRun:"自动启用",
                    inputPageNum:"输入页码跳转"
                };
                break;
            case "zh-TW":
            case "zh-HK":
                config={
                    disable:"暫時禁用",
                    disableSite:"在此站禁用",
                    enable:"啟用翻頁",
                    toTop:"回到頂部",
                    toBottom:"前往頁尾",
                    current:"當前頁",
                    forceIframe:"強制拼接",
                    cancelForceIframe:"取消强制拼接",
                    configure:"打開配置頁",
                    firstUpdate:"點擊此處初始化規則",
                    update:"更新規則",
                    click2update:"點擊立即更新規則",
                    loadNow:"立即翻頁",
                    loadConfirm:"要翻几頁？（0為不間斷）",
                    noNext:"沒有找到下一頁，請新建規則",
                    passSec:"更新于 #t# 秒前",
                    passMin:"更新于 #t# 分鐘前",
                    passHour:"更新于 #t# 小時前",
                    passDay:"更新于 #t# 天前",
                    cantDel:"無法刪除内置規則",
                    confirmDel:"是否確認要刪除此規則？",
                    updateSucc:"更新成功",
                    beginUpdate:"正在更新，請稍候",
                    customUrls:"導入規則url，一行一條，AutoPagerize 格式規則需要以\"0|\"開頭",
                    customRules:"輸入【東方永頁機】格式的自定義規則",
                    save:"存儲設置",
                    loadingText:"少女祈禱中...",
                    opacity:"分頁隔條不透明值",
                    hideBar:"空白處雙擊隱藏分頁隔條",
                    dbClick2Stop:"空白處雙擊暫停翻頁",
                    sortTitle:"排序在下次更新規則後生效",
                    autoRun:"自動啓用",
                    inputPageNum:"輸入頁碼跳轉"
                };
                break;
            case "ja":
                config = {
                    disable: "一時的に無効にする",
                    disableSite:"このサイト無効",
                    enable: "ページめくりを有効にする",
                    toTop: "トップに戻る",
                    toBottom: "ページの下部に移動",
                    current: "現在のページ",
                    forceIframe: "強制ステッチ",
                    cancelForceIframe: "強制ステッチをキャンセル",
                    configure: "設定ページを開く",
                    firstUpdate:"ここをクリックしてルールを初期化します",
                    update: "更新ルール",
                    click2update:"今すぐルールを更新してください",
                    loadNow:"今すぐページをめくる",
                    loadConfirm:"数ページめくりたいですか？（0は途切れない）",
                    noNext:"次のページが見つかりません、新しいルールを作成してください",
                    passSec: "＃t＃秒前に更新",
                    passMin: "＃t＃分前に更新",
                    passHour: "＃t＃時間前に更新",
                    passDay: "＃t＃日前に更新",
                    cantDel: "組み込みルールを削除できません",
                    confirmDel: "このルールを削除してもよろしいですか？",
                    updateSucc: "更新に成功しました",
                    beginUpdate: "更新中、お待ちください",
                    customUrls: "インポートルールのURL、1行に1つ、AutoPagerizeフォーマットルールは\"0|\"で始まる必要があります",
                    customRules: "【東方永頁機】の形式でカスタムルールを入力してください",
                    save: "設定を保存",
                    loadingText: "少女祈祷中...",
                    opacity:"ページネーションバーの不透明値",
                    hideBar:"空白部分をダブルクリックして、ページ区切り文字を非表示にします",
                    dbClick2Stop:"空白部分をダブルクリックしてページめくりを一時停止します",
                    sortTitle:"並べ替えは、次のルールの更新後に有効になります",
                    autoRun:"自動的に有効",
                    inputPageNum:"ジャンプするページ番号を入力"
                };
                break;
            default:
                config={
                    disable:"Disable",
                    disableSite:"Disable on the site",
                    enable:"Enable",
                    toTop:"To Top",
                    toBottom:"To Bottom",
                    current:"Current Page",
                    forceIframe:"Force to join",
                    cancelForceIframe:"Cancel Force join",
                    configure:"Configure",
                    firstUpdate:"Click here to initialize the rules",
                    update:"Update rules",
                    click2update:"Click to update rules from url now",
                    loadNow:"Load next now",
                    loadConfirm:"How much pages do you want to load? (0 means infinite)",
                    noNext:"No next link found, please create a new rule",
                    passSec:"Updated #t# seconds ago",
                    passMin:"Updated #t# minutes ago",
                    passHour:"Updated #t# hours ago",
                    passDay:"Updated #t# days ago",
                    cantDel:"Can't delete buildin rules",
                    confirmDel:"Are you sure you want to delete this rule?",
                    updateSucc:"Update succeeded",
                    beginUpdate:"Begin update, wait a minute please",
                    customUrls:"Import rule url, One url per line, rules on AutoPagerize format need to start with \"0|\"",
                    customRules:"Input custom rules with [Pagetual] format",
                    save:"Save",
                    loadingText:"Shojo Now Loading...",
                    opacity:"Pagination spacer opacity",
                    hideBar:"Double-click on the blank space to hide the paging spacer",
                    dbClick2Stop:"Double-click on the blank space to stop",
                    sortTitle:"Sorting takes effect after the next rule update",
                    autoRun:"Auto run",
                    inputPageNum:"Enter page number to jump"
                };
                break;
        }
        return config[name]?config[name].replace("#t#",param):name;
    };

    var enableDebug=true;
    var debug=str=>{
        if(enableDebug){
            console.debug(str);
        }
    };

    var _GM_xmlhttpRequest,_GM_registerMenuCommand,_GM_notification,_GM_addStyle,_GM_openInTab;
    if(typeof GM_xmlhttpRequest!='undefined'){
        _GM_xmlhttpRequest=GM_xmlhttpRequest;
    }else if(typeof GM!='undefined' && typeof GM.xmlHttpRequest!='undefined'){
        _GM_xmlhttpRequest=GM.xmlHttpRequest;
    }else{
        _GM_xmlhttpRequest=(f)=>{fetch(f.url).then(response=>response.text()).then(data=>{let res={response:data};f.onload(res)}).catch(f.onerror())};
    }
    if(typeof GM_registerMenuCommand!='undefined'){
        _GM_registerMenuCommand=GM_registerMenuCommand;
    }else if(typeof GM!='undefined' && typeof GM.registerMenuCommand!='undefined'){
        _GM_registerMenuCommand=GM.registerMenuCommand;
    }else{
        _GM_registerMenuCommand=(s,f)=>{};
    }
    if(typeof GM_notification!='undefined'){
        _GM_notification=GM_notification;
    }else if(typeof GM!='undefined' && typeof GM.notification!='undefined'){
        _GM_notification=GM.notification;
    }else{
        _GM_notification=(s)=>{alert(s)};
    }
    if(typeof GM_openInTab!='undefined'){
        _GM_openInTab=GM_openInTab;
    }else if(typeof GM!='undefined' && typeof GM.openInTab!='undefined'){
        _GM_openInTab=GM.openInTab;
    }else{
        _GM_openInTab=(s,t)=>{window.open(s)};
    }
    if(typeof GM_addStyle!='undefined'){
        _GM_addStyle=GM_addStyle;
    }else if(typeof GM!='undefined' && typeof GM.addStyle!='undefined'){
        _GM_addStyle=GM.addStyle;
    }else{
        _GM_addStyle=cssStr=>{
            let styleEle=document.createElement("style");
            styleEle.innerHTML=cssStr;
            document.head.appendChild(styleEle);
        };
    }
    var _unsafeWindow=(typeof unsafeWindow=='undefined')?window:unsafeWindow;//兼容 ios userscripts 的寫法
    var storage={
        supportGM: typeof GM_getValue=='function' && typeof GM_getValue('a','b')!='undefined',
        supportGMPromise: typeof GM!='undefined' && typeof GM.getValue=='function' && typeof GM.getValue('a','b')!='undefined',
        mxAppStorage:(function(){
            try{
                return window.external.mxGetRuntime().storage;
            }catch(e){
            }
        })(),
        operaUJSStorage:(function(){
            try{
                return window.opera.scriptStorage;
            }catch(e){
            }
        })(),
        setItem:function(key,value){
            if(this.operaUJSStorage){
                this.operaUJSStorage.setItem(key,value);
            }else if(this.mxAppStorage){
                this.mxAppStorage.setConfig(key,value);
            }else if(this.supportGM){
                GM_setValue(key,value);
                if(value==="" && typeof GM_deleteValue!='undefined'){
                    GM_deleteValue(key);
                }
            }else if(this.supportGMPromise){
                GM.setValue(key,value);
                if(value==="" && typeof GM!='undefined' && typeof GM.deleteValue!='undefined'){
                    GM.deleteValue(key);
                }
            }else if(window.localStorage){
                window.localStorage.setItem(key,value);
            }
        },
        getItem:function(key,cb){
            var value;
            if(this.operaUJSStorage){
                value=this.operaUJSStorage.getItem(key);
            }else if(this.mxAppStorage){
                value=this.mxAppStorage.getConfig(key);
            }else if(this.supportGM){
                value=GM_getValue(key);
            }else if(this.supportGMPromise){
                value=GM.getValue(key).then(v=>{cb(v)});
                return;
            }else if(window.localStorage){
                value=window.localStorage.getItem(key);
            };
            cb(value);
        }
    };
    var rulesData={},ruleUrls,updateDate,configPage="https://github.com/hoothin/UserScripts/tree/master/Pagetual";
    var allOfBody="body>*";
    _GM_registerMenuCommand(i18n("configure"), ()=>{
        _GM_openInTab(configPage,{active:true});
    });

    function getElementByXpath(xpath, contextNode, doc){
        doc = doc || document;
        contextNode = contextNode || doc;
        try {
            var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
        } catch (err) {
            throw new Error(`Invalid xpath: ${xpath}`);
        }
    }

    function getAllElementsByXpath(xpath, contextNode, doc){
        doc = doc || document;
        contextNode = contextNode || doc;
        var result = [];
        try {
            var query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < query.snapshotLength; i++) {
                var node = query.snapshotItem(i);
                if (node.nodeType === 1) result.push(node);
            }
        } catch (err) {
            throw new Error(`Invalid xpath: ${xpath}`);
        }
        return result;
    }

    class RuleParser {
        constructor() {
            this.hpRules=[];
            this.customRules=[];
            this.rules=[];
            this.pageDoc=document;
            this.nextLinkHref=null;
            this.curUrl=location.href;
            this.curSiteRule={};
        }

        initSavedRules(callback){
            var self=this;
            storage.getItem("hpRules", hpRules=>{
                if(hpRules)self.hpRules=hpRules;
                storage.getItem("customRules", customRules=>{
                    if(customRules)self.customRules=customRules;
                    storage.getItem("rules", rules=>{
                        if(rules)this.rules=rules;
                        callback();
                    });
                });
            });
        }

        saveCurSiteRule(){
            if(!this.curSiteRule || !this.curSiteRule.url || this.curSiteRule.singleUrl)return;
            this.hpRules=this.hpRules.filter(item=>{return item&&item.url!=this.curSiteRule.url});
            this.hpRules.unshift(this.curSiteRule);
            if(this.hpRules.length>30){
                this.hpRules.pop();
            }
            storage.setItem("hpRules", this.hpRules);
        }

        requestJSON(url, callback){
            _GM_xmlhttpRequest({
                url: url,
                method: 'GET',
                timeout: 20000,
                onload: function(res) {
                    let json=null;
                    try{
                        json=JSON.parse(res.response||res.responseText);
                    }catch(e){
                        debug(e);
                    }
                    callback(json);
                },
                onerror: function(e) {
                    callback(null, e);
                },
                ontimeout: function(e) {
                    callback(null, e);
                }
            });
        }

        formatRule(item, type, from){
            switch(type){
                case 0:
                    return {
                        from:from,
                        type:type,
                        name:item.name,
                        action:item.data.forceIframe=="true"?1:0,
                        url:item.data.url,
                        pageElement:item.data.pageElement,
                        nextLink:item.data.nextLink,
                        insert:item.data.insertBefore,
                        insertPos:1,
                        updatedAt:item.data.updated_at,
                        css:item.data.Stylus+item.data.CSS,
                        pageAction:item.data.bookmarklet
                    };
                    break;
                case 1:
                default:
                    item.from=from;
                    if(typeof(item.type) == "undefined")item.type=type;
                    return item;
                    break;
            }
            return null;
        }

        addRuleByUrl(url, type, from, callback) {
            if(url.indexOf("?")==-1){
                url=url+"?"+Date.now();
            }else{
                url=url+"&"+Date.now();
            }
            this.requestJSON(url, (json,err)=>{
                if(!json){
                    debug("Update "+url+" rules fail!");
                    debug(err);
                }
                this.addRules(json, type, from);
                callback(json, err);
            });
        }

        addRules(rules, type, from) {
            if(rules && rules.length>0){
                this.rules=this.rules.filter(item=>{return item.from!=from});
                rules.forEach(item=>{
                    let rule=this.formatRule(item, type, from);
                    if(rule){
                        this.rules.unshift(rule);
                    }
                });
            }
        }

        getRule(callback) {
            if(this.curSiteRule && this.curSiteRule.url){
                return this.curSiteRule;
            }
            var self=this;

            function setRule(r){
                self.curSiteRule=r;
                debug(r);
                callback();
            }

            function ruleMatch(r){
                let pageElement,nextLink,insert;
                if(r.pageElement)pageElement=r.type==0?getElementByXpath(r.pageElement):document.querySelector(r.pageElement);
                if(r.nextLink)nextLink=r.type==0?getElementByXpath(r.nextLink):document.querySelector(r.nextLink);
                if(r.insert)insert=r.type==0?getElementByXpath(r.insert):document.querySelector(r.insert);
                return !((r.pageElement && !pageElement) ||
                        (r.nextLink && !nextLink) ||
                        (r.insert && !insert));
            }

            function checkRule(r){
                let urlReg=new RegExp(r.url, "i");
                if(urlReg.test(location.href)){
                    if(r.wait){
                        let waitTime=500,checkEval;
                        if(isNaN(r.wait)){
                            try{
                                checkEval=Function("doc",'"use strict";' + r.wait);
                            }catch(e){
                                debug(e);
                            }
                        }else{
                            waitTime=r.wait;
                        }
                        let checkReady=()=>{
                            setTimeout(()=>{
                                if(!ruleMatch(r) || (checkEval && !checkEval(document))){
                                    checkReady();
                                }else{
                                    setRule(r);
                                }
                            },parseInt(waitTime));
                        };
                        checkReady();
                        return true;
                    }
                    if(r.pinUrl){
                        setRule(r);
                        return true;
                    }
                    if(!ruleMatch(r)){
                        return false;
                    }
                    setRule(r);
                    return true;
                }
                return false;
            }

            for(let i in this.hpRules){
                let rule=this.hpRules[i];
                if(!rule || !rule.url)continue;
                if(rule.singleUrl){
                    if(location.origin+location.pathname==rule.url){
                        setRule(rule);
                        return;
                    }
                    continue;
                }
                if(checkRule(rule))return;
            }
            for(let i in this.customRules){
                let rule=this.customRules[i];
                if(!rule || !rule.url)continue;
                if(checkRule(rule))return;
            }
            let r=0;
            function searchByTime(){
                setTimeout(()=>{
                    let end=r+80;
                    end=end>self.rules.length?self.rules.length:end;
                    for(;r<end;r++){
                        let rule=self.rules[r];
                        if(checkRule(rule))return;
                    }
                    if(end>=self.rules.length){
                        self.curSiteRule={};
                        self.curSiteRule.url=location.origin+location.pathname;
                        self.curSiteRule.singleUrl=true;
                        callback();
                        return;
                    }else{
                        searchByTime();
                    }
                },20);
            }
            searchByTime();
        }

        geneSelector(ele){
            let selector=ele.tagName;
            //Google id class都是隨機。百度更過分，style script順序都是隨機的
            //if(ele.id) selector += '#' + ele.id;
            //if(ele.classList) selector += [].map.call(ele.classList,d=>'.'+d).join('');
            let parent = ele.parentElement;
            if(parent){
                let i,j=0;
                for(i=0;i<parent.children.length;i++){
                    if(parent.children[i].tagName==selector){
                        j++;
                        if(parent.children[i]==ele){
                            break;
                        }
                    }
                }
                selector = this.geneSelector(parent) + ' > ' + selector + (parent.tagName=="HTML"?"":`:nth-of-type(${j})`);
            }
            return selector;
        }

        getPageElement(doc, curWin, dontFind) {
            let pageElement=null;
            let self=this;
            if(this.curSiteRule.pageElement){
                pageElement=this.curSiteRule.type==0?getAllElementsByXpath(this.curSiteRule.pageElement,doc,doc):doc.querySelectorAll(this.curSiteRule.pageElement);
            }
            if((!pageElement || pageElement.length==0) && curWin && !dontFind){
                let body=doc.body;
                if(!body)return null;
                let bodyHeight=parseInt(body.scrollHeight);
                let curHeight=bodyHeight;
                function checkElement(ele){
                    if(curHeight/bodyHeight<=0.30){
                        self.curSiteRule.pageElement=allOfBody;
                        debug(self.curSiteRule.pageElement);
                        return [body];
                    }
                    if(ele.tagName=="TABLE" || ele.tagName=="UL"){
                        self.curSiteRule.pageElement=self.geneSelector(ele);
                        debug(self.curSiteRule.pageElement);
                        return [ele];
                    }
                    if(ele.children.length==0 && !self.curSiteRule.pageElement){
                        if(ele.parentNode.tagName=="P")ele=ele.parentNode;
                        self.curSiteRule.pageElement=self.geneSelector(ele.parentNode)+">"+ele.tagName;
                        debug(self.curSiteRule.pageElement);
                        return [ele];
                    }
                    let i,maxHeight=curHeight*0.6,curMaxEle=null,curMaxArea=0,maxWidth=0;
                    let isHori=true;
                    let offsetTop=ele.children[0].offsetTop;
                    for(i=0;i<ele.children.length;i++){
                        if(ele.children[i].offsetTop!=offsetTop){
                            isHori=false;
                            break;
                        }
                    }
                    for(i=0;i<ele.children.length;i++){
                        let curNode=ele.children[i];
                        let comStyle=curWin.getComputedStyle(curNode);
                        let h=parseInt(curNode.scrollHeight);
                        let w=parseInt(curNode.scrollWidth);
                        if(isNaN(h) || isNaN(w))continue;
                        if(isHori && h==0)continue;
                        let a=h*w+h,moreChild=curNode.children[0];
                        while(moreChild){
                            comStyle=curWin.getComputedStyle(moreChild);
                            let ch=parseInt(moreChild.scrollHeight);
                            let cw=parseInt(moreChild.scrollWidth);
                            if(h<ch)h=ch;
                            if(moreChild.innerText!="" && !isNaN(ch) && !isNaN(cw)){
                                a+=ch*cw;
                            }
                            moreChild=moreChild.nextElementSibling;
                        }
                        let isMax=false;
                        if(isHori){
                            if(maxWidth<w){
                                isMax=true;
                            }else if(maxWidth==w && curMaxArea<a){
                                isMax=true;
                            }
                        }else{
                            isMax=curMaxArea<a;
                        }
                        if(curMaxEle==null || isMax){
                            if(h>0)curHeight=h;
                            curMaxArea=a;
                            maxWidth=w;
                            curMaxEle=curNode;
                        }
                    }
                    if(curMaxEle && (isHori || curHeight>maxHeight)){
                        return checkElement(curMaxEle);
                    }
                    if(!self.curSiteRule.pageElement){
                        if(ele.tagName=="P" || ele.tagName=="BR")ele=ele.parentNode;
                        self.curSiteRule.pageElement=self.geneSelector(ele);
                        if(ele.children.length>1 && ele.tagName!="UL")self.curSiteRule.pageElement+=">*";
                        debug(self.curSiteRule.pageElement);
                    }
                    return (ele.tagName=="UL"||ele.children.length==1)?[ele]:ele.children;
                }
                pageElement=checkElement(body);
                if(pageElement)this.saveCurSiteRule();
            }
            if(this.insert && pageElement && pageElement[0]){
                let example=this.insertPos==2?this.insert.children[0]:this.insert;
                let inTable=example.parentNode.tagName=="TABLE" ||
                    example.tagName=="TR" ||
                    example.tagName=="TBODY" ||
                    (example.previousElementSibling && example.previousElementSibling.tagName=="TR") ||
                    (example.previousElementSibling && example.previousElementSibling.tagName=="TBODY");
                if(inTable && pageElement[0].tagName!="TR" && pageElement[0].tagName!="TBODY"){
                    pageElement=null;
                }
            }
            return pageElement;
        }

        getPage(doc){
            if(_unsafeWindow.Discourse)return {};
            let canSave=false;//發現頁碼選擇器在其他頁對不上，還是別保存了
            let url=this.curUrl.replace("#!","").replace("index.php?","?");
            let pageNum=1,preStr="",afterStr="";
            let pageMatch1=url.match(/(.*[a-z\/\-_](?:p|page)?\/?)(\d+)(\.s?html?$|\/?$)/i);
            let pageMatch2=url.match(/(.*[\?&]p(?:age)?=)(\d+)($|[#&].*)/i);
            if(pageMatch1){
                preStr=pageMatch1[1];
                pageNum=pageMatch1[2];
                afterStr=pageMatch1[3];
            }else if(pageMatch2){
                preStr=pageMatch2[1];
                pageNum=pageMatch2[2];
                afterStr=pageMatch2[3];
            }
            let curPage=doc,i,cur,jsNext;
            let next=curPage.querySelector(".page-next>a")||
                curPage.querySelector("a.next_page")||
                curPage.querySelector("#next_page")||
                curPage.querySelector(".nextPage")||
                curPage.querySelector("a[data-pagination=next]")||
                curPage.querySelector(".pagination a[rel=next]")||
                curPage.querySelector("a.pageright")||
                curPage.querySelector("a#rightFix")||
                curPage.querySelector("a.next")||
                curPage.querySelector("a#next")||
                curPage.querySelector(".next>a")||
                curPage.querySelector(".next>button")||
                curPage.querySelector("a[alt=next]")||
                curPage.querySelector("[title=next]");
            if(next && (!next.href || /^javascript:/.test(next.href))){
                jsNext=next;
                next=null;
            }
            if(!next){
                next=curPage.querySelectorAll("[aria-label='Next']");
                if(next && next.length==1){
                    next=next[0];
                    if(!next.href || /^javascript:/.test(next.href)){
                        jsNext=next;
                        next=null;
                    }
                }else{
                    next=null;
                }
            }
            if(!next){
                next=curPage.querySelectorAll("[aria-label='Next page']");
                if(next && next.length==1){
                    next=next[0];
                    if(!next.href || /^javascript:/.test(next.href)){
                        jsNext=next;
                        next=null;
                    }
                }else{
                    next=null;
                }
            }
            if(!next){
                let pageDiv=curPage.querySelector("div.wp-pagenavi");
                if(pageDiv){
                    cur=pageDiv.querySelector("span.current");
                    if(cur){
                        next=cur.nextSibling;
                    }
                }else{
                    cur=curPage.querySelector("div.article-paging>span");
                    if(cur){
                        next=cur.nextElementSibling;
                    }
                }
            }
            if(!next){
                let pageDiv=curPage.querySelector("div.pages>ul");
                if(pageDiv){
                    cur=pageDiv.querySelector("li>b");
                    if(cur)next=cur.parentNode.nextElementSibling.querySelector("a");
                }
            }
            if(!next){
                let aTags=curPage.querySelectorAll("a");
                let next1,next2,next3,next4,nextJs1,nextJs2,nextJs3;
                for(i=aTags.length-1;i>=0;i--){
                    let aTag=aTags[i];
                    if(aTag.innerText=="§")continue;
                    if(aTag.style.display=="none")continue;
                    if(next1 && next2 && next3 && next4)break;
                    if(!next1){
                        if(/^\s*[下后後][一1]?[页頁张張]|^next( page)?\s*›?$|次のページ/i.test(aTag.innerText)){
                            if(!aTag.href || /^javascript:/.test(aTag.href)){
                                if(!nextJs1)nextJs1=aTag;
                            }else{
                                next1=aTag;
                            }
                        }
                    }
                    if(!next2){
                        if(/^\s*[下后後][一1]?[章话話]/i.test(aTag.innerText)){
                            if(!aTag.href || /^javascript:/.test(aTag.href)){
                                if(!nextJs2)nextJs2=aTag;
                            }else{
                                next2=aTag;
                            }
                        }
                    }
                    if(!next3){
                        if(aTag.innerText=="&gt;" || aTag.innerText=="▶" || aTag.innerText==">" || aTag.innerText=="›" || /nextpage/i.test(aTag.className)){
                            if(!aTag.href || /^javascript:/.test(aTag.href)){
                                if(!nextJs3)nextJs3=aTag;
                            }else{
                                next3=aTag;
                            }
                        }
                    }
                    if(!aTag.href || /^javascript:/.test(aTag.href))continue;
                    if(!next4){
                        if(aTag.href.replace("?&","?").replace("#!","").replace("index.php?","?").replace(preStr,"").replace(afterStr,"")==parseInt(pageNum)+1){
                            next4=aTag;
                        }else if(this.curUrl!=aTag.href && aTag.href.replace("?&","?").replace("index.php?","?").indexOf(url)!=-1 && /^[\/\?&]?[_-]?(p|page)?=?\/?2(\/|\?|&|$)/i.test(aTag.href.replace(url,"").replace(/\.s?html?$/i,""))){
                            let curHref=aTag.getAttribute("href");
                            let pageOne=curHref.replace(/\/2(\/|\?|&|$)/,"/1$1");
                            if(pageOne==curHref)pageOne=null;
                            else pageOne=curPage.querySelector(`a[href='${pageOne}']`);
                            if(!pageOne)next4=aTag;
                        }
                    }
                }
                next=next1||next3||next4||next2||nextJs1||nextJs3||nextJs2;
            }
            if(!next)next=jsNext;
            if(next && next.classList.contains("results-more"))next=null;
            return {next:next,canSave:canSave};
        }

        canonicalUri(src, base_path) {
            if(src.charAt(0)=="#")return location.href+src;
            var root_page = /^[^?#]*\//.exec(location.href)[0],
                root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
                absolute_regex = /^\w+\:\/\//;
            src=src.replace(/\.\//,"");
            if (/^\/\/\/?/.test(src)){
                src = location.protocol + src;
            }
            else if (!absolute_regex.test(src) && src.charAt(0) != "/"){
                src = (base_path || "") + src;
            }
            return (absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src));
        }

        getLinkByPage(url, pageNum) {
            if(!url)return;
            if(this.curSiteRule.pageNum){
                let result=this.curSiteRule.pageNum;
                let strMatch=result.match(/\{.*?}/);
                if(!strMatch)return null;
                let urlReg=new RegExp("("+result.replace(strMatch[0], ")\\d+(")+")");
                let code=strMatch[0].replace(/^{/,"").replace(/}$/,"").replace(/\$p/g,pageNum);
                if(code==pageNum){
                    result=url.replace(urlReg,"$1"+code+"$2");
                }else{
                    try{
                        code=Function('"use strict";return ' + code)();
                        result=url.replace(urlReg,"$1"+code+"$2");
                    }catch(e){
                        debug(e);
                    }
                }
                return result==url?url.replace(/([&\/\?](p=|page[=\/]))\d+/i, "$1"+pageNum):result;
            }else{
                return url.replace(/([&\/\?](p=|page[=\/]))\d+/i, "$1"+pageNum);
            }
        }

        getNextLink(doc) {
            let nextLink=null,page;
            if(this.curSiteRule.pageElementByJs){
                this.nextLinkHref="#";
                return true;
            }else if(this.curSiteRule.nextLinkByJs){
                try{
                    let targetUrl=Function("doc",'"use strict";' + this.curSiteRule.nextLinkByJs)(doc);
                    if(targetUrl)nextLink={href:targetUrl};
                }catch(e){
                    debug(e);
                }
            }else if(this.curSiteRule.nextLinkByUrl){
                let targetUrl=this.curUrl.replace(new RegExp(this.curSiteRule.nextLinkByUrl[0]), this.curSiteRule.nextLinkByUrl[1]);
                if(targetUrl != this.curUrl){
                    let reps=targetUrl.match(/{.*?}/g);
                    if(reps){
                        reps.forEach(rep=>{
                            let code=rep.replace("{","").replace("}","");
                            let result=code.match(/^(\d+)\+1$/);
                            if(result){
                                result=parseInt(result[1])+1;
                            }else{
                                try{
                                    result=Function('"use strict";return ' + code)();
                                }catch(e){
                                    debug(e);
                                }
                            }
                            targetUrl=targetUrl.replace(rep, result);
                        });
                    }
                }
                nextLink={href:targetUrl};
            }else if(this.curSiteRule.nextLink){
                if(this.curSiteRule.nextLink!="0"){
                    nextLink=this.curSiteRule.type==0?getElementByXpath(this.curSiteRule.nextLink,doc,doc):doc.querySelector(this.curSiteRule.nextLink);
                }
            }else{
                page=this.getPage(doc);
                nextLink=page.next;
                if(nextLink){
                    if(nextLink.tagName=="INPUT" && nextLink.parentNode.tagName=="FORM"){
                        let params=[];
                        let form=nextLink.parentNode;
                        [].forEach.call(form.querySelectorAll("input"), input=>{
                            params.push(input.name+'='+input.value);
                        });
                        nextLink.href=form.action+'?'+params.join('&');
                    }
                    if(nextLink.classList.contains("noClick")){
                        this.nextLinkHref=false;
                        return null;
                    }else if(doc==document){
                        if((!nextLink.href || /^javascript:/.test(nextLink.href)) && !isVisible(nextLink, _unsafeWindow)){
                            this.nextLinkHref=false;
                            return null;
                        }else{
                            let nextLinkCs=_unsafeWindow.getComputedStyle(nextLink);
                            if(nextLinkCs.cursor=="not-allowed"){
                                this.nextLinkHref=false;
                                return null;
                            }
                        }
                    }
                }
            }
            if(nextLink){
                if(nextLink.href && nextLink.href==this.curUrl){
                    nextLink=null;
                }else if(/^javascript:/.test(nextLink.href) && (this.curSiteRule.action==0 || this.curSiteRule.action==1)){
                    nextLink=null;
                }
                /*if(!this.curSiteRule.nextLink && page && page.canSave){
                    this.curSiteRule.nextLink=this.geneSelector(nextLink);
                    this.curSiteRule.type=1;
                    this.saveCurSiteRule();
                }*/
            }
            if(nextLink){
                this.nextLinkHref=nextLink.href?this.canonicalUri(nextLink.href):"#";
                debug(nextLink);
            }else{
                this.nextLinkHref=false;
            }
            return nextLink;
        }

        getInsert(refresh) {
            if(refresh){
                this.insert=null;
            }
            if(this.insert && !refresh){
                let parent=this.insert;
                while(parent && parent.nodeName!="BODY"){
                    parent=parent.parentNode;
                }
                if(parent && parent.nodeName=="BODY"){
                    return this.insert;
                }
            }
            if(this.curSiteRule.insert){
                this.insert=this.curSiteRule.type==0?getElementByXpath(this.curSiteRule.insert,document):document.querySelector(this.curSiteRule.insert);
            }else{
                let pageElement=this.getPageElement(document, _unsafeWindow);
                if(pageElement && pageElement.length>0){
                    var pELast = pageElement[pageElement.length - 1];
                    this.insert = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
                }
            }
            return this.insert;
        }

        pageAction(doc,eles){
            let code=this.curSiteRule.pageAction;
            if(code){
                try{
                    Function("doc","eles",'"use strict";' + code)(doc,eles);
                }catch(e){
                    debug(e);
                }
            }
            let setLazyImg=img=>{
                let realSrc;
                if(img.getAttribute("_src") && !img.src){
                    realSrc=img.getAttribute("_src");
                }else if(img.dataset && img.dataset.original){
                    realSrc=img.dataset.original;
                }else if(img.dataset && img.dataset.src){
                    realSrc=img.dataset.src;
                }else if(img._lazyrias && img._lazyrias.srcset){
                    realSrc=img._lazyrias.srcset[img._lazyrias.srcset.length-1];
                }else if(img.dataset && img.dataset.origFile){
                    realSrc=img.dataset.origFile;
                }else if(img.srcset){
                    var srcs=img.srcset.split(","),largeSize=0;
                    srcs.forEach(srci=>{
                        let srcInfo=srci.trim().split(" "),curSize=parseInt(srcInfo[1]);
                        if(srcInfo[1] && curSize>largeSize){
                            largeSize=curSize;
                            realSrc=srcInfo[0];
                        }
                    });
                }
                if(realSrc){
                    img.src=realSrc;
                    img.style.display="block";
                }
            };
            [].forEach.call(eles, ele=>{
                if(ele.tagName=="IMG"){
                    setLazyImg(ele);
                }else{
                    [].forEach.call(ele.querySelectorAll("img"), img=>{
                        setLazyImg(img);
                    });
                }
                if(ele.tagName=="A" && ele.classList.contains("lazyload")){
                    if(ele.dataset.original){
                        ele.style.backgroundImage='url("'+ele.dataset.original+'")';
                    }
                }else{
                    [].forEach.call(ele.querySelectorAll("a.lazyload"), a=>{
                        if(a.dataset.original){
                            a.style.backgroundImage='url("'+a.dataset.original+'")';
                        }
                    });
                }
            });
            let lazyImgSrc=this.curSiteRule.lazyImgSrc;
            if(lazyImgSrc){
                [].forEach.call(eles, ele=>{
                    [].forEach.call(ele.querySelectorAll("img"), img=>{
                        if(img.getAttribute(lazyImgSrc)){
                            img.src=img.getAttribute(lazyImgSrc);
                        }
                    });
                });
            }
        }

        initPage(callback){
            let self=this;
            curPage=1;
            //if(this.curSiteRule.url && !this.curSiteRule.singleUrl)return;
            this.curSiteRule={};
            this.pageDoc=document;
            this.nextLinkHref=null;
            this.curUrl=location.href;
            this.getRule(()=>{
                if(self.curSiteRule.enable==0){
                    debug("Stop as rule disable");
                    isPause=true;
                    return;
                }
                if(self.curSiteRule && !self.curSiteRule.singleUrl){
                    self.hpRules=self.hpRules.filter(item=>{return item&&item.url!=self.curSiteRule.url});
                    self.hpRules.unshift(self.curSiteRule);
                    if(self.hpRules.length>30){
                        self.hpRules.pop();
                    }
                    storage.setItem("hpRules", self.hpRules);
                }
                let css=self.curSiteRule.css;
                if(css){
                    _GM_addStyle(css);
                }
                let code=self.curSiteRule.init;
                if(code){
                    try{
                        Function('doc','"use strict";' + code)(null);
                    }catch(e){
                        debug(e);
                    }
                }
                self.getNextLink(document);
                callback();
            });
        }

        insertPage(doc, eles, url, callback, tried){
            this.pageDoc=doc;
            this.curUrl=url;
            let nextLink=this.getNextLink(doc);
            if(curPage==1 && !tried && !this.nextLinkHref && this.curSiteRule.singleUrl && this.curSiteRule.pageElement && this.curSiteRule.pageElement!=allOfBody){
                this.curSiteRule.action=1;
                return false;
            }
            if(callback)callback(eles);
            this.getInsert();
            var self=this,newEles=[];
            if(!eles || eles.length==0 || !self.insert || !self.insert.parentNode){
            }else{
                [].forEach.call(eles, ele=>{
                    let newEle=ele.cloneNode(true);
                    let oldCanvass=ele.querySelectorAll("canvas");
                    let newCanvass=newEle.querySelectorAll("canvas");
                    for(let i=0;i<oldCanvass.length;i++){
                        let oldCanvas=oldCanvass[i];
                        let newCanvas=newCanvass[i];
                        newCanvas.getContext('2d').drawImage(oldCanvas, 0, 0);
                    }
                    if(self.curSiteRule.insertPos==2){
                        self.insert.appendChild(newEle);
                    }else{
                        self.insert.parentNode.insertBefore(newEle, self.insert);
                    }
                    newEles.push(newEle);
                });
            }
            this.pageAction(doc, newEles);
            return true;
        }
    }
    var ruleParser = new RuleParser();

    function initConfig(){
        _GM_registerMenuCommand(i18n(forceState==1?"enable":"disableSite"), ()=>{
            storage.setItem("forceState_"+location.host, (forceState==1?0:1));
            location.reload();
        });
        _GM_registerMenuCommand(i18n("update"), ()=>{
            updateRules(()=>{
                alert(i18n("updateSucc"));
                location.reload();
            },(rule,err)=>{
                alert("Update "+rule.url+" rules fail!");
            });
            alert(i18n("beginUpdate"));
        });

        var configCon,insertPos;
        if(location.href==configPage){
            _GM_addStyle(`
             p>span:nth-child(1),p>span:nth-child(2),p>span:nth-child(3){
              cursor: pointer;
              user-select: none;
             }
             p>span:nth-child(1):hover,p>span:nth-child(2):hover,p>span:nth-child(3):hover{
              color:red;
             }
             .updateDate{
              cursor: pointer;
              user-select: none;
             }
             .updateDate:hover{
              color:red;
             }
            `);
            configCon=document.querySelector(".markdown-body");
            insertPos=configCon.querySelector("hr");
        }else if(location.href==configPage){
        }else return false;
        class Rulebar {
            init(ruleUrl){
                this.ruleUrl=ruleUrl;
                this.item=document.createElement("p");
                this.item.title=ruleUrl.type==0?"AutoPagerize Rules":"Pagetual Rules";
                this.item.dataset.id=this.ruleUrl.id;
                let url=document.createElement("span");
                url.innerHTML=ruleUrl.url;
                let up=document.createElement("span");
                up.innerHTML="↑ ";
                up.title=i18n("sortTitle");
                let down=document.createElement("span");
                down.innerHTML="↓ ";
                down.title=i18n("sortTitle");
                let del=document.createElement("span");
                del.innerHTML="× ";
                up.onclick=e=>{
                    this.moveUp();
                };
                down.onclick=e=>{
                    this.moveDown();
                };
                del.onclick=e=>{
                    this.del();
                };
                this.item.appendChild(up);
                this.item.appendChild(down);
                this.item.appendChild(del);
                this.item.appendChild(url);
                configCon.insertBefore(this.item, insertPos);
            }
            saveSort(){
                let sort=[];
                [].forEach.call(this.item.parentNode.querySelectorAll("p[data-id]"), i=>{
                    sort.push(i.dataset.id);
                });
                rulesData.sort=sort;
                storage.setItem("rulesData", rulesData);
            }
            moveUp(){
                let preE=this.item.previousElementSibling;
                if(preE.tagName=="P" && preE.children.length>1){
                    this.item.parentNode.insertBefore(this.item,preE);
                    this.saveSort();
                }
            }
            moveDown(){
                let nextE=this.item.nextElementSibling;
                if(nextE.tagName=="P" && nextE.children.length>1){
                    this.item.parentNode.insertBefore(nextE,this.item);
                    this.saveSort();
                }
            }
            del(){
                if(this.ruleUrl.id<2){
                    alert(i18n("cantDel"));
                }else if(window.confirm(i18n("confirmDel"))){
                    for(let u=0;u<rulesData.urls.length;u++){
                        if(this.ruleUrl.id==rulesData.urls[u].id){
                            rulesData.urls.splice(u,1);
                            break;
                        }
                    }
                    for(let u=0;u<rulesData.sort.length;u++){
                        if(this.ruleUrl.id==rulesData.sort[u]){
                            rulesData.sort.splice(u,1);
                            break;
                        }
                    }
                    storage.setItem("rulesData", rulesData);
                    ruleParser.rules=ruleParser.rules.filter(item=>{return item.from!=this.ruleUrl.id});
                    storage.setItem("rules", ruleParser.rules);
                    this.item.parentNode.removeChild(this.item);
                    //location.reload();
                }
            }
        }
        let updateP=document.createElement("p"),i=0;
        let now=new Date().getTime(),inUpdate=false;


        let pastDate=(new Date(updateDate)).toString(),passStr;
        let passTime=(now-updateDate)/1000;
        if(isNaN(passTime)){
            passStr=i18n("firstUpdate");
        }else if(passTime<60){
            passStr=i18n("passSec", parseInt(passTime))+" ← "+i18n("click2update");
        }else if(passTime<60*60){
            passStr=i18n("passMin", parseInt(passTime/60))+" ← "+i18n("click2update");
        }else if(passTime<60*60*24){
            passStr=i18n("passHour", parseInt(passTime/3600))+" ← "+i18n("click2update");
        }else{
            passStr=i18n("passDay", parseInt(passTime/86400))+" ← "+i18n("click2update");
        }


        updateP.className="updateDate";
        updateP.innerHTML=passStr;
        updateP.title=i18n("update")+" - "+pastDate;
        updateP.onclick=e=>{
            updateRules(()=>{
                alert(i18n("updateSucc"));
                updateP.innerHTML=i18n("passSec", 0);
                updateP.title=i18n("update");
            },(rule,err)=>{
                alert("Update "+rule.url+" rules fail!");
            });
            alert(i18n("beginUpdate"));
        };
        configCon.insertBefore(updateP, insertPos);
        if(ruleUrls){
            ruleUrls.forEach(ruleUrl=>{
                var rulebar=new Rulebar();
                rulebar.init(ruleUrl);
            });
        }
        let customUrlsTitle=document.createElement("h2");
        customUrlsTitle.innerHTML=i18n("customUrls");
        configCon.insertBefore(customUrlsTitle, insertPos);
        let customUrlsInput=document.createElement("textarea");
        customUrlsInput.style.width="100%";
        customUrlsInput.placeholder="0|http://wedata.net/databases/AutoPagerize/items_all.json";
        configCon.insertBefore(customUrlsInput, insertPos);

        let opacityTitle=document.createElement("h2");
        opacityTitle.innerHTML=i18n("opacity");
        let opacityInput=document.createElement("input");
        opacityInput.value=rulesData.opacity*100;
        opacityInput.type="number";
        opacityInput.style.width="50px";
        opacityInput.style.margin="0 0 0 10px";
        opacityTitle.appendChild(opacityInput);
        configCon.insertBefore(opacityTitle, insertPos);


        let hideBarTitle=document.createElement("h2");
        hideBarTitle.innerHTML=i18n("hideBar");
        let hideBarInput=document.createElement("input");
        hideBarInput.type="checkbox";
        hideBarInput.style.width="50px";
        hideBarInput.style.height="20px";
        hideBarInput.checked=rulesData.hideBar;
        hideBarTitle.appendChild(hideBarInput);
        configCon.insertBefore(hideBarTitle, insertPos);

        let dbClick2StopTitle=document.createElement("h2");
        dbClick2StopTitle.innerHTML=i18n("dbClick2Stop");
        let dbClick2StopInput=document.createElement("input");
        dbClick2StopInput.type="checkbox";
        dbClick2StopInput.style.width="50px";
        dbClick2StopInput.style.height="20px";
        dbClick2StopInput.checked=rulesData.dbClick2Stop;
        dbClick2StopTitle.appendChild(dbClick2StopInput);
        configCon.insertBefore(dbClick2StopTitle, insertPos);

        let enableWhiteListTitle=document.createElement("h2");
        enableWhiteListTitle.innerHTML=i18n("autoRun");
        let enableWhiteListInput=document.createElement("input");
        enableWhiteListInput.type="checkbox";
        enableWhiteListInput.style.width="50px";
        enableWhiteListInput.style.height="20px";
        enableWhiteListInput.checked=rulesData.enableWhiteList!=true;
        enableWhiteListTitle.appendChild(enableWhiteListInput);
        configCon.insertBefore(enableWhiteListTitle, insertPos);

        let customRulesTitle=document.createElement("h2");
        customRulesTitle.innerHTML=i18n("customRules")
        configCon.insertBefore(customRulesTitle, insertPos);
        let customRulesInput=document.createElement("textarea");
        customRulesInput.style.width="100%";
        customRulesInput.style.height="500px";
        customRulesInput.placeholder=`[\n  {\n    "name":"yande",\n    "action":"0",\n    "url":"^https:\/\/yande\\.re\/",\n    "pageElement":"ul#post-list-posts>li",\n    "nextLink":"a.next_page",\n    "css":".javascript-hide {display: inline-block !important;}"\n  },\n  {\n    "name":"tieba",\n    "action":"1",\n    "url":"^https:\/\/tieba\\.baidu.com\/f\\?kw=",\n    "pageElement":"ul#thread_list>li",\n    "nextLink":".next.pagination-item "\n  }\n]`;
        customRulesInput.value=getFormatJSON(ruleParser.customRules);
        configCon.insertBefore(customRulesInput, insertPos);
        let saveBtn=document.createElement("button");
        saveBtn.innerHTML=i18n("save");
        saveBtn.style.width="100%";
        configCon.insertBefore(saveBtn, insertPos);
        saveBtn.onclick=e=>{
            try{
                storage.setItem("hpRules", []);
                if(customRulesInput.value==""){
                    storage.setItem("customRules", "");
                }else{
                    let customRules=JSON.parse(customRulesInput.value);
                    if(Array && Array.isArray && !Array.isArray(customRules)){
                        alert("Rules must be a Array!");
                        return;
                    }
                    debug(customRules);
                    storage.setItem("customRules", customRules);
                }
            }catch(e){
                debug(e);
                alert("JSON error, check again!");
                return;
            }
            rulesData.opacity=opacityInput.value/100;
            rulesData.hideBar=hideBarInput.checked;
            rulesData.dbClick2Stop=dbClick2StopInput.checked;
            rulesData.enableWhiteList=!enableWhiteListInput.checked;
            storage.setItem("rulesData", rulesData);
            let customUrls=customUrlsInput.value.trim();
            if(customUrls){
                customUrls=customUrls.split(/\n/);
                for(let c=0;c<customUrls.length;c++){
                    let urlArr=customUrls[c].split("|"),url,type=1;
                    if(urlArr.length==1){
                        url=urlArr[0].trim();
                        if(!/^http/.test(url)){
                            alert("Wrong url, check again!");
                            return;
                        }
                    }else if(urlArr.length==2){
                        type=urlArr[0].trim();
                        url=urlArr[1].trim();
                        if(!/^http/.test(url)){
                            alert("Wrong url, check again!");
                            return;
                        }
                    }else{
                        break;
                    }
                    let maxId=0,hasUrl=false;
                    if(!rulesData.urls){
                        rulesData.urls=[];
                        maxId=1;
                    }else{
                        rulesData.urls.forEach(u=>{
                            if(maxId<u.id){
                                maxId=u.id;
                            }
                            if(u.url==url){
                                hasUrl=true;
                            }
                        });
                        if(hasUrl)break;
                    }
                    rulesData.urls.push({id:maxId+1,url:url,type:type});
                    rulesData.sort.push(maxId+1);
                    storage.setItem("rulesData", rulesData);
                }
            }
            alert("Modified successfully");
            location.reload();
        };
        return true;
    }

    var inUpdate=false;
    function updateRules(success,fail){
        if(inUpdate)return;
        inUpdate=true;
        let ruleIndex=ruleUrls.length-1;
        storage.setItem("hpRules", []);
        function addNextRule(){
            if(ruleIndex<0){
                let now=new Date().getTime();
                storage.setItem("ruleLastUpdate", now);
                storage.setItem("rules", ruleParser.rules);
                inUpdate=false;
                success();
            }else{
                let rule=ruleUrls[ruleIndex--];
                ruleParser.addRuleByUrl(rule.url, rule.type, rule.id, (json,err)=>{
                    if(!json){
                        fail(rule,err);
                    }
                    storage.setItem("rules", ruleParser.rules);
                    addNextRule();
                })
            }
        }
        addNextRule();
    }

    function objIsArr(obj) {
        return obj &&
            typeof obj === 'object' &&
            typeof obj.length === 'number' &&
            !(obj.propertyIsEnumerable('length'));
    }

    function isVisible(el, win) {
        if(!el.offsetParent)return false;
        var loopable = true,
            visible = el.tagName && win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
        while(loopable && visible) {
            el = el.parentNode;

            if(el && el.tagName && el.tagName!="BODY") {
                visible = win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
            }else {
                loopable = false;
            }
        }
        return visible;
    }

    function getFormatJSON(obj){
        if(!objIsArr(obj))return "";
        let ret="[\n";
        let len=obj.length,i=0,isLast;
        obj.forEach(item=>{
            ret+="  {\n";
            let iLen=Object.keys(item).length,j=0;
            for(let key in item){
                isLast=(++j)==iLen;
                let value=item[key];
                if(objIsArr(value)){
                    let vstr="[",v=0,vIsLast=false;
                    value.forEach(vi=>{
                        vIsLast=(++v)==value.length;
                        vstr+="\""+vi.replace(/\\/g,"\\\\")+"\""+(vIsLast?"":",");
                    });
                    vstr+="]";
                    ret+="    \""+key+"\":"+vstr+""+(isLast?"":",")+"\n";
                }else{
                    if(typeof value=="string"){
                        value=value.replace(/\\/g,"\\\\").replace(/"/g,"\\\"");
                        value="\""+value+"\"";
                    }
                    ret+="    \""+key+"\":"+value+""+(isLast?"":",")+"\n";
                }
            }
            isLast=(++i)==len;
            ret+="  }"+(isLast?"":",")+"\n";
        });
        ret+="]";
        return ret;
    }

    function initRules(callback) {
        /*0 wedata格式，1 pagetual格式*/
        ruleUrls=[
            {
                id:0,
                url:'https://raw.githubusercontent.com/hoothin/UserScripts/master/Pagetual/pagetualRules.json',
                type:1
            },
            {
                id:1,
                url:'http://wedata.net/databases/AutoPagerize/items_all.json',
                type:0,
            }
        ];var i=0,j=0;

        ruleParser.initSavedRules(()=>{
            storage.getItem("rulesData", data=>{
                if(data){
                    rulesData=data;
                    if(data.urls)ruleUrls=ruleUrls.concat(data.urls);
                    if(data.sort){
                        let urls=[];
                        data.sort.forEach(id=>{
                            for(let s=0;s<ruleUrls.length;s++){
                                if(id==ruleUrls[s].id){
                                    urls.push(ruleUrls[s]);
                                    break;
                                }
                            }
                        });
                        ruleUrls=urls;
                    }
                }
                if(typeof(rulesData.opacity)=="undefined"){
                    rulesData.opacity=0.3;
                }
                if(typeof(rulesData.hideBar)=="undefined"){
                    rulesData.hideBar=true;
                }
                if(typeof(rulesData.dbClick2Stop)=="undefined"){
                    rulesData.dbClick2Stop=true;
                }
                if(typeof(rulesData.enableWhiteList)=="undefined"){
                    rulesData.enableWhiteList=false;
                }
                storage.getItem("forceState_"+location.host, v=>{
                    storage.getItem("ruleLastUpdate", date=>{
                        if(typeof(v)=="undefined"){
                            v=(rulesData.enableWhiteList?1:0);
                        }
                        forceState=v;
                        updateDate=date;
                        if(initConfig())return;
                        if(forceState==1)return;
                        let now=new Date().getTime();
                        if(!date || now-date>2*24*60*60*1000){
                            storage.setItem("ruleLastUpdate", now);
                            updateRules(()=>{
                                callback();
                            },(rule,err)=>{});
                        }else{
                            callback();
                        }
                    });
                });
            });
        });
    }

    function requestDoc(url, callback){
        _GM_xmlhttpRequest({
            url: url,
            method: 'GET',
            overrideMimeType: 'text/html;charset='+document.charset,
            headers: {
                'Referer': location.href
            },
            timeout: 5000,
            onload: function(res) {
                var doc=null;
                try {
                    doc=document.implementation.createHTMLDocument('');
                    doc.documentElement.innerHTML=res.response;
                }
                catch (e) {
                    debug('parse error'+e.toString());
                }
                let pageElement=ruleParser.getPageElement(doc);
                //只有1的話怕不是圖片哦
                if(pageElement && (pageElement.length>1 || (pageElement.length==1 && pageElement[0].tagName!="IMG") )){
                    let result=ruleParser.insertPage(doc, pageElement, url, callback, false);
                    if(!result){
                        requestFromIframe(url, (doc, eles)=>{
                            loadPageOver();
                            if(eles){
                                ruleParser.insertPage(doc, eles, url, callback, true);
                            }
                        });
                    }
                }else if(ruleParser.curSiteRule.singleUrl){
                    requestFromIframe(url, (doc, eles)=>{
                        loadPageOver();
                        if(eles){
                            ruleParser.insertPage(doc, eles, url, callback, true);
                        }
                    });
                }
            },
            onerror: function(e){
                debug(e);
                callback(false);
            },
            ontimeout: function(e){
                debug(e);
                callback(false);
            }
        });
    }

    var failFromIframe=0;
    function requestFromIframe(url, callback){
        let orgPage,curPage;
        let iframe = document.createElement('iframe');
        iframe.name = 'pagetual-iframe';
        iframe.width = '100%';
        iframe.height = '0';
        iframe.frameBorder = '0';
        if(ruleParser.curSiteRule.sandbox!=false){
            iframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
        }
        iframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;';
        iframe.addEventListener("load", e=>{
            let waitTime=500,checkEval;
            if(ruleParser.curSiteRule.wait){
                if(isNaN(ruleParser.curSiteRule.wait)){
                    try{
                        checkEval=Function("doc",'"use strict";' + ruleParser.curSiteRule.wait);
                    }catch(e){
                        debug(e);
                    }
                }else{
                    waitTime=ruleParser.curSiteRule.wait;
                }
            }
            setTimeout(()=>{
                let tryTimes=0;
                function checkIframe(){
                    try{
                        let doc=iframe.contentDocument || iframe.contentWindow.document;
                        let eles=ruleParser.getPageElement(doc, iframe.contentWindow);
                        if(eles && eles.length>0 && (!checkEval || checkEval(doc))){
                            callback(doc, eles);
                        }else if(tryTimes++ < 10){
                            setTimeout(()=>{
                                checkIframe();
                            },waitTime);
                            return;
                        }else{
                            if(failFromIframe++ > 2){
                                failFromIframe=0;
                                debug("Stop as failFromIframe");
                                isPause=true;
                                callback(false, false);
                            }else{
                                callback(false, false);
                            }
                        }
                    }catch(e){
                        debug("Stop as cors");
                        //isPause=true;
                        ruleParser.curSiteRule.pageElement=allOfBody;
                        ruleParser.getInsert(true);
                        callback(false, false);
                    }
                    document.body.removeChild(iframe);
                }
                checkIframe();
            },waitTime);
        });
        iframe.src=url;
        document.body.appendChild(iframe);
    }

    function initPage(){
        ruleParser.initPage(()=>{
            if(ruleParser.nextLinkHref){
                initView();
                let isJs=/^(javascript|#)/.test(ruleParser.nextLinkHref.replace(location.href,""));
                if(!isJs){
                    _GM_registerMenuCommand(i18n(forceState==2?"cancelForceIframe":"forceIframe"), ()=>{
                        storage.setItem("forceState_"+location.host, (forceState==2?"":2));
                        location.reload();
                    });
                }
                _GM_registerMenuCommand(i18n("loadNow"), ()=>{
                    let loadNum=window.prompt(i18n("loadConfirm"), "1");
                    if(loadNum==="" || loadNum===null)return;
                    autoLoadNum=Math.abs(parseInt(loadNum));
                    nextPage();
                });
            }
            initListener();
            nextPage();
        });
    }

    function initView(){
        _GM_addStyle(`
         .pagetual_pageBar.stop {
           -webkit-filter: invert(100%);
           filter: invert(100%);
           opacity: 1!important;
         }
         .pagetual_pageBar.hide {
           display: none!important;
         }
         .pagetual_pageBar:hover {
           opacity: 1!important;
         }
         .pagetual_pageBar span {
           vertical-align: super;
         }

         .pagetual_pageBar span>svg:hover {
           animation: touhouAni 1s infinite;
         }
         .pagetual_pageBar .pagetual_pageNum{
           color: #55555f;
         }
         .pagetual_pageBar .pagetual_pageNum:hover{
           color: #ff6464;
         }

         @keyframes touhouAni{
           from {transform: rotate(0deg) scale3d(1.2, 1.2, 1.2);}
                to {transform: rotate(360deg);}
         }
         @-webkit-keyframes touhouAni{
           from {transform: rotate(0deg) scale3d(1.2, 1.2, 1.2);}
                to {transform: rotate(360deg);}
         }
        `);
        pageBarStyle=`opacity:${rulesData.opacity};display:${rulesData.opacity==0?"none":"block"};padding:0;box-shadow: 0px 0px 10px 0px #000000aa;border-radius: 20px;background-color: rgb(240 240 240 / 80%);visibility: visible; position: initial; width: auto; height: 30px; float: none; clear: both; margin: 5px auto; text-align: center;`;
    }
    var loadingDiv=document.createElement("div");
    loadingDiv.className="pagetual_loading";
    loadingDiv.style.cssText="cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px auto;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;origin-trial-test-property: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: initial;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;z-index: 2147483647;";
    loadingDiv.innerHTML=`<p style=" display: block; position: initial; margin: auto auto 5px auto; shape-rendering: auto; vertical-align: middle; visibility: visible; width: initial; height: initial; text-align: center; color: #6e6e6e; ">${i18n("loadingText")}</p><svg width="120" height="30" viewBox="0 0 120 30" fill="#000000A0" style="display: block;position: initial;margin: auto;shape-rendering: auto;vertical-align: middle;visibility: visible;width: initial;height: initial;"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>`;

    var upSvg=`<svg width="30" height="30" style="position:absolute;cursor: pointer;margin: 0 -45px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6364"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a" p-id="6365"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a" p-id="6366"></path></svg>`;
    var downSvg=`<svg width="30" height="30" style="position:absolute;cursor: pointer;margin: 0 15px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;transform: rotate(180deg);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6364"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a" p-id="6365"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a" p-id="6366"></path></svg>`;
    var pageBarStyle;
    var initStyle=`display: initial;right: unset;left: unset;top: unset;bottom: unset;inset: unset;clear: both;cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px auto;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: initial;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;`;
    var pageTextStyle=`line-height: 30px;text-decoration: none;user-select: none;visibility: visible;position: initial;width: auto;height: auto;float: none;clear: both;margin: 0px auto;text-align: center;display: inline;font-weight: bold;font-style: normal;font-size: 16px;letter-spacing: initial;vertical-align: super;color: rgb(85, 85, 95);`;

    var isPause=false,isLoading=false,curPage=1,forceState=0,bottomGap=1000,autoLoadNum=-1;

    function changeStop(stop, hide){
        isPause=stop;
        [].forEach.call(document.querySelectorAll(".pagetual_pageBar"), bar=>{
            if(isPause){
                bar.classList.add("stop");
                if(hide)bar.classList.add("hide");
            }else{
                bar.classList.remove("stop");
                if(hide)bar.classList.remove("hide");
            }
        });
    }

    function isInViewPort(element) {
        if(!element.parentNode)return false;
        if(_unsafeWindow.getComputedStyle(element).display=="none")return false;
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {
            top,
            right,
            bottom,
            left,
        } = element.getBoundingClientRect();

        return (
            top >= 0 &&
            left >= 0 &&
            right <= viewWidth &&
            bottom <= viewHeight
        );
    }

    var urlChanged=false;
    var _wr = function(type) {
        var orig = history[type];
        return function() {
            var rv = orig.apply(this, arguments);
            var e = new Event(type);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _wr('pushState');
    window.addEventListener('pushState', function(e) {
        urlChanged=true;
        isPause=true;
        setTimeout(()=>{
            if(location.href==configPage){
                location.reload();
            }
        },1);
    });

    function initListener(){
        let loadmoreBtn,loading=true;
        setTimeout(()=>{
            loadmoreBtn=getLoadMore(document);
            if(loadmoreBtn && isVisible(loadmoreBtn, _unsafeWindow)){
                loading=false;
            }
        },500);
        let checkScrollReach=()=>{
            let scrolly=window.scrollY;
            let windowHeight=window.innerHeight || document.documentElement.clientHeight;
            let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(scrollH-scrolly-windowHeight<bottomGap){
                nextPage();
            }
        };
        document.addEventListener('scroll', e=>{
            if(urlChanged){
                ruleParser.initPage(()=>{
                    if(ruleParser.nextLinkHref)initView();
                });
                urlChanged=false;
                isPause=false;
            }
            if(isPause)return;
            if(!loading){
                loading=true;
                setTimeout(()=>{loading=false},200);
                if(!loadmoreBtn || !loadmoreBtn.parentNode){
                    loadmoreBtn=getLoadMore(document);
                }
                if(loadmoreBtn){
                    if(isInViewPort(loadmoreBtn)){
                        emuClick(loadmoreBtn);
                    }
                }
            }
            setTimeout(()=>{
                if(!isLoading){
                    checkScrollReach();
                }
            },100);
        }, true);
        document.addEventListener('dblclick', e=>{
            if(rulesData.dbClick2Stop){
                setTimeout(()=>{
                    changeStop(!isPause, rulesData.hideBar);
                    if(!isPause){
                        checkScrollReach();
                    }
                },200);
            }
        });
    }

    function getLoadMore(doc){
        if(ruleParser.curSiteRule.loadMore==="")return null;
        let btnSel=ruleParser.curSiteRule.loadMore||".LoadMore,.load-more";
        let loadmoreBtn=doc.querySelector(btnSel);
        if(!loadmoreBtn){
            let buttons=doc.querySelectorAll("input,button,a,div[onclick]"),loadmoreReg=/^\s*(加载更多|加載更多|load\s*more|もっと読み込む)\s*$/i;
            for(let i=0;i<buttons.length;i++){
                let button=buttons[i];
                if(button && loadmoreReg.test(button.innerText)){
                    loadmoreBtn=button;
                    break;
                }
            }
        }
        return loadmoreBtn;
    }

    var hasPageNum=true;
    function createPageBar(url){
        let insert=ruleParser.getInsert();
        if(!insert || !insert.parentNode)return;
        curPage++;
        let example=ruleParser.curSiteRule.insertPos==2?insert.children[0]:insert;
        let inTable=example.parentNode.tagName=="TABLE" ||
            example.tagName=="TR" ||
            example.tagName=="TBODY" ||
            (example.previousElementSibling && example.previousElementSibling.tagName=="TR") ||
            (example.previousElementSibling && example.previousElementSibling.tagName=="TBODY");
        let inLi=example.tagName=="LI" || (example.previousElementSibling && example.previousElementSibling.tagName=="LI");
        let pageBar=document.createElement(inTable?"tr":"div");
        let upSpan=document.createElement("span");
        let downSpan=document.createElement("span");
        let pageText=document.createElement("a");
        pageBar.className="pagetual_pageBar";
        pageBar.id="pagetual_pageBar";
        if(isPause){
            pageBar.classList.add("stop");
        }
        pageBar.style.cssText=pageBarStyle;
        pageBar.title=i18n(isPause?"enable":"disable");
        upSpan.innerHTML=upSvg;
        upSpan.title=i18n("toTop");
        downSpan.innerHTML=downSvg;
        downSpan.title=i18n("toBottom");
        upSpan.style.cssText=initStyle;
        downSpan.style.cssText=initStyle;
        pageText.href=url;
        pageText.style.cssText=pageTextStyle;
        pageText.title=i18n("current");
        pageBar.appendChild(upSpan);
        pageBar.appendChild(pageText);
        if(ruleParser.curSiteRule.pageNum || (hasPageNum && /[&\/\?](p=|page[=\/])\d+/.test(url))){
            pageText.innerHTML="Page ";
            let pageNum=document.createElement("span");
            pageNum.innerText=curPage;
            pageNum.className="pagetual_pageNum";
            pageNum.title=i18n("inputPageNum");
            pageNum.style.cssText=pageTextStyle;
            pageNum.style.cursor="pointer";
            pageNum.style.color="";
            pageNum.addEventListener("click", e=>{
                let pageInput=prompt(i18n("inputPageNum"));
                if(pageInput){
                    let pageLink=ruleParser.getLinkByPage(url, pageInput);
                    if(pageLink){
                        _GM_openInTab(pageLink,{active:true});
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });
            pageBar.appendChild(pageNum);
        }else{
            pageText.innerHTML="Page "+curPage;
            hasPageNum=false;
        }
        pageBar.appendChild(downSpan);
        if(inTable){
            example=(insert.tagName=="TR" || insert.tagName=="TBODY")?insert:insert.previousElementSibling;
            if(example.previousElementSibling)example=example.previousElementSibling;
            let tdNum=0;
            [].forEach.call(example.querySelectorAll("td,th"), td=>{
                tdNum+=td.colSpan||1;
            });
            pageBar.style.display="table-row";
            pageBar.style.backgroundColor="unset";
            let td=document.createElement("td");
            td.style.backgroundColor="rgb(240 240 240 / 80%)";
            td.style.borderRadius="20px";
            td.colSpan=tdNum||1;
            td.style.padding="0 0";
            td.style.textAlign="center";
            td.appendChild(upSpan);
            td.appendChild(pageText);
            td.appendChild(downSpan);
            pageBar.appendChild(td);
        }

        upSpan.addEventListener("click", e=>{
            //changeStop(true);
            //pageBar.title=i18n(isPause?"enable":"disable");
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            e.preventDefault();
            e.stopPropagation();
        });
        downSpan.addEventListener("click", e=>{
            changeStop(true);
            pageBar.title=i18n(isPause?"enable":"disable");
            document.body.scrollTop=9999999;
            document.documentElement.scrollTop=9999999;
            e.preventDefault();
            e.stopPropagation();
        });
        pageBar.addEventListener("click", e=>{
            changeStop(!isPause);
            pageBar.title=i18n(isPause?"enable":"disable");
        });
        pageText.addEventListener("click", e=>{
            e.stopPropagation();
        });
        let parentStyle=_unsafeWindow.getComputedStyle(insert.parentNode);
        pageBar.style.width=parseInt(parentStyle.width)*.99-parseInt(parentStyle.paddingLeft)-parseInt(parentStyle.paddingRight)+"px";
        if(inLi){
            pageBar.style.width="90%";
            pageBar.style.minWidth="150px";
            pageBar.style.display="inline-block";
            let line=document.createElement("li");
            line.style.textAlign="center";
            line.className=example.tagName=="LI"?example.className:example.previousElementSibling.className;
            line.appendChild(pageBar);
            if(ruleParser.curSiteRule.insertPos==2){
                insert.appendChild(line);
            }else{
                insert.parentNode.insertBefore(line, insert);
            }
        }else{
            if(ruleParser.curSiteRule.insertPos==2){
                insert.appendChild(pageBar);
            }else{
                insert.parentNode.insertBefore(pageBar, insert);
            }
        }
        if(ruleParser.curSiteRule.pageBar){
            try{
                Function("pageBar",'"use strict";' + ruleParser.curSiteRule.pageBar)(pageBar);
            }catch(e){
                debug(e);
            }
        }

        let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let actualTop = pageBar.offsetTop;
        let current = pageBar.parentNode.offsetParent;
        while (current !== null){
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        bottomGap=scrollH-actualTop+(window.innerHeight||document.documentElement.clientHeight)*(ruleParser.curSiteRule.rate||1);
        return pageBar;
    }

    function emuClick(btn){
        if(!PointerEvent)return btn.click();
        let eventParam={
            isTrusted: true,
            altKey: false,
            azimuthAngle: 0,
            bubbles: true,
            button: 0,
            buttons: 0,
            clientX: 1,
            clientY: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 2,
            fromElement: null,
            height: 1,
            isPrimary: false,
            metaKey: false,
            pointerId: 1,
            pointerType: "mouse",
            pressure: 0,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            toElement: null,
            twist: 0,
            type: "click",
            which: 1
        };
        var mouseclick = new PointerEvent("click",eventParam);
        btn.dispatchEvent(mouseclick);
    }

    var emuIframe;
    function emuPage(callback){
        let orgPage,curPage,iframeDoc,times=0,loadmoreBtn,loadmoreEnd=false,waitTimes=10;
        function checkPage(){
            if(isPause)return;
            try{
                iframeDoc=emuIframe.contentDocument || emuIframe.contentWindow.document;
            }catch(e){
                debug("Stop as cors");
                isPause=true;
                callback(false, false);
                return;
            }

            let nextLink=ruleParser.getNextLink(iframeDoc);
            let waitTime=500,checkEval;
            if(ruleParser.curSiteRule.wait){
                if(isNaN(ruleParser.curSiteRule.wait)){
                    try{
                        checkEval=Function("doc",'"use strict";' + ruleParser.curSiteRule.wait);
                    }catch(e){
                        debug(e);
                    }
                }else{
                    waitTime=ruleParser.curSiteRule.wait;
                }
            }

            if(!orgPage){
                if(!loadmoreEnd){
                    loadmoreBtn=getLoadMore(iframeDoc);
                    if(loadmoreBtn && isVisible(loadmoreBtn, iframeDoc.defaultView)){
                        emuClick(loadmoreBtn);
                        let intv=setInterval(()=>{
                            loadmoreBtn=getLoadMore(iframeDoc);
                            if(!loadmoreBtn || !loadmoreBtn.parentNode || !isVisible(loadmoreBtn, iframeDoc.defaultView)){
                                clearInterval(intv);
                                loadmoreEnd=true;
                                setTimeout(()=>{
                                    checkPage();
                                },500);
                            }else{
                                emuClick(loadmoreBtn);
                            }
                        },200);
                        return;
                    }else{
                        loadmoreEnd=true;
                    }
                }
                let pageEle=ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true);
                if(!nextLink || !pageEle || (checkEval && !checkEval(iframeDoc))){
                    if(ruleParser.curSiteRule.wait && waitTimes-->0){
                        setTimeout(()=>{
                            checkPage();
                        },waitTime);
                        return;
                    }
                }
                orgPage=pageEle;
                if(!orgPage || orgPage.length==0){
                    debug("Stop as no page when emu");
                    isPause=true;
                    callback(false, false);
                    return;
                }
                if(orgPage && orgPage[0].tagName=="UL")orgPage=orgPage[0].children;
                if(orgPage && nextLink){
                    orgPage=orgPage[parseInt(orgPage.length/2)];
                    if(!isVisible(nextLink, iframeDoc.defaultView)){
                        debug("Stop as next hide when emu");
                        isPause=true;
                        callback(false, false);
                    }else{
                        emuClick(nextLink);
                        setTimeout(()=>{
                            checkPage();
                        },500);
                    }
                }else{
                    debug("Stop as no next when emu");
                    isPause=true;
                    callback(false, false);
                }
                return;
            }
            if(times++ > 20){
                //emuClick(nextLink);
                debug("Stop as timeout when emu");
                isPause=true;
                callback(false, false);
                return;
            }
            let eles=ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true),checkItem=eles;
            if(eles && eles.length>0 && eles[0].tagName=="UL")checkItem=eles[0].children;
            if(!eles || eles.length==0 || orgPage == checkItem[parseInt(checkItem.length/2)] || (checkEval && !checkEval(iframeDoc))){
                setTimeout(()=>{
                    checkPage();
                },waitTime);
            }else{
                callback(iframeDoc, eles);
            }
        }
        if(!emuIframe){
            emuIframe = document.createElement('iframe');
            emuIframe.name = 'pagetual-iframe';
            if(ruleParser.curSiteRule.sandbox!=false){
                emuIframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
            }
            emuIframe.width = '100%';
            emuIframe.height = '0';
            emuIframe.frameBorder = '0';
            emuIframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;';
            emuIframe.addEventListener("load", e=>{
                setTimeout(()=>{
                    try{
                        iframeDoc=emuIframe.contentDocument || emuIframe.contentWindow.document;
                    }catch(e){
                        debug("Stop as cors");
                        isPause=true;
                        callback(false, false);
                        return;
                    }
                    let code=ruleParser.curSiteRule.init;
                    if(code){
                        try{
                            Function('doc','"use strict";' + code)(iframeDoc);
                        }catch(e){
                            debug(e);
                        }
                    }
                    checkPage();
                },500);
            });
            emuIframe.src=location.href;
            document.body.appendChild(emuIframe);
        }else{
            checkPage();
        }
    }

    function forceIframe(url, callback){
        let curIframe = document.createElement('iframe'),iframeDoc;
        curIframe.name = 'pagetual-iframe';
        curIframe.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";
        curIframe.frameBorder = '0';
        curIframe.scrolling="no";
        curIframe.style.cssText = 'display: block; visibility: visible; float: none; clear: both; width: 100%;height:0;background: initial; border: 0px; border-radius: 0px; margin: 0px 0px 2rem; padding: 0px; z-index: 2147483647;';
        curIframe.addEventListener("load", e=>{
            try{
                iframeDoc=curIframe.contentDocument || curIframe.contentWindow.document;
            }catch(e){
                debug("Stop as cors");
                isPause=true;
                callback(false, false);
                return;
            }
            ruleParser.insertPage(iframeDoc, [], url, null, true);
            callback(curIframe, true);
            curIframe.style.height=iframeDoc.body.scrollHeight+"px";
            curIframe.style.width=iframeDoc.body.scrollWidth+"px";
        });
        let inAction=false;
        let forceRefresh=e=>{
            if(inAction || !iframeDoc)return;
            inAction=true;
            setTimeout(()=>{
                inAction=false;
                curIframe.style.height=iframeDoc.body.scrollHeight+"px";
                curIframe.style.width=iframeDoc.body.scrollWidth+"px";
                if(!ruleParser.nextLinkHref){
                    ruleParser.getNextLink(iframeDoc);
                    if(ruleParser.nextLinkHref){
                        document.removeEventListener("scroll", forceRefresh);
                    }
                }else{
                    document.removeEventListener("scroll", forceRefresh);
                }
            },500);
            curIframe.style.height=iframeDoc.body.scrollHeight+"px";
            curIframe.style.width=iframeDoc.body.scrollWidth+"px";
        };
        document.addEventListener("scroll", forceRefresh);
        curIframe.src=url;
        let insert=ruleParser.getInsert();
        document.body.appendChild(curIframe);
        return curIframe;
    }

    function loadPageOver(){
        isLoading=false;
        if(loadingDiv.parentNode){
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
        setTimeout(()=>{
            let scrollH=Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(scrollH < (window.innerHeight || document.documentElement.clientHeight)){
                nextPage();
            }
        },1);
    }

    function nextPage(){
        if(isPause || isLoading)return;
        let nextLink=ruleParser.nextLinkHref;
        if(!nextLink)return;
        let insert=ruleParser.getInsert();
        if(insert){
            let isJs=/^(javascript|#)/.test(nextLink.replace(location.href,""));
            if(location.protocol=="https:" && /^http:/.test(nextLink)){
                nextLink=nextLink.replace(/^http/,"https");
            }
            isLoading=true;
            document.body.appendChild(loadingDiv);
            let sleep=ruleParser.curSiteRule.sleep||0;
            setTimeout(()=>{
                if(ruleParser.curSiteRule.pageElementByJs){
                    var over=ele=>{
                        loadPageOver();
                        if(ele){
                            createPageBar(nextLink);
                            ruleParser.insertPage(null, ele, nextLink, null, true);
                            if(autoLoadNum>=0){
                                if(autoLoadNum!=0 && --autoLoadNum==0){
                                    autoLoadNum=-1;
                                }else{
                                    nextPage();
                                }
                            }
                        }else{
                            debug("Stop as no page when get by js");
                            isPause=true;
                        }
                    };
                    try{
                        Function("over",'"use strict";' + ruleParser.curSiteRule.pageElementByJs)(over);
                    }catch(e){
                        debug(e);
                    }
                }else if(ruleParser.curSiteRule.action==1 && !isJs){
                    requestFromIframe(nextLink, (doc, eles)=>{
                        loadPageOver();
                        if(eles){
                            createPageBar(nextLink);
                            ruleParser.insertPage(doc, eles, nextLink, null, true);
                            if(autoLoadNum>=0){
                                if(autoLoadNum!=0 && --autoLoadNum==0){
                                    autoLoadNum=-1;
                                }else{
                                    nextPage();
                                }
                            }
                        }
                    });
                }else if((forceState==2||ruleParser.curSiteRule.action==2) && !isJs){
                    forceIframe(nextLink, (iframe, eles)=>{
                        loadPageOver();
                        let pageBar=createPageBar(nextLink);
                        iframe.parentNode.insertBefore(pageBar, iframe);
                        if(autoLoadNum>=0){
                            if(autoLoadNum!=0 && --autoLoadNum==0){
                                autoLoadNum=-1;
                            }else{
                                nextPage();
                            }
                        }
                    });
                }else{
                    if(!isJs){
                        requestDoc(nextLink, (eles)=>{
                            loadPageOver();
                            if(eles){
                                createPageBar(nextLink);
                                if(autoLoadNum>=0){
                                    if(autoLoadNum!=0 && --autoLoadNum==0){
                                        autoLoadNum=-1;
                                    }else{
                                        nextPage();
                                    }
                                }
                            }
                        });
                    }else{
                        emuPage((doc, eles)=>{
                            loadPageOver();
                            if(eles){
                                createPageBar(nextLink);
                                ruleParser.insertPage(doc, eles, "", null, true);
                                if(autoLoadNum>=0){
                                    if(autoLoadNum!=0 && --autoLoadNum==0){
                                        autoLoadNum=-1;
                                    }else{
                                        nextPage();
                                    }
                                }
                            }
                        });
                    }
                }
            },sleep);
        }
    }

    function init(){
        initRules(()=>{
            initPage();
        });
    }
    setTimeout(()=>{
        init();
    },300);
})();