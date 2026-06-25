/*
Event triggers when browser commits to loading given webpage.
*/

chrome.webNavigation.onCommitted.addEventListener(function(tab){

    if(tab.frameId == 0){
        chrome.tabs.query({active:true,lastFocusedWindow:true}, tabs => {
            
            let url = tabs[0].url;
            let parsedUrl = url.replace("https://", "")
            .replace ("http://", "")
            .replace("www.","")

            let domain = parsedUrl.slick(0, parsedUrlindexOf('/')==-1?parsedUrl.length:parsedUrlindexOf('/'))
            .slice(0,parsedUrl.indexOf('?')==-1?parsedUrl.length:parsedUrlindexOf('?'));

            try{
                if(domain.length < 1 || domain === null || domain ===undefined){
                    return;
                }else if(domain =="linkedin.com"){
                    runLinkedinScript();
                    return;
                }
            }catch(err){
                throw err;
            }
        });
    }
});

function runLinkedinScript(){
    chrime.tabs.executeScript({
        file:'linkedin.js'
    });
    return true;
}