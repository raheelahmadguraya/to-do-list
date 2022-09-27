class View {
  constructor() {
    this._initLocalListeners()
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get _projectTitle() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = '';
  }

  displayProjects(projects) {
    //delete all nodes
    const projectListSection = document.getElementsByClassName('projectList')[0]

    while (projectListSection.firstChild) {
      projectListSection.removeChild(projectListSection.firstChild)
    }

    if (projects.length === 0) {

      document.getElementById('addProject-modal').style.display = 'grid'

    } else {
      projects.forEach(project => {

        const button = this.createElement('button')
        button.id = project.pid
        button.classList.add('selectProject-button')
        const buttonText = this.createElement('p')
        buttonText.innerHTML = project.title
        button.append(buttonText)

        if(project.current) {
          button.classList.add('currentProject')
          this.displaySelectedProject(project)
        }

        projectListSection.append(button);

      })
    }
  }

  displaySelectedProject(project) {
    const projectTitleSection = document.getElementsByClassName('project-title')[0]

    const projectTitleDisplay = this.createElement('h1')
    projectTitleDisplay.innerHTML = project.title
    projectTitleSection.append(projectTitleDisplay)

    const projectDueDateSection = document.getElementsByClassName('project-dueDate')[0]

    const projectDueDateDisplay = this.createElement('h4')
    projectDueDateDisplay.innerHTML = 'Due:' + project.dueDate
    projectDueDateSection.append(projectDueDateDisplay)

    const projectDescriptionSection = document.getElementsByClassName('project-details')[0]

    const projectDescriptionDisplay = this.createElement('p')
    projectDescriptionDisplay.innerHTML = project.description
    projectDescriptionSection.append(projectDescriptionDisplay)

    this.displayTodos(project)
  }

  displayTodos(project) {

    let toDoListSection = document.getElementsByClassName("todo-list")[0];
    toDoListSection.innerHTML = '';

    for (const toDo of (project.todos)){
      let toDoTask = document.createElement('div');
      toDoTask.classList.add("todo");
      let toDoPriority = document.createElement('div');
      toDoPriority.classList.add("todo-priority");
      toDoPriority.classList.add(toDo.priority);
      let toDoTitle = document.createElement('div');
      toDoTitle.classList.add("todo-title");
      toDoTitle.innerHTML = '<h4>' + toDo.title + '</h4>'
      let toDoDueDate = document.createElement('div');
      toDoDueDate.classList.add("todo-dueDate");
      toDoDueDate.innerHTML = '<p>' + 'Due:' + toDo.dueDate + '</p>'
      const toDoFunctions = document.getElementsByClassName("todo-functions")[0];
      const toDoFunctionsClone = toDoFunctions.cloneNode(true);

      toDoTask.appendChild(toDoPriority);
      toDoTask.appendChild(toDoTitle);
      toDoTask.appendChild(toDoDueDate);
      toDoTask.appendChild(toDoFunctionsClone);
      toDoListSection.appendChild(toDoTask);
    }
  }

  _initLocalListeners() {
    const addProjectButton = document.getElementById('addProject-button')
    const editProjectButton = document.getElementById('editProject-button')
    const deleteProjectButton = document.getElementById('deleteProject-button')

    const closeBtns = document.getElementsByClassName('closeBtn')
      for(const closeBtn of closeBtns) { 
        closeBtn.addEventListener('click', () => {
        document.getElementById('addProject-modal').style.display = 'none'
        document.getElementById('editProject-modal').style.display = 'none'
      })
    }

    window.addEventListener('click', (event) => {
      if (event.target == document.getElementById('addProject-modal') ||event.target == document.getElementById('editProject-modal')){
        document.getElementById('addProject-modal').style.display = 'none'
        document.getElementById('editProject-modal').style.display = 'none'
      }
    })

    addProjectButton.addEventListener('click', event => {
      document.getElementById('addProject-modal').style.display = 'grid'
    })
    editProjectButton.addEventListener('click', event => {
      document.getElementById('editProject-modal').style.display = 'grid'
    })
    deleteProjectButton.addEventListener('click', event => {
      document.getElementById('deleteProject-modal').style.display = 'grid'
    })

  }

  bindAddProject(handler) {
    const form = new FormData(form);
    this.form.addEventListener('submit', event => {
      event.preventDefault()

    })
  }

}
export { View }