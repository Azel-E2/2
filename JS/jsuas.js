window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0 ; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// const card = document.querySelectorAll('card');

//     cards.forEach(card => {
//         card.addEventListener('click', () => {
//             card.classList.toggle('expanded');
//         });
//     });

var i = 0;
var txt = 'Coming soon'; 
var speed = 200; 
var delay = 1500;

      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("Coming-soon").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } 
      }
      setTimeout(typeWriter,delay);

const cards = document.querySelectorAll('.img-card');
const roleImages = document.querySelectorAll('.role-img-item');

document.querySelectorAll('.img-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.img-card,.role-img-item').forEach(el => el.classList.remove('active-img'));
    card.classList.add('active-img');
    document.querySelectorAll('.role-img-item')[index].classList.add('active-img');
  });
});
