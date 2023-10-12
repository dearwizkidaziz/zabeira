var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1
    }
}, 5000);

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.heading',{origin: 'top'});
sr.reveal('.about',{origin: 'bottom'});
sr.reveal('.service',{origin: 'top'});
sr.reveal('.portofolio',{origin: 'left'});
sr.reveal('.contactme',{origin: 'right'});
sr.reveal('.end-section',{origin: 'top'});
