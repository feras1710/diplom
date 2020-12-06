// для заполнения поля маска jquery inputmask
$(document).ready(function () {
  $('input[type="tel"]').inputmask({ "mask": "+7(999) 999-99-99" }); //specifying options
});

// Валидация формы
$('form').each(function () {
  $(this).validate({
    focusInvalid: false,
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: 'Например:+7(999)999-99-99'
      },
      name: {
        required: 'Например: Александр',
      }
    },
    submitHandler(form) {
      let th = $(form);

      $.ajax({
        type: 'POST',
        url: '../mail.php',
        data: th.serialize(),
        // eslint-disable-next-line func-names
      }).done(function () {
        let modal = document.querySelector('.modal');
        let modalSuccess = document.querySelector('.modal__success');
        let modalClose = document.querySelector('.modal__success-close');
        let modalCont = document.querySelector('.modal__container');

        modal.style.display = 'none';
        modalSuccess.style.display = 'block';

        modalClose.addEventListener('click', function (e) {
          e.preventDefault();
          modalCont.style.display = 'none';
          modal.style.display = 'block';
          modalSuccess.style.display = 'none';
          enableBodyScroll(targetElement);
        });
        th.trigger('reset');
      });

      return false;
    }
  });
});

