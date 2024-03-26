const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
let konamiCodePosition = 0;


function changeColors() {
    document.body.style.backgroundColor = '#0062FF';
}

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
        konamiCodePosition++;
        
        if (konamiCodePosition === konamiCode.length) {
            changeColors();
            
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});
