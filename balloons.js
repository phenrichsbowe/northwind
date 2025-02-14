document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');

      // Not visble make them so

      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp", "animate__flash");

      e.target.checked ?
        elem.classList.add("animate__animated", "animate__backInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  const SUBMIT_BUTTON = document.getElementById('submit');

  SUBMIT_BUTTON.addEventListener('click', _ => {
    const BALLOONS_CHECK_BOX = document.querySelectorAll('.form-check-input');

    BALLOONS_CHECK_BOX.forEach(ballonCheckBox => {
      if (ballonCheckBox.checked) {
        return;
      }

      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });
  });
  
  const CHECKBOX_LABELS = document.querySelectorAll('.form-check-label');

  CHECKBOX_LABELS.forEach(checkbox => {
    checkbox.addEventListener('mouseover', _ => {
      const color = checkbox.getAttribute('for');

      const happyBirthday = document.querySelector('h1');

      if (happyBirthday.style.color == color) {
        happyBirthday.style.color = '';
      } else {
        happyBirthday.style.color = color;
      }
    });
  })


  const RESET_BUTTON = document.getElementById('reset-button');

  RESET_BUTTON.addEventListener('click', _ => {
    const BALLOONS_CHECK_BOX = document.querySelectorAll('.form-check-input');

    BALLOONS_CHECK_BOX.forEach(ballonCheckBox => {
      ballonCheckBox.checked = false;
    });

    // Hacky solution stolen from: https://www.30secondsofcode.org/js/s/get-images/
    const getImages = el => [...el.getElementsByTagName('img')];

    getImages(document).forEach(img => {
      img.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp", "animate__backInDown");
      img.classList.add("animate__animated", "animate__flash");

      setTimeout(function () {
        img.classList.add("animate__animated", "animate__bounceOutUp");
      }, 1000);
    })
  });
});