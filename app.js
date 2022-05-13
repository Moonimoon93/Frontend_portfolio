const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //whenever a button is clicked, except the clicked button
    //any other active-btn classes have to be removed.
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentActiveBtn = document.querySelectorAll('.active-btn');
            currentActiveBtn[0].className = currentActiveBtn[0].className.replace(' active-btn','');
            this.className += ' active-btn'
        })
    }
    //section transition as buttons are clicked 
    allSections.addEventListener('click', (event)=>{
        const id = event.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            // event.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTransitions();
