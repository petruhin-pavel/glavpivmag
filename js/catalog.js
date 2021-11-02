let bottleCol = document.getElementById('bottle_col');
let bottleMinus = document.getElementById('bottle_minus');
let bottlePlus = document.getElementById('bottle_plus');

bottlePlus.onclick = function () {
  bottleCol.value = parseInt(bottleCol.value) + 1;
}

bottleMinus.onclick = function () {
  bottleCol.value = parseInt(bottleCol.value) - 1;
}



/*   if (bottleCol.value <= 1) {
    bottleMinus.setAttribute('disabled', true);
  } else {
    bottleMinus.removeAttribute('disabled');
  }
 */



