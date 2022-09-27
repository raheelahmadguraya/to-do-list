class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindProjectListChanged(this.onProjectListChanged)
    this.view.bindAddProject(this.handleAddProject)
    /*
    this.model.bindProjectListChanged(this.onProjectListChanged)
    this.view.bindAddProject(this.handleAddProject)
    this.view.bindEditProject(this.handleEditProject)
    this.view.bindDeleteProject(this.handleDeleteProject)
    this.view.bindSelectProject(this.handleSelectProject)
    */

    //display initial projects
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.view.displayProjects(projects);
  }

  handleAddProject = project => {
    this.model.addProject(project)
  }

  handleEditProject = project => {
    this.model.editProject(pid, project)
  }

  handleDeleteProject = pid => {
    this.model.deleteProject(pid)
  }

}

export { Controller }