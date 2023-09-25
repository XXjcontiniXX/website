function nav_opacity() {
    var navbar = document.getElementById("navbar");
    var background = document.getElementById("main-background");
    var heliostat = document.getElementById("heliostat-title");
    var robot = document.getElementById("robot-title");
    var rocket = document.getElementById("rocket-title") ;
    var height = window.innerHeight;
    var scrollY = window.scrollY

      if (scrollY > 0) {
        navbar.classList.add("active");
        navbar.classList.remove("inactive");
      } else {
        navbar.classList.remove("active");
        navbar.classList.add("inactive");
      }

      if (scrollY >= height) {
        background.src = "./images/local_white.svg";
        background.classList.add("fade");
        background.src = "./images/robot_hand.jpg";
        background.style.opacity = .35;
      }else{
        background.src = "./images/skyscraper.jpg";
        background.classList.remove("fade");
      }

      if(scrollY >= height*1.5){ // if we scrolled to the second page then start
        heliostat.classList.add("blurup");
        rocket.classList.add("blurup");
        robot.classList.add("blurdown");
        heliostat.style.opacity = 1;
        rocket.style.opacity = 1;
        robot.style.opacity = 1;
      }else{
        heliostat.classList.remove("blurup");
        rocket.classList.remove("blurup");
        robot.classList.remove("blurdown");
        heliostat.style.opacity = 0;
        rocket.style.opacity = 0;
        robot.style.opacity = 0;
      }
  }

  
  window.addEventListener("scroll", nav_opacity);