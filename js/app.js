document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})
 const handleNewItemFormSubmit = function (ev) {
   ev.preventDefault();

    const althleteHighPay = createAthlet``HighPay(ev.target);
    const althletePay = document.querySelector('#althlete-pay');
    althletePay.appendChild(althleteHighPay);

    event.target.reset();
  }

  const createAthleteHighPay = function (form) {
    const althleteHighPay = document.createElement('li');
    althleteHighPay.classList.add('athlete-high-pay');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  althleteHighPay.appendChild(name);

  const sport = document.createElement('h3');
  sport.textContent = form.sport.value;
  althleteHighPay.appendChild(sport);

  const pay = document.createElement('p')
  pay.textContent = form.pay.value;
  althleteHighPay.appendChild(pay);

  return althleteHighPay;
  }

  const handleDeleteAllClick = function (ev) {
    const althletePay = document.querySelector('#athelete-pay');
    althletePay.innerHTML = "";
  }
