let bottleCol = document.getElementById('bottle_col');
let bottleMinus = document.getElementById('bottle_minus');
let bottlePlus = document.getElementById('bottle_plus');

const bottelsVolume = document.getElementsByClassName('card__select__volume');

bottelsVolume.onclick = function () {
  console.log('Клик');
}




/* const bottle375 = document.getElementById('bottle375');
const bottle750 = document.getElementById('bottle750');
 */

/* bottle750.onclick = function () {
  if (bottle750.checked) {
    console.log('123');
  }
}
 */



/* const chooseVolume = function () {
 
} */


/* const bottle375 = 400;
const bottle750 = 600; */

bottlePlus.onclick = function () {
  bottleCol.value = parseInt(bottleCol.value) + 1;
  checkColBottle();
}

bottleMinus.onclick = function () {
  bottleCol.value = parseInt(bottleCol.value) - 1;
  checkColBottle();
}


function checkColBottle() {
  if (bottleCol.value <= 1) {
    bottleMinus.setAttribute('disabled', true);
  } else {
    bottleMinus.removeAttribute('disabled');
  }
};




