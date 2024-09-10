const myCard = document.getElementById('card-num');

myCard.addEventListener('input', () => {
  myCard.value = myCard.value.slice(0, 16);
});

const myCVC = document.getElementById('cvc-num');

myCVC.addEventListener('input', () => {
  myCVC.value = myCVC.value.slice(0, 4);
});

const postalCode = document.getElementById('postal-code');

postalCode.addEventListener('input', () => {
  postalCode.value = postalCode.value.slice(0, 5);
});