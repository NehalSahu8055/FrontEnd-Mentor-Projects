// const navbar = document.querySelector('nav'),
//       ham = document.querySelector('.hamburger'),
//       hamDropDown=document.querySelector('.ham__dropdown'),
//       logoWrapper = document.querySelector('.logo__wrapper'),
//       nav = document.querySelector('nav'),
//       header = document.querySelector('header'),
//       lbtn = document.querySelector('#l-btn'),
//       rbtn = document.querySelector('#r-btn'),
//       contentFirst = document.querySelector('.main__content-shop-1'),
//       contentSecond = document.querySelector('.main__content-shop-2'),
//       contentThird = document.querySelector('.main__content-shop-3'),
//       picFirst = document.querySelector('.pic-1'),
//       picSecond = document.querySelector('.pic-2'),
//       picThird = document.querySelector('.pic-3');


//       // Nav Toggling Handling
//       ham.addEventListener('click', () => {

//       hamDropDown.classList.toggle('max-lg:hidden'),
//       // logoWrapper.classList.toggle('hidden');
//       nav.classList.toggle('active');
//       header.classList.toggle('active');
//         // Aria Handling
//       "false" === ham.getAttribute("aria-expanded") ? ham.setAttribute("aria-expanded", "true") : ham.setAttribute("aria-expanded", "false")
    
//     });


//     // Slider Control Handling

//     // Right Control
//     rbtn.addEventListener('click',() => {
//       contentSecond.classList.toggle('hidden');
//       contentFirst.classList.toggle('hidden');

//       picSecond.classList.toggle('hidden');
//       picFirst.classList.toggle('hidden');

//     })

//     // Left Control
//     lbtn.addEventListener('click',() => {
//       contentThird.classList.toggle('hidden');
//       contentFirst.classList.toggle('hidden');

//       picThird.classList.toggle('hidden');
//       picFirst.classList.toggle('hidden');

//     })

//     // Navbar fixed
//     window.onscroll = () => {
//       if (window.scrollY > 100) {
//         navbar.classList.add('nav-active');
//       } else {
//         navbar.classList.remove('nav-active');
//       }
//     };