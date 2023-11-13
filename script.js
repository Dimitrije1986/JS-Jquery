$(document).ready(function () {
  // sabiranje
  $("#add").click(function () {
    let broj1 = parseInt($(".broj1").val());
    let broj2 = parseInt($(".broj2").val());

    $(".rezHolder").text(broj1 + broj2);
  });

  //oduzimanje
  $("#subtract").click(function () {
    let broj1 = parseInt($(".broj1").val());
    let broj2 = parseInt($(".broj2").val());

    $(".rezHolder").text(broj1 - broj2);
  });

  //mnozenje
  $("#multiply").click(function () {
    let broj1 = parseInt($(".broj1").val());
    let broj2 = parseInt($(".broj2").val());

    broj1 == 0 || broj2 == 0
      ? $(".rezHolder").text("Ne moze se mnoziti sa 0!")
      : $(".rezHolder").text(broj1 * broj2);
  });

  //deljenje
  $("#divide").click(function () {
    let broj1 = parseInt($(".broj1").val());
    let broj2 = parseInt($(".broj2").val());

    broj1 == 0 || broj2 == 0
      ? $(".rezHolder").text("Ne moze se deliti sa 0!")
      : $(".rezHolder").text(broj1 / broj2);
  });
});
