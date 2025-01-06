document.addEventListener('DOMContentLoaded', function(){

    const menuT = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
   
    menuT.addEventListener('click', function () {

        navLinks.classList.toggle('active');

        const icon = menuT.querySelector('i');

        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-x');


    });


});


document.querySelector(".btn-outline").addEventListener("click", (e) => {
    e.preventDefault(); 
  
    const target = document.querySelector(".hero-badge"); 
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" }); 
    }
  });
  