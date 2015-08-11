
    var logOrientation = function(){
      $("#absolute").text(event.absolute);
      $("#alpha").text(event.alpha);
      $("#beta").text(event.beta);
      $("#gamma").text(event.gamma);
      console.log("event");
    }
    window.addEventListener("deviceorientation",logOrientation,true);
console.log("ready")
