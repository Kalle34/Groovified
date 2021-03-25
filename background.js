(function() {
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if(message == "start") {
            var tabId;
            chrome.tabs.create({"url": "here your discord #music link", "active": true},function(newTab) {
                tabId = newTab.id;
            });
            chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
                if(message != "start") {

                    setTimeout(function(){
                        message = JSON.stringify(message);
                        chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                        chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
                    }, 500);
                }
            });
        }
    });
})();