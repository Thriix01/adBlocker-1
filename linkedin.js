function removeAds(){
    //Get all span elements on page
    let spans = document.getElementsByTagName("span");
    for(let i=0; i<spans.length;i++){
        //Check if text contains promoted
        if(spans[i].innerHTML==="Promoted"){
            //Get the dice that wraps the ad
            let card = spans[i].closest(".feed-shared-update-v2")

            //If class changed and can't be found with .closest, get the 6th parent
            if(card===null){
                let j=0;
                card = spans[i];
                while (j < 6){
                    card = card.parentNode;
                    ++j;
                }
            }

            //BOMB THE ADDDDDDDDDDD
            card.setAttribute("style","display:none !important;");
        }
    }
    let iframes = document.getElementsByTagName("iframe");
    for(let i=0; i<iframes.length;i++){
        //BOMB THE ADDDDDDDDDDD
        iframes[i].setAttribute("style","display:none !important;");
    }
}

removeAds();

//Ensure the culling continues down the page
setInterval(function(){
    removeAds();
},100)