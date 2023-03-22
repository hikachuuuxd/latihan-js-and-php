
const dropdown = document.querySelector('.item p');
const item = document.querySelectorAll('ul li');
function none(){
    for(let i = 0; i<item.length; i++){
        item[i].style.color = red;
    }
}

dropdown.onclick = none;