//get modal element
let modal = document.getElementById('addProject-modal');
//get open modal button
let modalBtn = document.getElementById('addProject-button');
//get close button
let closeBtn = document.getElementsByClassName('closeBtn')[1];

const setAddProjectListener = () => {
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);
};

const openModal = () => {
  modal.style.display = 'grid';
};

const closeModal = () => {
  modal.style.display = 'none';

  let formDisplayProjectTitle = document.getElementById('projectTitle');
  formDisplayProjectTitle.removeAttribute("value");

  let formDisplayProjectDescription = document.getElementById('projectDescription');
  formDisplayProjectDescription.innerHTML = '';

  let formDisplayProjectDueDate = document.getElementById('projectDueDate');
  formDisplayProjectDueDate.removeAttribute("value");
};

const clickOutside = (event) => {
  if(event.target == modal){
    modal.style.display = 'none';

    let formDisplayProjectTitle = document.getElementById('projectTitle');
    formDisplayProjectTitle.removeAttribute("value");
  
    let formDisplayProjectDescription = document.getElementById('projectDescription');
    formDisplayProjectDescription.innerHTML = '';
  
    let formDisplayProjectDueDate = document.getElementById('projectDueDate');
    formDisplayProjectDueDate.removeAttribute("value");
  }
};

export { setAddProjectListener, openModal };