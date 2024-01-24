// Loader
$(document).ready(function() {
	// Users can skip the loading process if they want.
	// $('.skip').click(function() {
	// 	$('.overlay, body').addClass('loaded');
	// })
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 6000);
})




// $(document).ready(function(){
    
//   $(window).scroll(function(){
//       if($(this).scrollTop() >= 500) {
//           $("#gotop").fadeIn();
    
//           $("#top-btn").click(function(){
//               $(window).scrollTop(0);
//           });
//        }
//        else {
//            $("#gotop").fadeOut();
//        }    
//   });
// });

// function menuBtnFunction(menuBtn) {
//   menuBtn.classList.toggle("active");
//   $(".mainMenu").toggleClass("active");
//   $(".mainMenu a").toggleClass("active");
// }



// Nav bar

window.addEventListener('scroll', function() {
  let header = document.querySelector('nav');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Menu toggle-button for small screens
$(document).ready(function (){
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

//Scrolling Effect for nav
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});



// animate-text-for-home-page

const {children: titles} = document.querySelector(".animate-text");
const txtsLen = titles.length;
let index = 0;
const textInTimer = 3000;
const textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    titles[i].classList.remove("text-in", "text-out");
  }
  titles[index].classList.add("text-in");

  setTimeout(function () {
    titles[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;




// scroll animation

window.addEventListener('scroll', () => {
  let page = this;
  let pageTop = this.scrollY;
  let pageHeight = this.outerHeight / 2.5 ;
  
  let frames = document.querySelectorAll('.scrollAnim');
  frames.forEach( frame => {
    let frameTop = frame.offsetTop;
    let frameHeight = frame.offsetHeight;
    
    if ( pageTop  >= frameTop - pageHeight &&
        pageTop  < frameTop + frameHeight/1.5 ){
      frame.classList.add('anim');
    }
  });
});


// window.addEventListener('scroll', () => {
//   let page = this;
//   let pageTop = this.scrollY;
//   let pageHeight = this.outerHeight / 2.5 ;
  
//   let frames = document.querySelectorAll('.scrollAnim');
//   frames.forEach( frame => {
//     let frameTop = frame.offsetTop;
//     let frameHeight = frame.offsetHeight;
    
//     if ( pageTop  >= frameTop - pageHeight &&
//         pageTop  < frameTop + frameHeight/1.5 ){
//       frame.classList.add('anim');
//     }else{
//       frame.classList.remove('anim');
//     }
//   });
// });




// top-button-fade

mybutton = document.getElementById("myBtn");

//When the user scrolls down 20px from the top of the document, show the buttons
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//When the user clicks on the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// shop-model-popup

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal-box");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal-box").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Close Modal with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal-box.modal-show")) {
    toggleModal(document.querySelector(".modal-box.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial";
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}




// drop-down

const faqItems = document.querySelectorAll('.container-item');

faqItems.forEach(item => {
  const question = item.querySelector('.container-item-heading');
  const answer = item.nextElementSibling;
  const icon = item.querySelector('i');

  item.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('i');

        otherAnswer.classList.remove('active');
        otherIcon.classList.remove('active');
        otherAnswer.style.maxHeight = "0";
      }
    });

    answer.classList.toggle('active');
    icon.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});





// form-wrapper

$('.white-card').mouseenter(function(){
  $('.wrapper-border').removeClass('shrink');
  $('.wrapper-border').addClass('grow');
  $('.CTA').addClass('active');
});

$('.white-card').mouseleave(function(){
  $('.wrapper-border').removeClass('grow');
  $('.wrapper-border').addClass('shrink');
  $('.CTA').removeClass('active');
});





// particles.js

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
