import examples from './examples/index';

const htmlEl = document.querySelector('#content');
const navEl = document.querySelector('#nav');


navEl.addEventListener('click', (e) => {
  if (e.target.nodeName === 'LI') {
    htmlEl.innerHTML = examples[e.target.id].template;
  }
});