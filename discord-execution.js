var link = localStorage.getItem("link")
var content = "-p " + link
content = JSON.stringify(content)
token = JSON.parse(localStorage.getItem("token"))
setTimeout(function(){
    fetch("https://discord.com/api/v8/channels/799228826935623700/messages", {
      "headers": {
        "authorization": token,
        "content-type": "application/json",
      },
      "referrer": "https://discord.com/channels/690511313633280021/799228826935623700",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `{"content":${content}}`,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
    setTimeout(function(){
        window.close();
    }, 1000);
}, 500);