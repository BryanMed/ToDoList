import './style.css'
import { createHeader } from './header';
import { createSidebar, sidebar } from './sidebar';

createHeader();
createSidebar();

const projects = [];

function projectSubmit() {
  let projectForm = document.querySelector('#new-project');

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const project = Object.fromEntries(formData);

    createProject(project['projectName']);
    console.log(projects);

  });
}

function createProject(projectName) {

  let project = {
    'projectName': projectName,
    tasks:{}
  };
  projects.push(project);
}


projectSubmit()


