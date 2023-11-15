const entities = [
  {
    city: 'Rostov-on-Don \n LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    img: './images/first-aparts.png'
  },
  {
    city: 'Sochi \n Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    img: './images/second-aparts.png'
  },
  {
    city: 'Rostov-on-Don \n Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    img: './images/third-aparts.png'
  }
]

const city = document.querySelector('.first__block_property-city');
const area = document.querySelector('.first__block_property-area');
const time = document.querySelector('.first__block_property-time');
const cost = document.querySelector('.first__block_property-cost');
const img = document.querySelector('.second__block-img');
const dott1 = document.getElementById('first-dott');
const dott2 = document.getElementById('second-dott');
const dott3 = document.getElementById('third-dott');
const caption1 = document.getElementById('first-caption');
const caption2 = document.getElementById('second-caption');
const caption3 = document.getElementById('third-caption');

const prev = document.querySelector('.left-btn');
const next = document.querySelector('.right-btn');
const slideCount = 3;
let slideIndex = 0;

prev.addEventListener('click', showPreviousSlide);
next.addEventListener('click', showNextSlide);
dott1.addEventListener('click', () => {
  dott1.style.opacity = 1.0;
  caption1.style.color = '#E3B873';
  caption1.style.textDecoration = 'underline';
  caption1.style.textUnderlineOffset = '6.68px';
  caption2.style.color = 'rgba(255, 255, 255, 0.30)';
  caption2.style.textDecoration = 'none';
  caption3.style.color = 'rgba(255, 255, 255, 0.30)';
  caption3.style.textDecoration = 'none';
  document.getElementsByClassName('dott')[1].style.opacity = 0.3;
  document.getElementsByClassName('dott')[2].style.opacity = 0.3;
  img.src = entities[0].img;
  city.innerText = entities[0].city;
  area.innerText = entities[0].area;
  time.innerText = entities[0].time;
  cost.innerText = entities[0].cost;
  slideIndex = 0;
})

dott2.addEventListener('click', () => {
  dott2.style.opacity = 1.0;
  caption2.style.color = '#E3B873';
  caption2.style.textDecoration = 'underline';
  caption2.style.textUnderlineOffset = '6.68px';
  caption1.style.color = 'rgba(255, 255, 255, 0.30)';
  caption1.style.textDecoration = 'none';
  caption3.style.color = 'rgba(255, 255, 255, 0.30)';
  caption3.style.textDecoration = 'none';
  document.getElementsByClassName('dott')[0].style.opacity = 0.3;
  document.getElementsByClassName('dott')[2].style.opacity = 0.3;
  img.src = entities[1].img;
  city.innerText = entities[1].city;
  area.innerText = entities[1].area;
  time.innerText = entities[1].time;
  cost.innerText = entities[1].cost;
  slideIndex = 1;
})

dott3.addEventListener('click', () => {
  dott3.style.opacity = 1.0;
  caption3.style.color = '#E3B873';
  caption3.style.textDecoration = 'underline';
  caption3.style.textUnderlineOffset = '6.68px';
  caption2.style.color = 'rgba(255, 255, 255, 0.30)';
  caption2.style.textDecoration = 'none';
  caption1.style.color = 'rgba(255, 255, 255, 0.30)';
  caption1.style.textDecoration = 'none';
  document.getElementsByClassName('dott')[0].style.opacity = 0.3;
  document.getElementsByClassName('dott')[1].style.opacity = 0.3;
  img.src = entities[2].img;
  city.innerText = entities[2].city;
  area.innerText = entities[2].area;
  time.innerText = entities[2].time;
  cost.innerText = entities[2].cost;
  slideIndex = 2;
})

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  entities.forEach((slide, index) => {
    if (index === slideIndex) {
      img.src = entities[index].img;

      city.innerText = entities[index].city;
      area.innerText = entities[index].area;
      time.innerText = entities[index].time;
      cost.innerText = entities[index].cost;
      document.getElementsByClassName('dott')[index].style.opacity = 1.0;
      document.getElementsByClassName('second__block-captions-caption')[index].style.textDecoration = 'underline';
      document.getElementsByClassName('second__block-captions-caption')[index].style.color = '#E3B873';
      document.getElementsByClassName('second__block-captions-caption')[index].style.textUnderlineOffset = '6.68px';
    } else {
      document.getElementsByClassName('dott')[index].style.opacity = 0.3;
      document.getElementsByClassName('second__block-captions-caption')[index].style.textDecoration = 'none';
      document.getElementsByClassName('second__block-captions-caption')[index].style.color = 'rgba(255, 255, 255, 0.30)';
      document.getElementsByClassName('second__block-captions-caption')[index].style.textUnderlineOffset = '0px';
    }
  });
}

updateSlider();