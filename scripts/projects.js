//sticky side-bar
let sidebar = document.getElementsByClassName("side-bar")[0];
let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewHeight = window.innerHeight;
    let contentHeight = sidebar_content.getBoundingClientRect().height;
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

    if (scrollTop >= contentHeight - viewHeight + sidebarTop) {
        sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebar}px)`;
        sidebar_content.style.position = "fixed";
    }
    else {
        sidebar_content.style.transform = "";
        sidebar_content.style.position = "";
    }
}
