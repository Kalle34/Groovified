chrome.runtime.getBackgroundPage(function(bg){
    if(bg.sessionDataHTML){
         document.body.innerHTML = bg.sessionDataHTML;
    }

    setInterval(function(){
        bg.sessionDataHTML = document.body.innerHTML
    },1000);

    document.getElementById('button').onclick = function() {
        link = "popup." + document.getElementById("link").value
        chrome.runtime.sendMessage(link)
    }
});