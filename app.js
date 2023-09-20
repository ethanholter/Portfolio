const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitons() {
    
    // Active button switching
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })        
    }

    // Active section switching
    allSections.addEventListener('click', (e) => { 
        const id = e.target.dataset.id;
        if (id) {
            //scroll to the section with the corresponding id
            
        }
    })
    // allSections.forEach((section) => {

    // })
}





PageTransitons();
