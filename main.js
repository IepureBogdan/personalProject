console.log('Hello World');

// variables

const socialsButton = document.getElementById('socialsBtn');
let clickCounter = 0;
let resume = document.getElementById('resume');
let facebook = document.getElementById('facebook');
let instagram = document.getElementById('instagram');
let linkedin = document.getElementById('linkedin');
let github = document.getElementById('github');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let rightSide = document.getElementById('rightSide');
let clockWeather = document.getElementById('clockWeather');
let clock = document.getElementById('clock');
let weather = document.getElementById('weather');

// on click animation on social icons

socialsButton.addEventListener('click' , (showSocials) => {
    
    clickCounter++ ; 
    if (clickCounter % 2 == 0) {
        resume.style.animation = 'disapear 0.3s cubic-bezier(.3,.11,.63,1.32) reverse';
        facebook.style.animation = 'disapear 0.6s cubic-bezier(.3,.11,.63,1.32) reverse';
        instagram.style.animation = 'disapear 0.9s cubic-bezier(.3,.11,.63,1.32) reverse';
        linkedin.style.animation = 'disapear 1.2s cubic-bezier(.3,.11,.63,1.32) reverse';
        github.style.animation = 'disapear 1.5s cubic-bezier(.3,.11,.63,1.32) reverse';
        phone.style.animation = 'disapear 1.8s cubic-bezier(.3,.11,.63,1.32) reverse';
        email.style.animation = 'disapear 2.1s cubic-bezier(.3,.11,.63,1.32) reverse';
        
    } else if (clickCounter % 2 == 1) {
        resume.style.animation = 'apear 0.3s cubic-bezier(.3,.11,.63,1.32) forwards';
        facebook.style.animation = 'apear 0.6s cubic-bezier(.3,.11,.63,1.32) forwards'; 
        instagram.style.animation = 'apear 0.9s cubic-bezier(.3,.11,.63,1.32) forwards';        
        linkedin.style.animation = 'apear 1.2s cubic-bezier(.3,.11,.63,1.32) forwards';      
        github.style.animation = 'apear 1.5s cubic-bezier(.3,.11,.63,1.32) forwards';
        phone.style.animation = 'apear 1.8s cubic-bezier(.3,.11,.63,1.32) forwards';
        email.style.animation = 'apear 2.1s cubic-bezier(.3,.11,.63,1.32) forwards';
    }
});


setTimeout(() => {
    rightSide.style.animation = 'rightApear 0.6s ease forwards';
  },3000);


var swiper = new Swiper(".mySwiper", {
    
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  mousewheelControl: true,


});

// clock and weather requests 


// using axios


axios.get('https://api.open-meteo.com/v1/forecast?latitude=46.77&longitude=23.60&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,precipitation_sum,rain_sum,precipitation_probability_max&current_weather=true&timezone=GMT')

.then(temp => {
      console.log(temp);
      let temperature = temp.data.current_weather.temperature;
      weather.innerHTML = `${temperature} °C`
      if (temp.data.daily.precipitation_probability_max[0] < 50) {
        weather.append('🌞');
      }
      else {
        weather.append('💧');
      }
}, err => {
    weather.style.fontSize = '25px'
    weather.innerHTML = 'The sun is in your heart !';
})


//  using fetch 


function getHour() {
  fetch('http://worldtimeapi.org/api/timezone/Europe/Bucharest')
        .then((response) => {
                return response.json()
            })
        .then((hour) => {

                let liveHour = hour.datetime.substr(11, 11);
                
                clock.innerHTML = liveHour.substr(0,8);
                
            })
        .catch((err) => {
          clock.style.fontSize = '25px'
          clock.innerHTML = 'Quit counting time and start making time count !'
        })
}

setInterval(getHour
  , 1000 );
