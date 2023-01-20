let feature = document.querySelectorAll('.feature');
let workImg = document.querySelector('.work-img');
let galleryImg = document.querySelectorAll('.gallery img');
let teamCover = document.querySelector('.ourteam video');
let loading = document.querySelector('.loading');


//Scroll Animate 
window.addEventListener('scroll', checkBoxes);
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    

    //object to automatically push new variables to an array when they are declared
    let vars = [];
    const data = {
        _data: {},
        get variable() {
            return this._data;
        },
        set variable(newvalue){
            vars.push(newvalue);
            this._data = newvalue
        }
    };
    //Push All Variables
    data.variable = feature;
    data.variable = workImg;
    data.variable = galleryImg;

    
    vars.forEach(_var => {
        if (_var.length > 1) {
            var time = 0;
                _var.forEach(item => {
                    setTimeout(function() {
                        const boxTop = item.getBoundingClientRect().top
    
                        if(boxTop < triggerBottom) {
                            item.classList.add('show')
                        } else {
                            item.classList.remove('show')
                        }
                    }, time += 200)
                    
                })
                time=0
            
        } else {
            const boxTop = _var.getBoundingClientRect().top;

            if(boxTop < triggerBottom) {
                _var.classList.add('show')
            } else {
                _var.classList.remove('show')
            }
        }
        
    })

}





// Background 
(async () => {
    await loadStarsPreset(tsParticles); 

    await tsParticles.load("tsparticles", {
    preset: "stars",
    });
})();

// Move cover
window.addEventListener('scroll', function(){
    let windowPos = window.pageYOffset;
    let eleMove = teamCover.getBoundingClientRect();

    if(windowPos > eleMove.top){
        teamCover.style.transform = `translateY(${eleMove.top * 0.2}px)`;
    }
})

//loading
/**
    window.addEventListener('load', function(){
        loading.style.display = 'none';
    })
 */
setTimeout(function(){
    loading.style.display = 'none';
}, 4000)
