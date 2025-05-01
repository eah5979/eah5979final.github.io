
function changeBackground()
{
    const selectedColor = document.getElementById("backgroundColor").value;
    document.body.style.backgroundColor = selectedColor;
}

function applyChanges()
{
    const message = document.getElementById("message").value;
    document.getElementById("display").textContent = message;
    const id = document.getElementById("backgroundColor").value;
    document.body.style.backgroundColor= selectedColor;
}

(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);

    });
  })();

  function displayMessage() 
  {
      let message = document.getElementById("message").value;
      document.getElementById("display").textContent = message;
  }
