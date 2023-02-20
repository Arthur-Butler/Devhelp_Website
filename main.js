// ======================================Firebase JS=======================================================
var firebaseConfig = {
    apiKey: "AIzaSyCPWcauJpBREVKVRn3BmQbNaDaCp0J_eao",
    authDomain: "portfolio-contactform-fb210.firebaseapp.com",
    projectId: "portfolio-contactform-fb210",
    storageBucket: "portfolio-contactform-fb210.appspot.com",
    messagingSenderId: "998740486486",
    appId: "1:998740486486:web:d68cba2791851afc338ef7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//   Referencing my collection
  let Information = firebase.database().ref("devHelp-New Email");



  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  

  function submitForm(e) {
      e.preventDefault();
      
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let subject = document.querySelector(".subject").value;
      let message = document.querySelector(".message").value;

      saveInfomation(name, email, subject, message);
      
  }

  //Saving the information 
  function saveInfomation(name, email, subject, message){
      let Info = Information.push();

      Info.set({
          Name: name,
          email: email,
          subject: subject,
          message: message,

      });

      window.alert("We got your mail, hold tight while we get back to you")
      
  }
// ======================================Firebase JS=======================================================
// ===========================Carousel JS==================================================================

$('.features-car').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
$('.ui-display-car').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})
// ===========================Carousel JS===================================================
