
    var logOrientation = function(){
      $("#alpha").text(parseInt(event.alpha));
      $("#beta").text(parseInt(event.beta));
      $("#gamma").text(parseInt(event.gamma));
    }
    window.addEventListener("deviceorientation",logOrientation,true);
