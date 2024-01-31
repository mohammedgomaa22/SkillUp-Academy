// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************


const playVideo = () => {
    const ele = document.querySelector(".video"),
        play = document.querySelector(".video .over-btn"),
        pic = document.querySelector(".video .over-img");
    
    // -------------
    
    ele.addEventListener("click", () => {
        pic.style.display = "none";
        if (play.style.display == "none") {
            play.style.display = "flex";
        } else {
            play.style.display = "none";
        }
    });
};
playVideo();
// ***************************************************
