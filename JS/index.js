const form = document.querySelector('form');
const checkbox = form.querySelector('input[type="checkbox"]');
const buttonForm = form.querySelector('.button');
const successBlock = form.querySelector('.form-success');

buttonForm.disabled = true;

checkbox.addEventListener('change', () => {
    buttonForm.disabled = !checkbox.checked;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;

    const fields = form.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="tel"], select'
    );

    function checkField(field) {
        const label = field.closest('label');
        const error = label.querySelector('.field__error');

        label.classList.remove('field--error');
        error.textContent = '';

        if (!field.value) {
            label.classList.add('field--error');
            error.textContent = 'Заполните поле';
            hasError = true;
        }
    }

    fields.forEach((field) => checkField(field));

    if (!checkbox.checked) {
        hasError = true;
    }

    if (!hasError) {
        form.classList.add('form--success');
        successBlock.hidden = false;
        buttonForm.disabled = true;
    }
});
