import JustValidate from 'just-validate';
import Inputmask from "inputmask";
const ctaForm = document.querySelector('.cta__form')
if(ctaForm){

  const validation = new JustValidate('.cta__form');


  const inputMask = new Inputmask('+7 (999) 999-99-99');
  const telSelector = ctaForm.querySelector('input[type="tel"]');

  inputMask.mask(telSelector);
  validation
    .addField('#tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .addField('#name', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 2,
      },
      {
        rule: 'maxLength',
        value: 15,
      },
    ])
    .addField('#mail', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ])
    .addField('#check', [
      {
        rule: 'required',
      },
    ])
    .onSuccess((event) => {
        const formData = new FormData(ctaForm)
        ctaForm.classList.add('_sending')
        fetch('mail.php', {
          method: 'POST',
          body: formData
        }).then(() => {
          alert('Ваши данные отправлены. В ближайшее время мы с вами свяжемся.')
          ctaForm.reset();
          ctaForm.classList.remove('_sending');
      })

    })
}
