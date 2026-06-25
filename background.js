/*
Event triggers when browser commits to loading given webpage.
*/

chrome.webNavigation.onCommitted.addEventListener(function(tab)){

    if(tab.frameId == 0){
        chrome.tabs.query({active:true,lastFocusedWindow:true}, tabs => {
            
            let url = tabs[0].url;
            let parsedUrl = url.replace("https://", "")
            .replace ("http://", "")
            .replace("www.","")

            let domain = parsedUrl.slick(0, parsedUrlindexOf('/')==-1?parsedUrl.
            .slice(0,parsedUrl.indexOf('?')))
        })
    }
}