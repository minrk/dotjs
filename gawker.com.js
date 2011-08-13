// ==UserScript==
// @name           UnGawker
// @namespace      net.minrk.ungawker
// @description    Automatically view all Gawker articles via Instapaper
// @include        http://*deadspin.com/*
// @include        http://*gawker.com/*
// @include        http://*gizmodo.com/*
// @include        http://*io9.com/*
// @include        http://*jalopnik.com/*
// @include        http://*jezebel.com/*
// @include        http://*kotaku.com/*
// @include        http://*lifehacker.com/*
// ==/UserScript==


function iptxt(){
    // this is the Instapaper text bookmarklet
    var d=document;
    try{ 
        if(!d.body) 
        throw(0);
        window.location='http://www.instapaper.com/text?u='+encodeURIComponent(d.location.href);
    } catch(e){
        alert('Please wait until the page has loaded.');
    }
}

function hidesidebar(){
    // hide the sidebar
    var d=document;
    try{
        if(!d.body) throw(0);
        
        sidebar = document.getElementById("rightcontainer");
        
        if (sidebar == null) throw(1);
        
        sidebar.style.visibility = "hidden";
    } catch(e){
        // noop
    }
}
if (document.location.hash){
    // don't filter when entering from frontpage
    iptxt();
}else{
    hidesidebar();
}
