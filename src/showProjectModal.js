//get modal element
let modal = document.getElementById('addProject-modal');
//get open modal button
let modalBtn = document.getElementById('addProject-button');
//get close button
let closeBtn = document.getElementsByClassName('closeBtn')[1];

const setProjectListener = () => {
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
};

const openModal = () => {
  modal.style.display = 'grid';
};

const closeModal = () => {
  modal.style.display = 'none';
};

const clickOutside = (event) => {
  if(event.target == modal){
    modal.style.display = 'none';
  }
};

export {setProjectListener};