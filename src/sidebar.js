
function createSidebar(){
  let sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  let title = document.createElement('p');
  title.textContent = 'Projects';

  let inputForm = document.createElement('form');
  inputForm.id = 'new-project';
  inputForm.setAttribute('method', 'post');

  let projectName = document.createElement('input');
  projectName.setAttribute('type', 'text');
  projectName.name = 'projectName';
  projectName.id = 'projectID';

  let submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');


  inputForm.appendChild(projectName);
  inputForm.appendChild(submitButton);


  sidebar.appendChild(title);
  sidebar.appendChild(inputForm);
  content.appendChild(sidebar); 

}



export {createSidebar};

