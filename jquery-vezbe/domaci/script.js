$(document).ready(function () {
  $("#elementWidth").on("input", function () {
    let elWidth = $(this).val();
    $("#testField").css({ width: elWidth });
  });

  $("#elementHeight").on("input", function () {
    let elHeight = $(this).val();
    $("#testField").css({ height: elHeight });
  });

  $("#elementColor").on("input", function () {
    let elColor = $(this).val();
    $("#testField").css({ backgroundColor: elColor });
  });

  $("#elementRange").on("input", function () {
    let elRange = $(this).val() + "px";
    $("#testField").css({ borderRadius: elRange });
  });
});
