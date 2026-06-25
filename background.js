/*
Event triggers when browser commits to loading given webpage.
*/

chrome.webNavigation.onCommitted.addListener(function(tab){
    if(tab.frameId == 0){
        chrome.tabs.query({active:true,lastFocusedWindow:true}, tabs => {
            let tabId = tabs[0].id
            let url = tabs[0].url;
            let parsedUrl = url.replace("https://", "")
            .replace ("http://", "")
            .replace("www.","")

            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/')==-1?parsedUrl.length:parsedUrl.indexOf('/'))
            .slice(0,parsedUrl.indexOf('?')==-1?parsedUrl.length:parsedUrl.indexOf('?'));

            try{
                if(domain.length < 1 || domain === null || domain === undefined){
                    return;
                }else if(domain =="linkedin.com"){
                    runLinkedinScript(tabId);
                    return;
                }
            }catch(err){
                throw err;
            }
        });
    }
});

function runLinkedinScript(tabId){
    chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ["linkedin.js"]
    });
    return true;
}