$(document).ready(function () {
    $(".fa-bars").click(function (e) {
      $(".menu").toggleClass("showMenu");
    });
    $("body").click(function (e) { 
      if (!$(e.target).hasClass("fa-bars")) {
        $(".menu").removeClass("showMenu");;
      }
    });  
  });

  const login = document.querySelector('.login');
  const register = document.querySelector('.register');
  const registerBtn = document.querySelector('.registerBtn');
  const loginBtn = document.querySelector('.loginBtn');
  const registerBtn2 = document.querySelector('.registerBtn2');

  //到註冊頁面
  registerBtn.addEventListener('click',() => {
    register.classList.remove("none");
    login.classList.add("none");
  })
  //到登入頁面
  registerBtn2.addEventListener('click',() => {
    setTimeout(() => {
      register.classList.add("none");
      login.classList.remove("none");
    }, 2000)
    alert('註冊成功！');
  })
  //登入成功
  loginBtn.addEventListener('click',() => {
    alert('登入成功！');
  })