$(document).ready(function () {
  const name = "admin";
  const password = 123;

  let clickCount = 0;

  $("#signUp").click(function () {
    
    if (clickCount >= 3) {
      $("#name").prop("disabled", true);
      $("#password").prop("disabled", true);
      return
    }
    console.log(clickCount);

    $(".wrongName").hide();
    $(".wrongPassword").hide();

    let userName = $("#name").val();
    let userPassword = $("#password").val();

    if (userName !== name) {
      $(".wrongName").show();
      clickCount++;
      return;
    }

    if (userPassword != password) {
      $(".wrongPassword").show();
      clickCount++;
      return;
    }


    if (userName == name && userPassword == password) {
      $(".displayMessage").show();
      $("#form").hide();
    }
  });
});
