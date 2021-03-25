var link = localStorage.getItem("link")
var content = "-p " + link
content = JSON.stringify(content)
token = JSON.parse(localStorage.getItem("token"))
setTimeout(function(){
    fetch("https://discord.com/api/v8/channels/here your second number of the discord #music link/messages", {
      "headers": {
        "authorization": token,
        "content-type": "application/json",
      },
      "referrer": "here your discord #music link",
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