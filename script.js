/* toogle icon navbar */
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
};


// scroll section active link
let sections =document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top=> offset && top< offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']').classList.add('active');
            });
        };
    });
    /* sticky navbar */
    let header= document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY > 100);
    /* remove toogle icon and navbar when click navbar link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/** scrollreveal */
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right'});

/** typedjs */
const typed= new Typed('.multiple-text',{
    strings:['Frontend Developer.','Java Developer.','Cloud Engineer.'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function myFunction(){
    var x = document.getElementById("cloud");
    if(x.style.display==="none"){
        x.style.display ="block";
    }else{
        x.style.display ="none" ;
    }
}
function myFunctionj(){
    var x = document.getElementById("java");
    if(x.style.display==="none"){
        x.style.display ="block";
    }else{
        x.style.display ="none" ;
    }
}
function myFunctionw(){
    var x = document.getElementById("web");
    if(x.style.display==="none"){
        x.style.display ="block";
    }else{
        x.style.display ="none" ;
    }
}