import examples from './examples/index';

const htmlEl = document.querySelector('#content');
const navEl = document.querySelector('#nav');


const currentID = window.location.hash.replace('#', '');

if (currentID) {
  htmlEl.innerHTML = examples[currentID].template;
}

navEl.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    htmlEl.innerHTML = examples[e.target.id].template;
  }
});