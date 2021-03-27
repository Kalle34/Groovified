(function () {
  function fnAddButtons() {
    if(window.location.hostname.toString() == "open.spotify.com"){
      var btn = document.createElement("button");
      var btnleave = document.createElement("button");
      btn.textContent = "Play";
      btn.id = "play-extension-btn";
      btn.type = "play-extension";
      btnleave.textContent = "Leave";
      btnleave.id = "play-extension-btn-leave";
      btnleave.type = "play-extension-leave";
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btn);
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btnleave);
    } else if(window.location.hostname.toString() == "www.youtube.com"){
        var ytbtn = document.createElement("button");
        var ytbtnleave = document.createElement("button");
        ytbtn.textContent = "Play";
        ytbtn.id = "play-extension-ytbtn";
        ytbtn.type = "play-extension";
        ytbtnleave.textContent = "Leave";
        ytbtnleave.id = "play-extension-ytbtn-leave";
        ytbtnleave.type = "play-extension-leave";
        document.querySelector('.title').appendChild(ytbtn);
        document.querySelector('.title').appendChild(ytbtnleave);
    }
  }

  function fnDefineEvents() {
      if(window.location.hostname.toString() == "open.spotify.com"){
        document.getElementById("play-extension-btn").addEventListener("click", function (event) {
            link = window.location.href
            chrome.runtime.sendMessage(link);
        });

        document.getElementById("play-extension-btn-leave").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("leave");
        });
      } else if(window.location.hostname.toString() == "www.youtube.com"){
        document.getElementById("play-extension-ytbtn").addEventListener("click", function (event) {
            link = window.location.href
            chrome.runtime.sendMessage(link);
        });

        document.getElementById("play-extension-ytbtn-leave").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("leave");
        });
      }
  }

    setTimeout(function(){
        fnAddButtons();
        fnDefineEvents();
    }, 1500);
})();