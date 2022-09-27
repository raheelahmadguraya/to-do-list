class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindProjectListChanged(this.onProjectListChanged)
    this.view.bindAddProject(this.handleAddProject)
    this.view.bindSelectProject(this.handleSelectProject)
    this.view.bindDeleteProject(this.handleDeleteProject)
    //this.view.bindEditProject(this.handleEditProject)

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

}

export { Controller }