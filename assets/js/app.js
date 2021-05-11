$(window).ready(function () {
    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    const links = document.querySelectorAll(".navbar-nav ul a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    };

    var flag = false;
    var scroll;

    $(window). scroll(function(){
        scroll = $(window).scrollTop();
        
        
        if(scroll > 200){
            if (!flag){
                $("#dina-block").css({"background-color": "var(--sky)"});
                flag = true;
            }    
        }else{
            if (flag){
                $("#dina-block").css({"background-color": "transparent"});
                flag = false;
            }
        };
    });

});