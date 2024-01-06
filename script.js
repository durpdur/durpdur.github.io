let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let title_card = document.getElementById('title_card');
let btn = document.getElementById('expbtn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

let backgroundSection = document.querySelector('.background');
let sectionHeight = backgroundSection.offsetHeight / 3;

let topbtn = document.querySelector('.topbtn');

// Adds the parralax effect to the background
// Adds the animation for the topbtn
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = value * 0.7 + 'px';
    moon.style.top = value * 1.5 + 'px';
    moon.style.left = value * 2 + 'px';
    mountains_behind.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    btn.style.marginTop = value * 0.8 + 'px';
    btn.style.marginRight = value + 'px';
    header.style.marginTop = value * 0.5 + 'px';
    title_card.style.marginTop = value * 1.5 + 'px';

    if (value > sectionHeight) {
        topbtn.classList.add('load');
        topbtn.classList.add('show');
    } else {
        topbtn.classList.remove('show');
    }
})

function copyEmailToClipboard() {
    const email = "xingrandu@gmail.com";
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.animation = "slideIn 0.5s forwards";

    setTimeout(function() {
        popup.style.animation = "slideOut 0.5s forwards";

        setTimeout(function() {
            popup.style.display = "none";
        }, 500); 

    }, 2000); 
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(id, duration_in_milli) {
    const aboutSection = document.getElementById(id);
    const targetPosition = aboutSection.offsetTop;
    const startPosition = window.pageYOffset || window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = duration_in_milli;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const ease = easeInOutCubic(progress);
    
        window.scrollTo(0, startPosition + distance * ease);
    
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    requestAnimationFrame(scrollAnimation);
}


 /* Animation for fading in and out */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        } else {
            entry.target.classList.remove('fadeIn');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hiddenRight');
hiddenElements.forEach((el) => observer.observe(el));