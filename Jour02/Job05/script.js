window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.clientHeight;
    var scrolled = window.scrollY;
    var scrollPercent = (scrolled / (fullHeight - windowHeight)) * 100;
    
    var footer = document.querySelector('footer');
    footer.style.backgroundColor = getColor(scrollPercent);
});

function getColor(percentage) {
    var hue = ((percentage / 100) * 120).toString(10);
    return 'hsl(' + hue + ', 100%, 50%)';
}
