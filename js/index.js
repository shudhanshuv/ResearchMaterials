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






// Nav bar- All Page

window.addEventListener('scroll', function() {
  let header = document.querySelector('nav');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Menu toggle-button for small screens
$(document).ready(function (){
  $(".fa-bars").on("click", function() {
    $("nav ul").toggleClass("showing");
    $('nav').toggleClass('menu-back');
    // $("nav").css("background-color","#fe9932");
    
  });
});

//Scrolling Effect for nav
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
    $('.menu-icon').addClass('menu-back');
  } else {
    $('nav').removeClass('black');
    $('.menu-icon').removeClass('menu-back');
  }
});



// animate-text-Home-page

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




// scroll animation-Home Page

window.addEventListener('scroll', () => {
  let page = this;
  let pageTop = this.scrollY;
  let pageHeight = this.outerHeight / 1.5 ;
  
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






// top-button-fade-All Page

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




// shop-model-popup- Shop Page

// const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
// const modals = document.querySelectorAll(".modal-box");
// const modalCloseButtons = document.querySelectorAll(".modal-close");

// modalTriggerButtons.forEach(elem => {
//   elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
// });
// modalCloseButtons.forEach(elem => {
//   elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal-box").id));
// });
// modals.forEach(elem => {
//   elem.addEventListener("click", event => {
//     if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
//   });
// });

// Close Modal with "Esc"...
// document.addEventListener("keydown", event => {
//   if(event.keyCode === 27 && document.querySelector(".modal-box.modal-show")) {
//     toggleModal(document.querySelector(".modal-box.modal-show").id);
//   }
// });

// function toggleModal(modalId) {
//   const modal = document.getElementById(modalId);

//   if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
//     modal.classList.add("modal-hide");
//     setTimeout(() => {
//       document.body.style.overflow = "initial";
//       modal.classList.remove("modal-show", "modal-hide");
//       modal.style.display = "none";      
//     }, 200);
//   }
//   else {
//     document.body.style.overflow = "hidden";
//     modal.style.display = "flex";
//     modal.classList.add("modal-show");
//   }
// }




// drop-down- Shop Page

// const faqItems = document.querySelectorAll('.container-item');

// faqItems.forEach(item => {
//   const question = item.querySelector('.container-item-heading');
//   const answer = item.nextElementSibling;
//   const icon = item.querySelector('i');

//   item.addEventListener('click', () => {
//     faqItems.forEach(otherItem => {
//       if (otherItem !== item) {
//         const otherAnswer = otherItem.nextElementSibling;
//         const otherIcon = otherItem.querySelector('i');

//         otherAnswer.classList.remove('active');
//         otherIcon.classList.remove('active');
//         otherAnswer.style.maxHeight = "0";
//       }
//     });

//     answer.classList.toggle('active');
//     icon.classList.toggle('active');
//     if (answer.classList.contains('active')) {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     } else {
//       answer.style.maxHeight = "0";
//     }
//   });
// });





// form-wrapper-Enquiry Page

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



// Shop-items- Shop Page

$(document).ready(function() {
	var number = 0;
	$("#next").click(function(){
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".slide" + (number + 1)).slideDown();
		$(".menu" + (number + 1)).addClass('current');

		if (number === 2){
			$("#next").css('transform', 'rotate(180deg)');
		}

		if (number === 3){
			$(".slide3").slideUp();
			$(".menu3").removeClass('current');
			$(".slide0").slideDown();
			$(".menu0").addClass('current');
			$("#next").css('transform', 'rotate(0deg)');

			number = -1;
		}

		number += 1;
	});

	$(".menu0").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu0").addClass('current');
		$(".slide0").slideDown();

		number = 0;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu1").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu1").addClass('current');
		$(".slide1").slideDown();

		number = 1;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu2").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu2").addClass('current');
		$(".slide2").slideDown();

		number = 2;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu3").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu3").addClass('current');
		$(".slide3").slideDown();

		number = 3;

		$("#next").css('transform', 'rotate(180deg)');
	});

  $(".menu4").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu4").addClass('current');
		$(".slide4").slideDown();

		number = 4;

		$("#next").css('transform', 'rotate(180deg)');
	});

  $(".menu5").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu5").addClass('current');
		$(".slide5").slideDown();

		number = 5;

		$("#next").css('transform', 'rotate(180deg)');
	});
});







// Search-bar-Shop page

$(document).ready(function() {

  var jobCount = $('.list .in').length;
  $('.list-count').text(jobCount + ' items');
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    var listItem = $('.list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
    //extends :contains to be case insensitive
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array)
      {
        return (elem.textContent || elem.innerText || '').toLowerCase()
        .indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });
    
    
    $(".list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $(".list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
    var jobCount = $('.list .in').length;
    $('.list-count').text(jobCount + ' items');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('.list').addClass('empty');
    }
    else {
      $('.list').removeClass('empty');
    }
    
  });
                    
});


// popup-delay

setTimeout(function() {
  document.querySelector(".bts-popup").classList.add("is-visible");
}, 5000);

let closebtn = document.querySelector(".bts-popup-close");

closebtn.addEventListener("click", (event) => {

  document.querySelector(".bts-popup").classList.remove("is-visible");

})

//open popup
$('.bts-popup-trigger').on('click', function(event){
  event.preventDefault();
  $('.bts-popup').addClass('is-visible');
});
	
//close popup
$('.bts-popup').on('click', function(event){
  if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
    event.preventDefault();
    $(this).removeClass('is-visible');
  }
});
//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
    if(event.which=='27'){
      $('.bts-popup').removeClass('is-visible');
    }
});

