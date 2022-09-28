class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindProjectListChanged(this.onProjectListChanged)
    this.view.bindAddProject(this.handleAddProject)
    this.view.bindSelectProject(this.handleSelectProject)
    this.view.bindDeleteProject(this.handleDeleteProject)
    this.view.bindEditProject(this.handleEditProject)
    this.view.bindAddTodo(this.handleAddTodo)
    this.view.bindEditTodo(this.handleEditTodo)
    this.view.bindDeleteTodo(this.handleDeleteTodo)
    this.view.bindToggleTodo(this.handleToggleTodo)

    //display initial projects
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.view.displayProjects(projects);
  }

  handleSelectProject = (newCurrentId, prevCurrentId) => {
    this.model.selectProject(newCurrentId, prevCurrentId)
  }

  handleAddProject = project => {
    this.model.addProject(project)
  }

  handleEditProject = (pid, project) => {
    this.model.editProject(pid, project)
  }

  handleDeleteProject = pid => {
    this.model.deleteProject(pid)
  }

  handleAddTodo = (pid, todo) => {
    this.model.addTodo(pid, todo)
  }

  handleEditTodo = (pid, tid, todo) => {
    this.model.editTodo(pid, tid, todo)
  }

  handleDeleteTodo = (pid, tid) => {
    this.model.deleteTodo(pid, tid)
  }

  handleToggleTodo = (pid, todo) => {
    this.model.toggleTodo(pid, todo)
  }

}

export { Controller }