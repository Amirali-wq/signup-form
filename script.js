document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector('.user-name').value.trim();
    const email = document.querySelector('.user-email').value.trim();
    const password = document.querySelector('.user-pass').value.trim();
    const repeatPassword = document.querySelector('.user-repass').value.trim();
    const usernameError = document.querySelector('.username-error');
    const emailError = document.querySelector('.email-error');
    const passError = document.querySelector('.pass-error');
    const repassError = document.querySelector('.repass-error');

    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    passError.style.display = 'none';
    repassError.style.display = 'none';

    let isValid = true;

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!usernameRegex.test(username)) {
      usernameError.style.display = 'inline-block';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      emailError.style.display = 'inline-block';
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      passError.style.display = 'inline-block';
      isValid = false;
    }

    if (password !== repeatPassword) {
      repassError.style.display = 'inline-block';
      isValid = false;
    }

    if (isValid) {
      alert("ثبت‌نام با موفقیت انجام شد!");
      form.reset();
    }
  });
});
