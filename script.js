document.addEventListener('keydown', (e) => {
    if (e.code == "KeyA") { //event.code property represents physical key on keyboard == to the code value for keyboard event, placed in ""
      document.getElementById('boom').play(); //.play() method begins playback of audio
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyS") { 
      document.getElementById('clap').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyD") {
      document.getElementById('hihat').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyF") {
      document.getElementById('kick').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyG") {
      document.getElementById('openhat').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyH") {
      document.getElementById('ride').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyJ") {
      document.getElementById('snare').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyK") {
      document.getElementById('tink').play();
      }
    });
    
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyL") {
      document.getElementById('tom').play();
      }
    });