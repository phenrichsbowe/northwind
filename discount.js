document.addEventListener('DOMContentLoaded', _ => {
  const DISCOUNT_CODE_BUTTONS = document.querySelectorAll('.discount');

  DISCOUNT_CODE_BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
      const toastHeader = document.getElementById('toast-header');
      const toastBody = document.getElementById('toast-body');

      const productName = e.target.dataset.product;
      const productDiscountCode = e.target.dataset.productCode

      toastHeader.innerText = `Product: ${productName}`;
      toastBody.innerText = `Discount code ${productDiscountCode}`

      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });
  });
});

document.addEventListener('keyup', event => {
  if (event.key == 'Escape') {
    const DISCOUNT_TOAST_ELEMENT = document.getElementById('liveToast');
    const DISCOUNT_TOAST = new bootstrap.Toast(DISCOUNT_TOAST_ELEMENT);

    DISCOUNT_TOAST.hide();
  }
});