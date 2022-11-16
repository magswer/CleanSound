
          const crash = document.querySelector('#crash');
          const bombo = document.querySelector('#bombo');
          const tom1 = document.querySelector('#tom1');
          const tom2 = document.querySelector('#tom2');
          const tom3 = document.querySelector('#tom3');
          const tom4 = document.querySelector('#tom4');
          const hit = document.querySelector('#hit-hat');
          const redoblante = document.querySelector('#redoblante');


          function sound(soundFile){
            const kit = new Audio(soundFile);
            kit.play();
        }
        tom2.addEventListener('click', () => {
            sound("./assets/sounds/tom2.wav");
        });
        tom3.addEventListener('click', () => {
            sound("./assets/sounds/tom3.wav");
        });
        tom4.addEventListener('click', () => {
            sound("./assets/sounds/tom4.wav");
        });
      
        bombo.addEventListener('click', () => {
            sound("./assets/sounds/bombo (1).wav");
        });

        hit.addEventListener('click', () => {
            sound("./assets/sounds/hit-hat.wav");
        });


        tom1.addEventListener('click', () => {
            sound("./assets/sounds/tom1.wav");
        });

        crash.addEventListener('click', () => {
            sound("./assets/sounds/crash.wav");
        });

        redoblante.addEventListener('click', () => {
            sound("./assets/sounds/redoblante.wav");
        });
        
       