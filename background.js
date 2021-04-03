(function() {
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if(!message.startsWith("popup.")) {
            var tabId;
            var discordurl;
            chrome.storage.local.get('discordurl', function(data) {
                var url = data.discordurl
                discordurl = JSON.stringify(data.discordurl)
                if(url != "") {
                    chrome.tabs.create({"url": url, "active": false},function(newTab) {
                        tabId = newTab.id;
                    });
                } else {
                    alert("Please set up the extension using the popup!")
                }
            });

            if(message != "start") {
                setTimeout(function(){
                    message = JSON.stringify(message);
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("discordurl", ${discordurl})` });
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                    chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
                }, 500);

            } else if(message == "leave") {
                setTimeout(function(){
                    message = JSON.stringify(message);
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("discordurl", ${discordurl})` });
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                    chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
                }, 500);

            } else if(message == "skip") {
                setTimeout(function(){
                    message = JSON.stringify(message);
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("discordurl", ${discordurl})` });
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                    chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
                }, 500);

            } else if(message == "back") {
                setTimeout(function(){
                    message = JSON.stringify(message);
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("discordurl", ${discordurl})` });
                    chrome.tabs.executeScript(tabId, { code: `localStorage.setItem("link", ${message})` });
                    chrome.tabs.executeScript(tabId, { file: `discord-execution.js` });
                }, 500);
            }

        } else if(message.startsWith("popup.")) {
            url = message.replace("popup.", "");
            if(url != "") {
                chrome.storage.local.set({"discordurl": url}, function() {
                    alert("Successfully set up the extension to: " + url)
                });
            } else {
                alert("Please enter a valid Discord link!")
            }
        }
    });
})();