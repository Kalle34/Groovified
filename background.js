(function() {
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        var tabId;
        chrome.tabs.create({"url": "https://discord.com/channels/690511313633280021/799228826935623700", "active": false},function(newTab) {
            tabId = newTab.id;
        });

        if(message != "start") {
            setTimeout(function(){
                message = JSON.stringify(message);
                chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
            }, 500);

        } else if(message == "leave") {
            setTimeout(function(){
                message = JSON.stringify(message);
                chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
            }, 500);

        } else if(message == "skip") {
            setTimeout(function(){
                message = JSON.stringify(message);
                chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
            }, 500);
        }
    });
})();