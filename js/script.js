const max = 12, min = 8;
const container = $(".container-1");
const width = container.outerHeight();

const text = document.querySelector(".text-2");
const text1 = document.querySelector(".text-1");
const header = document.querySelector(".header:not(.header-2) h1");

// $(window).on("scroll", () => {
//     let scrollPos = window.pageYOffset;
//     if (scrollPos <= width) {
//         text.style.transform = 'translateY(' + (scrollPos / width) * 100 + '%)'
//         text1.style.transform = 'translateY(' + (scrollPos / width) * 100 + '%)'
//         text.style.fontSize = ((scrollPos / width) * (max - min) + min) + 'em'
//         text1.style.fontSize = ((scrollPos / width) * (max - min) + min) + 'em'

//         header.style.transform = 'translateY(' + (scrollPos / (width)) * 100 + '%)'
//     }

// })

var lastScrollTop = 0;
var body = $("html, body");
let animated = true;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st <= width) {
        if (animated) {
            if (st > lastScrollTop) {
                animated = false;
                text.style.transform = 'translateY(100%)'
                text1.style.transform = 'translateY(100%)'
                text.style.fontSize = '12em'
                text1.style.fontSize = '12em';
                header.style.transform = 'translateY(300%)'
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("section .container-1:nth-child(2)").offset().top
                }, 1000, () => {
                    animated = true;
                });
            } else {
                animated = false;
                text.style.transform = 'translateY(0%)'
                text1.style.transform = 'translateY(0%)'
                text.style.fontSize = '8em'
                text1.style.fontSize = '8em';
                header.style.transform = 'translateY(0%)'
                $([document.documentElement, document.body]).animate({
                    scrollTop: 0
                }, 1000, () => {
                    animated = true;
                });
            }
        }
        lastScrollTop = st;
    }
});