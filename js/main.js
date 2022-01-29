let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app, {loop: true, delay:75});

typewriter
.typeString('La capital del software')
.pauseFor(200)
.start();