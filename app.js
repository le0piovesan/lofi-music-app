window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div')
    const keysascii = ['65', '83', '68', '74', '75', '76']; // A, S, D, J, K, L 

    const colors = [
        '#78d1c5',
        '#d36060',
        '#d360d3',
        '#c7d360',
        '#8ad360',
        '#6260d3'
    ];

    pads.forEach((pad, index) => {
       
    window.addEventListener('keydown', checkKeyPress, false);
        function checkKeyPress(key) {

            if (key.keyCode == keysascii[index]) { 
                sounds[index].currentTime = 0;
                sounds[index].play();
                createBubbles(index);
            }      
        }
    });


    const createBubbles = index => {

        const visuals = document.createElement('div');
        visuals.classList.add('visual');
        
        document.querySelector('.pad'+index).appendChild(visuals);
        
        const bubble = document.createElement('div');
        visuals.appendChild(bubble);
        
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1.5s ease';
        bubble.style.display = 'inline-block';
      
        
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});