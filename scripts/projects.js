//sticky side-bar
// let sidebar = document.getElementsByClassName("side-bar")[0];
// let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

// window.onscroll = () => {
//     let scrollTop = window.scrollY;
//     let viewHeight = window.innerHeight;
//     let contentHeight = sidebar_content.getBoundingClientRect().height;
//     let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

//     if (scrollTop >= contentHeight - viewHeight + sidebarTop) {
//         sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebar}px)`;
//         sidebar_content.style.position = "fixed";
//     }
//     else {
//         sidebar_content.style.transform = "";
//         sidebar_content.style.position = "";
//     }
// }

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("side-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
