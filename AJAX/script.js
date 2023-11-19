$(document).ready(function () {
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    success: function (response) {
      const data = response.data;

      for (let user in data) {
        let paragraf = $(
          `<p> ${data[user].first_name}  :  ${data[user].email}</p>`
        );
        $("#dataContainer").append(paragraf);
      }
    },
  });

  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
      name: "Dimi",
      job: "programer",
    },
    success: function (response) {
   
    },
  });

  $("#deleteBtn").click(function () {

    $.ajax({
      url: "https://reqres.in/api/users/2",
      type: "DELETE",
      success: function (response) {
        console.log(response.data);
      },
    });
  });

  $('#registrationUser').click(function(){
    const userName = $('#userName').val();
    const userEmail = $('#userEmail').val();

    $.ajax({
      url: "https://reqres.in/api/users",
      type: "POST",
      data: {
        name: userName,
        email: userEmail,
      },
      success: function (response) {
         console.log(response.name);
      },

    })
  })
});
