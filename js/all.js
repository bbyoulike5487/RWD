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