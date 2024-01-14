function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }else {
        menuBtn.className = "nav-menu"
    }
}

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})



const section = document.querySelectionAll('section[id]')
function scrollActive(){
    const scrollY = window.scrollY;
    SpeechRecognitionResult.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)

























