//class model manages the data of the application

class Model {
  constructor () {
    const project = {
      pid: 1,
      title : 'project 1 title',
      description : 'description',
      dueDate : "2020-08-01",
      current : true,
      todos: [{
        tid: 1,
        title: "todo test",
        description: "todo description",
        dueDate: "2020-08-01",
        priority: "high",
        complete: true,
      },{
        tid: 2,
        title: "todo test",
        description: "todo description",
        dueDate: "2020-08-02",
        priority: "low",
        complete: false,
      }]
    }

    const project2 = {
      pid: 2,
      title : 'project 2 title',
      description : 'description 2',
      dueDate : "2020-08-01",
      current : false,
      todos: [{
        tid: 1,
        title: "todo test",
        description: "todo description",
        dueDate: "2020-08-01",
        priority: "high"
      }]
    }

    const testProjectsArray = []
    testProjectsArray.push(project, project2);
    localStorage.setItem('projects', JSON.stringify(testProjectsArray))

    this.projects = JSON.parse(localStorage.getItem('projects')) || []; // get projects from local storage or create an empty array
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback
  }

  _commit(projects){
    this.onProjectListChanged(projects)
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  selectProject(currentPid, previousPid = null) {

    this.projects = this.projects.map(project =>
      project.pid === parseInt(previousPid) ? {...project, current : false} : project
    )
    this.projects = this.projects.map(project =>
      project.pid === parseInt(currentPid) ? {...project, current : true} : project
    )

    this._commit(this.projects)
  }

  addProject(projectDetails) {
    const project = {
      pid: this.projects.length > 0 ? this.projects[this.projects.length -1].pid + 1 : 1,
      title : projectDetails.projectTitle,
      description : projectDetails.projectDescription,
      dueDate : projectDetails.projectDueDate,
      current : false,
      todos : [{}]
    }

    this.projects.push(project);
    this._commit(this.projects)
  }

  editProject(pid, updatedProject) {
 
    const updtdProject = {
      title : updatedProject.editProjectTitle,
      description : updatedProject.editProjectDescription,
      dueDate : updatedProject.editProjectDueDate
    }

    this.projects = this.projects.map(project =>
      project.pid === parseInt(pid) ? {...project, ...updtdProject} : project
    )

    this._commit(this.projects)
  }

  deleteProject(pid) {
    this.projects = this.projects.filter(project => project.pid !== parseInt(pid))

    this._commit(this.projects)
    if(this.projects.length > 0){
      this.selectProject(this.projects[0].pid)
    }
  }

  addTodo(pid, todoDetails) {
    const project = this.projects.find(x => x.pid === parseInt(pid))
    const todos = project.todos
    const todo = {
      tid: todos.length > 0 ? todos[todos.length - 1].tid + 1 : 1,
      title: todoDetails.title,
      description: todoDetails.description,
      dueDate: todoDetails.dueDate,
      priority: todoDetails.priority,
      complete: false
    }
    project.todos.push(todo)
    console.log(project)
    this.projects = this.projects.map(project =>
      project.pid === parseInt(pid) ? {...project} : project
    )
    this._commit(this.projects)
  }

  editTodo(pid, tid, todo) {
    console.log("edit")
  }

  deleteTodo(pid, tid) {
    console.log("project id:" + pid)
    console.log("task id:" + tid)

    const project = this.projects.find(x => x.pid === parseInt(pid))
    let todos = project.todos

    todos = todos.filter(task => task.tid !== parseInt(tid))

    project.todos = todos

    this.projects = this.projects.map(project =>
      project.pid === parseInt(pid) ? {...project} : project
    )
    this._commit(this.projects)
  }

  toggleTodo(pid, tid) {
    console.log("project id:" + pid)
    console.log("task id:" + tid)

    const project = this.projects.find(x => x.pid === parseInt(pid))
    let todos = project.todos

    const todo = todos.find(x => x.tid === parseInt(tid))
    if (todo.complete == false) {
      todo.complete = true
    } else {
      todo.complete = false
    }
    todos = todos.map(todo =>
      todo.tid === parseInt(tid) ? {...todo} : todo
    )

    project.todos = todos

    this.projects = this.projects.map(project =>
      project.pid === parseInt(pid) ? {...project} : project
    )
    this._commit(this.projects)
  }
}

export { Model }