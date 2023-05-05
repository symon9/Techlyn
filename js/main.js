// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I had some issues with my website and reached out to this tech company for support. They were extremely helpful and patient in resolving my problem, and I would definitely use their services again.",
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'Web Designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'I have been using this tech company for several years now to manage my IT infrastructure and they have been phenomenal. Their team is always responsive and knowledgeable, and they have helped my business run smoothly.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'Intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'I hired this tech company for a custom software development project and was extremely pleased with the final product. Their team was great to work with and they delivered exactly what I was hoping for.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'Software Engineer',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'If you are looking for a reliable and efficient tech company, look no further than ABC tech. They offer top-notch services that have completely transformed the way my business operates. From web design to cyber security, they have it all covered! ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
