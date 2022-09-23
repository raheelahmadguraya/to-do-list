import complete from '../assets/successG(1).png'
import uncomplete from '../assets/success.png'

const setMarkTaskCompleteListener = (index) => {
  let markCompleteBtn = document.getElementsByClassName('markTaskComplete-button')[index];
  markCompleteBtn.addEventListener('click', event =>{
    let image = markCompleteBtn.childNodes;
    if (image[0].src == uncomplete){
      image[0].src = complete;
    } else {
      image[0].src = uncomplete;
    }
  });
};

export { setMarkTaskCompleteListener };