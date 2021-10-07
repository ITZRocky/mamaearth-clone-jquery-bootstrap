$('.owl-carousel.wool1').owlCarousel({
  loop:true,
  dots:false,
  margin:10,
  autoplay:true,
  autoplayTimeout:2500,
  autoplayHoverPause:true,
  nav:false,
  animateOut:'fadeOut',
  responsive:{
      0:{
          items:1,
          stagePadding:0
          
      },
      600:{
          items:2,
          stagePadding:0
         
      },
      1000:{
          items:1,
      }
      
  }
})

$('.owl-carousel.wool').owlCarousel({
    loop:true,
    dots:true,
    margin:30,
    nav:false,
    stagePadding:30,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            stagePadding:22,
            margin:0
            
        },
        600:{
            items:2,
            stagePadding:30,
            margin:150
           
        },
        1000:{
            items:3,
            margin:0,
            stagePadding:15
        },
        1200:{
          margin:0,
          items:3,
          stagePadding:150,
        }
    }
})




// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     loop:true,
//     dots:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     nav:false,
//     animateOut:'fadeOut',
//     responsive:{
//         0:{
//             items:1,
//             stagePadding:0
            
//         },
//         600:{
//             items:2,
//             stagePadding:0
           
//         },
//         1000:{
//             items:1,
//         }
//     }
// })

// $('.owl-carousel img').on('mouseover',function(e){
//     owl.trigger('stop.owl.autoplay');
// })
// $('.owl-carousel img').on('mouseleave',function(e){
//     owl.trigger('play.owl.autoplay');
// })

for(let i=0;i<=3;i++){
    var toastTrigger = document.getElementById(`liveToastBtn${i}`)
    var toastLiveExample = document.getElementById(`liveToast${i}`)
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
      })
    }
    }
    
    
    
    
    // for(let j=0;j<=6;j++){
    // var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    // var alertTrigger = document.getElementById(`liveAlertBtn${j}`)
    
    // function alert(message, type) {
    //   var wrapper = document.createElement('div')
    //   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" aria-label="Close"></button></div>'
    
    //   alertPlaceholder.append(wrapper)
      
    // }
    
    
    // if (alertTrigger) {
      
    //   alertTrigger.addEventListener('click', function () {
    //     alert(`${j}please comeback later!`, 'success')
    //     $(".alert").delay(1000).slideUp(200, function() {
    //       $(this).alert.hide();
    //   });
    //   })
    // }
    // }
    
    for(j=0;j<=6;j++){
    $(document).ready(function(){
    $('.butt').click(function(){
      $('#liveAlertPlaceholder').show('fade');
    
      setTimeout(function(){
        $('#liveAlertPlaceholder').hide('fade');
      },3000)
    });
    
    
    });
    }
    


    $(document).ready(function(){
      $('.counter').counterUp({
        delay: 10,
        time: 1200
      });
    });
   
    
    