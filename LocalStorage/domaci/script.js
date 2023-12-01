$(document).ready(function () {
  $("#cities").change(function () {
    let city = $(this).val();
    const apiUrl = "http://api.weatherapi.com/v1/forecast.json";

    localStorage.setItem("city", city);

    $.ajax({
      url: apiUrl,
      data: {
        key: "0e93a6197f9a4658b3a183517232011",
        days: 1,
        q: city,
        aqi: "yes",
        alert: "yes",
      },
      success: function (response) {
        $("#textBox").text(
          `Grad: ${city}, Temperatura: ${response.current.temp_c + "℃"}`
        );

        localStorage.setItem("temperature", response.current.temp_c);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });

  $("#cities").val(localStorage.getItem("city"));
  $("#textBox").text(
    `Grad: ${localStorage.getItem("city")}, Temperatura: ${
      localStorage.getItem("temperature") + "℃"
    }`
  );
});
