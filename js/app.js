/* $(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50) {
            $(".div-container").addClass("active");
        } else {
            $(".div-container").removeClass("active");
        }
    });
}); */

const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }/* else{
            entry.target.classList.remove('show')
        } */
    }

    );
}

);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
