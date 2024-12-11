window.onscroll = () => {
    if(window.scrollY > 50){
        document.querySelector(".navbar").classList.add("navbar-down");
        document.querySelector(".brand img").setAttribute("src", "../media/img/icons/logo2.png");
    }
    else{
        document.querySelector(".navbar").classList.remove("navbar-down");
        document.querySelector(".brand img").setAttribute("src", "../media/img/icons/logo.png");
    }
};
