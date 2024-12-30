const stars = document.querySelectorAll(".star");
const defaultRatingIndex = 4;

// setting the rating 
stars.forEach( (star) =>{
  star.addEventListener('click' ,()=>{
    star.classList.add("selected")
  } )
})

// //check if the star is already selected

// const checkSelectedStar = (star) => {
//   if (parseInt(star.getAttribute("data-rate")) === currentRatingIndex) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const setRating = (index) => {
//   stars.forEach((star) =>{
//     // add event listener to each star 

//     star.addEventListener("click" , ()=>{
//       //add selected class to clicked stars

//       star.classList.add("selected")
//     })
//   })
//   if (index > 0 && index <= stars.length) {
//     document
//       .querySelector('[data-rate="' + index + '"]').classList.add("selected");
      
//   }
  

// };

// const resetRating = () => {
//   currentRatingIndex = defaultRatingIndex;
//   setRating(defaultRatingIndex);
// };

// stars.forEach((star) => {
//   star.addEventListener("click", function () {
//     if (checkSelectedStar(star)) {
//       resetRating();
//       return;
//     }
//     const index = parseInt(star.getAttribute("data-rate"));
//     currentRatingIndex = index;
//     setRating(index);
//   });


//   // stars.forEach((star) =>{
//   //   star.addEventListener("mouseover", () => star.classList.add("selected"))
//   // })

//   star.addEventListener("mouseover", function () {
//     const index = parseInt(star.getAttribute("data-rate"));
//     setRating(index);
//   });

//   star.addEventListener("mouseout", function () {
//     setRating(currentRatingIndex);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   setRating(defaultRatingIndex);
// }); 

const btn=document.querySelector('.btn-haut');
btn.addEventListener("click", function () {
  window.scrollTo (
{
    top: 0,
    left: 0,
    behavior: "smooth"
}  
  )
})
let commande1 = document.getElementById('btn1');
commande1.addEventListener('click', ()=> {
    commande1.classList.toggle("active");
    if(commande1.classList.contains("active")){

      commande1.innerHTML="Commandé(e)"
  }
  else {
      commande1.innerHTML="Commander"
  }
   
});


// let commande2 = document.getElementById('btn2');
// commande2.addEventListener('click', ()=> {
//     commande2.classList.toggle("active");
//     if(commande2.classList.contains("active")){

//       commande2.innerHTML="Commandé(e)"
//   }
//   else {
//       commande2.innerHTML="Commander"
//   }
   
// });

// let commande3 = document.getElementById('btn3');
// commande3.addEventListener('click', ()=> {
//     commande3.classList.toggle("active");
//     if(commande3.classList.contains("active")){

//       commande3.innerHTML="Commandé(e)"
//   }
//   else {
//       commande3.innerHTML="Commander"
//   }
   
// });



// let commande4 = document.getElementById('btn4');
// commande4.addEventListener('click', ()=> {
//     commande4.classList.toggle("active");
//     if(commande4.classList.contains("active")){

//       commande4.innerHTML="Commandé(e)"
//   }
//   else {
//       commande4.innerHTML="Commander"
//   }
   
// });

// let commande5 = document.getElementById('btn5');
// commande5.addEventListener('click', ()=> {
//     commande5.classList.toggle("active");
//     if(commande5.classList.contains("active")){

//       commande5.innerHTML="Commandé(e)"
//   }
//   else {
//       commande5.innerHTML="Commander"
//   }
   
// });


// let commande6 = document.getElementById('btn6');
// commande6.addEventListener('click', ()=> {
//     commande6.classList.toggle("active");
//     if(commande6.classList.contains("active")){

//       commande6.innerHTML="Commandé(e)"
//   }
//   else {
//       commande6.innerHTML="Commander"
//   }
   
// });



// let commande7 = document.getElementById('btn7');
// commande7.addEventListener('click', ()=> {
//     commande7.classList.toggle("active");
//     if(commande7.classList.contains("active")){

//       commande7.innerHTML="Commandé(e)"
//   }
//   else {
//       commande7.innerHTML="Commander"
//   }
   
// });

// let commande8 = document.getElementById('btn8');
// commande8.addEventListener('click', ()=> {
//     commande8.classList.toggle("active");
//     if(commande8.classList.contains("active")){

//       commande8.innerHTML="Commandé(e)"
//   }
//   else {
//       commande8.innerHTML="Commander"
//   }
   
// });

// let commande9 = document.getElementById('btn9');
// commande9.addEventListener('click', ()=> {
//     commande9.classList.toggle("active");
//     if(commande9.classList.contains("active")){

//       commande9.innerHTML="Commandé(e)"
//   }
//   else {
//       commande9.innerHTML="Commander"
//   }
   
// });

// let commande10 = document.getElementById('btn10');
// commande10.addEventListener('click', ()=> {
//     commande10.classList.toggle("active");
//     if(commande10.classList.contains("active")){

//       commande10.innerHTML="Commandé(e)"
//   }
//   else {
//       commande10.innerHTML="Commander"
//   }
   
// });


// let commande11 = document.getElementById('btn11');
// commande11.addEventListener('click', ()=> {
//     commande11.classList.toggle("active");
//     if(commande11.classList.contains("active")){

//       commande11.innerHTML="Commandé(e)"
//   }
//   else {
//       commande11.innerHTML="Commander"
//   }
   
// });


// let commande12 = document.getElementById('btn12');
// commande12.addEventListener('click', ()=> {
//     commande12.classList.toggle("active");
//     if(commande12.classList.contains("active")){

//       commande12.innerHTML="Commandé(e)"
//   }
//   else {
//       commande12.innerHTML="Commander"
//   }
   
// });

// let commande13 = document.getElementById('btn13');
// commande13.addEventListener('click', ()=> {
//     commande13.classList.toggle("active");
//     if(commande13.classList.contains("active")){

//       commande13.innerHTML="Commandé(e)"
//   }
//   else {
//       commande13.innerHTML="Commander"
//   }
   
// });

// let commande14 = document.getElementById('btn14');
// commande14.addEventListener('click', ()=> {
//     commande14.classList.toggle("active");
//     if(commande14.classList.contains("active")){

//       commande14.innerHTML="Commandé(e)"
//   }
//   else {
//       commande14.innerHTML="Commander"
//   }
   
// });


// let commande15 = document.getElementById('btn15');
// commande15.addEventListener('click', ()=> {
//     commande15.classList.toggle("active");
//     if(commande15.classList.contains("active")){

//       commande15.innerHTML="Commandé(e)"
//   }
//   else {
//       commande15.innerHTML="Commander"
//   }
   
// });


// let commande16 = document.getElementById('btn16');
// commande16.addEventListener('click', ()=> {
//     commande16.classList.toggle("active");
//     if(commande16.classList.contains("active")){

//       commande16.innerHTML="Commandé(e)"
//   }
//   else {
//       commande16.innerHTML="Commander"
//   }
   
// });


// let commande17 = document.getElementById('btn17');
// commande17.addEventListener('click', ()=> {
//     commande17.classList.toggle("active");
//     if(commande17.classList.contains("active")){

//       commande17.innerHTML="Commandé(e)"
//   }
//   else {
//       commande17.innerHTML="Commander"
//   }
   
// });


// let commande18= document.getElementById('btn18');
// commande18.addEventListener('click', ()=> {
//     commande18.classList.toggle("active");
//     if(commande18.classList.contains("active")){

//       commande18.innerHTML="Commandé(e)"
//   }
//   else {
//       commande18.innerHTML="Commander"
//   }
   
// });


// let commande19 = document.getElementById('btn19');
// commande19.addEventListener('click', ()=> {
//     commande19.classList.toggle("active");
//     if(commande19.classList.contains("active")){

//       commande19.innerHTML="Commandé(e)"
//   }
//   else {
//       commande19.innerHTML="Commander"
//   }

// });

