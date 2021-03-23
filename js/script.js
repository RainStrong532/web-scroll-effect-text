const max = 12, min = 8;

$(window).on("scroll", () => {
    const container = $(".container-1");
    const text = document.querySelector(".text-2");
    const text1 = document.querySelector(".text-1");
    let scrollPos = window.pageYOffset;
    const width = container.outerHeight();
    const header = document.querySelector(".header:not(.header-2) h1");
    if(scrollPos <= width){
        text.style.transform = 'translateY('+ (scrollPos/width)*100 +'%)'
        text1.style.transform = 'translateY('+ (scrollPos/width)*100 +'%)'
        text.style.fontSize = ((scrollPos/width)*(max-min)+min) +'em'
        text1.style.fontSize = ((scrollPos/width)*(max-min)+min) +'em'

        header.style.transform = 'translateY('+ (scrollPos/(width))*100 +'%)'
    }

})