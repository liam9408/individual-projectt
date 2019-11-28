//change the nav bar from transparent to solid - vice versa
$(document).ready(function () {
  $(window).scroll(function () { // check if scroll event happened
    if ($(document).scrollTop() >= 50) { // check if user scrolled more than 50 from top of the browser window
      $('.navbar').toggleClass('scrolled',$(this).scrollTop() > $('.nav').height());
      // $('.navbar').removeClass('bg-light');
      // $('.navbar').css('background-color', 'white');
      // $('.navbar-brand').css('color', 'black !important');
      // $('.nav-item').css('color', 'black !important');
      $('#navbar').removeClass('navbar');
      $('#navbar').addClass('navbar-scrolled');
      $('#navbar-brand').removeClass('navbar-brand');
      $('#navbar-brand').addClass('navbar-brand-scrolled');
      $('.navitem').css('color', 'black');
      $('.navbar-toggler').css('border-color', 'black');
      $('.navbaricon').css('color', 'black');
      $('#btn-outline1').removeClass('btn-outline1');
      $('#btn-outline1').addClass('btn-outline1-scrolled');

    } else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
      // // $('.navbar').removeClass('solid');
      // $('.navbar-brand').removeClass('navbar-brandActive');
      // $('.navbar').css('background-color', 'transparent');
      // $('.navbar-brand').css('color', 'white');
      // $('.nav-item').css('color', 'white');
      // $('.btn-outline1').css('background-color', 'transparent');
      $('#navbar').removeClass('navbar-scrolled');
      $('#navbar').addClass('navbar');
      $('#navbar-brand').removeClass('navbar-brand-scrolled');
      $('#navbar-brand').addClass('navbar-brand');
      $('.navitem').css('color', 'white');
      $('.navbar-toggler').css('border-color', 'white');
      $('.navbaricon').css('color', 'white');
      $('#btn-outline1').removeClass('btn-outline1-scrolled');
      $('#btn-outline1').addClass('btn-outline1');

      // $('.nav-link').addClass('whiteNav');
    }
  });
});


// let imageBox = $('.box');
// let projName = $('.project-name');
//   // console.log(imageBox);
//   // console.log(projName);
// $(imageBox).hover(function() {
//   $(projName).css('transform', 'translateY: 30%')
// }

// $('box').hover(
//   function() {
//     $('box').append($('<h2 class="project-name">lorem ipsum</h2>') );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
 
let imageBox = $('.image-container');
let gridRow = $('.grid-row');
let projName = $('.project-name');

// for (var i = 0; i < imageBox.length; i++) {
//     $(imageBox[i]).mouseover(function() {
//       $(projName[i]).css('color', '#0064EB');
//       })
//       .mouseout(function() {
//         $(projName[i]).css('color', 'white');
//       });
//     }


$(imageBox[0]).mouseover(function() {
    $(projName[0]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[0]).css('color', 'white');
  });

$(imageBox[1]).mouseover(function() {
    $(projName[1]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[1]).css('color', 'white');
  });

$(imageBox[2]).mouseover(function() {
    $(projName[2]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[2]).css('color', 'white');
  });

$(imageBox[3]).mouseover(function() {
    $(projName[3]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[3]).css('color', 'white');
  });

$(imageBox[4]).mouseover(function() {
    $(projName[4]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[4]).css('color', 'white');
  });  

$(imageBox[5]).mouseover(function() {
    $(projName[5]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[5]).css('color', 'white');
  });  

$(imageBox[6]).mouseover(function() {
    $(projName[6]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[6]).css('color', 'white');
  });  

$(imageBox[7]).mouseover(function() {
    $(projName[7]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[7]).css('color', 'white');
  });  

$(imageBox[8]).mouseover(function() {
    $(projName[8]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[8]).css('color', 'white');
  });  
  
$(imageBox[9]).mouseover(function() {
    $(projName[9]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[9]).css('color', 'white');
  });  

$(imageBox[10]).mouseover(function() {
    $(projName[10]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[10]).css('color', 'white');
  });  

$(imageBox[11]).mouseover(function() {
    $(projName[11]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[11]).css('color', 'white');
  });  

$(imageBox[12]).mouseover(function() {
    $(projName[12]).css('color', '#0064EB');
  })
  .mouseout(function() {
    $(projName[12]).css('color', 'white');
  });  



  // var proj = a;
  // for (var i = 0; i < imageBox.length; i++) {
  //   switch(imageBox[i]) {
  //     case 0 :
  //       proj = 0;
  //       break;
  //     case 1 :
  //       proj = 1;
  //       break;
  //     case 2 :
  //       proj = 2;
  //       break;
  //     case 3 :
  //       proj = 3;
  //       break;
  //     case 4 :
  //       proj = 4;
  //       break;
  //     case 5 :
  //       proj = 5;
  //     case 6 :
  //       proj = 6;

  // imageBox.mouseover(function() {
  //   for (var i = 0; i < imageBox.length; i++) {
  //     $(imageBox[i]).mouseover(function() {
  //       $(projName[i]).css('color', '#0064EB');
  //     })
  //     .mouseout(function() {
  //       $(projName[i]).css('color', 'white');
  //     });
  //   }
  // }

  ScrollReveal().reveal('.myworktitle, .work-container-fluid, .about-me-title, .about-h2, .about-p, .contact-me-title, .contact-p, .contact-form')

  ScrollReveal().reveal('project-h2, .project-p, .challenge, .project-scope-container, .case-study-image-container, .casestudy-text-container, .casestudy-p-container')