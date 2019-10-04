// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


// jquery

$(document).ready(function() {
    $('.loop').owlCarousel({
        right:true,
        items:2,
        loop:true,
        margin:100,
        autoplay:true,
        responsive:{
            0:{
                items:1
            }
            , 600:{
                items:1
            }
            , 1000:{
                items:2
            }
            
        }
    });
       });
    