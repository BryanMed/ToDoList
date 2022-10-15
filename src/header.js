import Icon from './images/clipboard.svg';

function createHeader(){
  let content = document.querySelector('#content');
  let header = document.createElement('header');
  let icon = document.createElement('img');
  icon.src = Icon;

  let text = document.createElement('p');
  text.textContent = 'Todo List';

  header.appendChild(icon);
  header.appendChild(text);
  content.appendChild(header);
}

export {createHeader};