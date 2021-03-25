(function () {
  function fnAddButtons() {
    if(window.location.hostname.toString() == "open.spotify.com"){
      var btn = document.createElement("button");
      btn.textContent = "Play";
      btn.id = "play-extension-btn";
      btn.type = "play-extension";
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btn);
    }
  }

  function fnDefineEvents() {
      if(window.location.hostname.toString() == "open.spotify.com"){
        document.getElementById("play-extension-btn").addEventListener("click", function (event) {
            link = window.location.href
            chrome.runtime.sendMessage("start");
            chrome.runtime.sendMessage(link);
        });
      }
  }

    setTimeout(function(){
        fnAddButtons();
        fnDefineEvents();
    }, 2000);
})();