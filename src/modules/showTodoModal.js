//get modal element
let modal = document.getElementById('addTodo-modal');
//get open modal button
let modalBtn = document.getElementById('addTodo-button');
//get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

const setTodoListener = () => {
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
};

const openModal = () => {
  let projectList = JSON.parse(localStorage.getItem('projectList'))
  if (projectList.length != 0) {
    modal.style.display = 'grid';
  }
};

const closeModal = () => {
  modal.style.display = 'none';
};

const clickOutside = (event) => {
  if(event.target == modal){
    modal.style.display = 'none';
  }
};

export { setTodoListener };