import uncheck from '../assets/uncompletedTask.png'
import check from '../assets/completedTask.png'

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
        button.classList.add('selectProjectButton')
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
    projectTitleSection.innerHTML = ''

    const projectTitleDisplay = this.createElement('h1')
    projectTitleDisplay.innerHTML = project.title
    projectTitleSection.append(projectTitleDisplay)

    const projectDueDateSection = document.getElementsByClassName('project-dueDate')[0]
    projectDueDateSection.innerHTML = ''

    const projectDueDateDisplay = this.createElement('h4')
    projectDueDateDisplay.innerHTML = 'Due:' + project.dueDate
    projectDueDateSection.append(projectDueDateDisplay)

    const projectDescriptionSection = document.getElementsByClassName('project-details')[0]
    projectDescriptionSection.innerHTML = ''

    const projectDescriptionDisplay = this.createElement('p')
    projectDescriptionDisplay.innerHTML = project.description
    projectDescriptionSection.append(projectDescriptionDisplay)

    this.displayTodos(project)
  }

  displayTodos(project) {

    let toDoListSection = document.getElementsByClassName("todoList")[0];
    toDoListSection.innerHTML = '';

    for (const toDo of (project.todos)){
      let toDoTask = document.createElement('div');
      toDoTask.id = toDo.tid
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
      const toDoFunctions = document.getElementsByClassName('todo-functions')
      const buttonsTemplate = toDoFunctions[toDoFunctions.length-1]
      const toDoFunctionsClone = buttonsTemplate.cloneNode(true);


      let toggleButton = document.createElement('button')
      toggleButton.classList.add('todo-button')
      toggleButton.classList.add('markTaskComplete-button')
      toggleButton.setAttribute("title","Mark task complete")
      if(toDo.complete == true) {
        toDoTitle.innerHTML = '<h4><s>' + toDo.title + '</s></h4>'
        let completeIcon = document.createElement('img')
        completeIcon.classList.add('completeTask')
        completeIcon.src = check
        toggleButton.innerHTML =''
        toggleButton.appendChild(completeIcon)
      } 
      else if (toDo.complete == false) {
        toDoTitle.innerHTML = '<h4>' + toDo.title + '</h4>'
        let notCompleteIcon = document.createElement('img')
        notCompleteIcon.classList.add('completeTask')
        notCompleteIcon.src = uncheck
        toggleButton.innerHTML =''
        toggleButton.appendChild(notCompleteIcon)
      }

      toDoFunctionsClone.prepend(toggleButton)


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

    const closeBtns = document.getElementsByClassName('closeBtn')
      for(const closeBtn of closeBtns) { 
        closeBtn.addEventListener('click', () => {
        document.getElementById('addProject-modal').style.display = 'none'
        document.getElementById('editProject-modal').style.display = 'none'
        document.getElementById('addTodo-modal').style.display = 'none'
        document.getElementById('editTodo-modal').style.display = 'none'
      })
    }

    window.addEventListener('click', (event) => {
      if (event.target == document.getElementById('addProject-modal') 
      ||event.target == document.getElementById('editProject-modal') 
      || event.target == document.getElementById('addTodo-modal') 
      || event.target == document.getElementById('editTodo-modal'))
      {

        document.getElementById('addProject-modal').style.display = 'none'
        document.getElementById('editProject-modal').style.display = 'none'
        document.getElementById('addTodo-modal').style.display = 'none'
        document.getElementById('editTodo-modal').style.display = 'none'

      }
    })

    addProjectButton.addEventListener('click', event => {
      document.getElementById('addProject-modal').style.display = 'grid'
    })
    editProjectButton.addEventListener('click', event => {
      document.getElementById('editProject-modal').style.display = 'grid'

      const projectTitleSection = document.getElementsByClassName('project-title')[0]
      const projectDescriptionSection = document.getElementsByClassName('project-details')[0]
      const projectDueDateSection = document.getElementsByClassName('project-dueDate')[0]
      const editProjectTitle = document.getElementById('editProjectTitle')
      const editProjectDescription = document.getElementById('editProjectDescription')
      const editProjectDueDate = document.getElementById('editProjectDueDate')

      editProjectTitle.setAttribute("value", projectTitleSection.firstChild.innerHTML)
      editProjectDescription.innerHTML = (projectDescriptionSection.firstChild.innerHTML)
      editProjectDueDate.setAttribute("value", projectDueDateSection.firstChild.innerHTML.replace('Due:',''))
    })

    const addTodoButton = document.getElementById('addTodo-button')

    addTodoButton.addEventListener('click', event =>{
      document.getElementById('addTodo-modal').style.display = 'grid'
    })
  }

  bindAddProject(handler) {
    const form = document.getElementById('addProjectForm');
    form.addEventListener('submit', event => {
      event.preventDefault()

      let formData = new FormData(form)
      const project = Object.fromEntries(formData.entries());
      form.reset()
      document.getElementById('addProject-modal').style.display = 'none'
      handler(project)
    })
  }

  bindSelectProject(handler) {
    const projectSBList = document.getElementsByClassName('projectList')[0]
    
    projectSBList.addEventListener('click', (event) =>{
      const selectProject = event.target.closest('.selectProjectButton')
      if(selectProject) {
        if (document.getElementsByClassName('currentProject')[0]){
          const currentProject = document.getElementsByClassName('currentProject')[0]
          currentProject.classList.remove('currentProject')
          selectProject.classList.add('currentProject')
          handler(selectProject.id, currentProject.id)
        }else{
          selectProject.classList.add('currentProject')
          handler(selectProject.id)
        }
      }
    })
  }

  bindDeleteProject(handler) {
    const deleteBtn = document.getElementById('deleteProject-button')

    deleteBtn.addEventListener('click', event => {
      const toDoListSection = document.getElementsByClassName("todoList")[0];
      toDoListSection.innerHTML = '';
  
      const projectTitleSection = document.getElementsByClassName('project-title')[0]
      projectTitleSection.innerHTML = ''
  
      const projectDueDateSection = document.getElementsByClassName('project-dueDate')[0]
      projectDueDateSection.innerHTML = ''
  
      const projectDescriptionSection = document.getElementsByClassName('project-details')[0]
      projectDescriptionSection.innerHTML = ''

      const currentProject = document.getElementsByClassName('currentProject')[0]
      const pid = currentProject.id
      handler(pid)
    })
  }

  bindEditProject(handler) {
    const form = document.getElementById('editProjectForm');
    form.addEventListener('submit', event => {
      event.preventDefault()

      let formData = new FormData(form)
      const project = Object.fromEntries(formData.entries());
      const currentProject = document.getElementsByClassName('currentProject')[0]
      const pid = currentProject.id
      form.reset()
      document.getElementById('editProject-modal').style.display = 'none'

      handler(pid, project)
    })
  }

  bindAddTodo(handler) {
    const form = document.getElementById('addTodoForm');
    form.addEventListener('submit', event => {
      event.preventDefault()

      let formData = new FormData(form)
      const todo = Object.fromEntries(formData.entries());
      const currentProject = document.getElementsByClassName('currentProject')[0]
      const pid = currentProject.id
      form.reset()
      document.getElementById('addTodo-modal').style.display = 'none'

      handler(pid, todo)
    })
  }

  bindEditTodo(handler) {

    const toDoListSection = document.getElementsByClassName("todoList")[0];
    toDoListSection.addEventListener('click', event => {
      if(event.target.className === ('editTask')) {
        const currentProject = document.getElementsByClassName('currentProject')[0]
        const pid = currentProject.id
        const tid = event.target.closest('.todo').id

        document.getElementById('editTodo-modal').style.display = 'grid'
        
        const form = document.getElementById('editTaskForm')
        form.addEventListener('submit', event => {
          event.preventDefault()
          let formData = new FormData(form)
          const todo = Object.fromEntries(formData.entries());
          form.reset()
          document.getElementById('editTodo-modal').style.display = 'none'

          handler(pid,tid,todo)
        })
      }
    })
  }

  bindDeleteTodo(handler) {

    const toDoListSection = document.getElementsByClassName("todoList")[0];
    toDoListSection.addEventListener('click', event => {
      if(event.target.className === ('deleteTask')) {
        const currentProject = document.getElementsByClassName('currentProject')[0]
        const pid = currentProject.id

        const tid = event.target.closest('.todo').id

        handler(pid, tid)
      }
    })
  }

  bindToggleTodo(handler){

    const toDoListSection = document.getElementsByClassName("todoList")[0];
    toDoListSection.addEventListener('click', event => {
      if(event.target.className === ('completeTask')) {
        const currentProject = document.getElementsByClassName('currentProject')[0]
        const pid = currentProject.id

        const tid = event.target.closest('.todo').id

        handler(pid, tid)
      }
    })
  }

}

export { View }