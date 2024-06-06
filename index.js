$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// 1. Light and dark theme switch 
const moonIcon = document.getElementById('moon-icon');
// const darkImage = document.getElementById('dark-img');
// const lightImage = document.getElementById('light-img');
const darkTheme = document.getElementById('background-video-dark');
const lightTheme = document.getElementById('background-video-light');

moonIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        moonIcon.style.display = 'block';
        // darkImage.style.display = 'block';
        // lightImage.style.display = 'none';
        darkTheme.style.display = 'block';
        lightTheme.style.display = 'none';

    } else {
        moonIcon.style.display = '';
        // darkImage.style.display = '';
        // lightImage.style.display = '';
        darkTheme.style.display = '';
        lightTheme.style.display = '';

    }
}


let sections = document.querySelectorAll(".section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        }
        //if want to use repeating animation on scroll use this
         else {
            sec.classList.remove("show-animate");
        }
    });
}



var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor-2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});



//Responsive Navbar - Appear navabr on clicking on bar icon and disappear upon clicking on close icon
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

document.getElementById("btn-hire").addEventListener("click", function () {
    this.classList.add("clicked");
});