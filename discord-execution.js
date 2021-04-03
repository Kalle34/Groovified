var discordurl = localStorage.getItem("discordurl")
api = discordurl.substring(discordurl.length - 18)
var link = localStorage.getItem("link")
token = JSON.parse(localStorage.getItem("token"))

if(link == "leave") {
setTimeout(function(){
    fetch("https://discord.com/api/v8/channels/" + api + "/messages", {
        "headers": {
            "authorization": token,
            "content-type": "application/json",
          },
          "referrer": discordurl,
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": `{"content":"-leave"}`,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        setTimeout(function(){
            window.close();
        }, 1000);
    }, 500);

} else if(link == "skip") {
    setTimeout(function(){
    fetch("https://discord.com/api/v8/channels/" + api + "/messages", {
        "headers": {
            "authorization": token,
            "content-type": "application/json",
          },
          "referrer": discordurl,
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": `{"content":"-skip"}`,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        setTimeout(function(){
            window.close();
        }, 1000);
    }, 500);

} else if(link == "back") {
    setTimeout(function(){
    fetch("https://discord.com/api/v8/channels/" + api + "/messages", {
        "headers": {
            "authorization": token,
            "content-type": "application/json",
          },
          "referrer": discordurl,
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": `{"content":"-back"}`,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        setTimeout(function(){
            window.close();
        }, 1000);
    }, 500);

} else {
    var content = "-p " + link
    content = JSON.stringify(content)
    setTimeout(function(){
        fetch("https://discord.com/api/v8/channels/" + api + "/messages", {
          "headers": {
            "authorization": token,
            "content-type": "application/json",
          },
          "referrer": discordurl,
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
}