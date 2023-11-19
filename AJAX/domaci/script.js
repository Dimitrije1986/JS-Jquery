$(document).ready(function () {
  //GET list users
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    success: function (response) {
      const data = response.data;

      for (let user in data) {
        let userCard = $(
          `<div class="userCard">
            <p class="userName">${data[user].first_name}</p>
            <p>${data[user].email}</p>
            <img src="${data[user].avatar}" alt="${data[user].first_name} Avatar">
          </div>`
        );
        $("#userContainer").append(userCard);
      }
    },
  });

  // GET single user
  $.ajax({
    url: "https://reqres.in/api/users/2",
    success: function (response) {
      const data = response.data;
      const greetings = `Hello everyone, I'm ${data.first_name} ${data.last_name}. Just say Hi from Regres- GET - single user 😁`;

      console.log(greetings);
    },
  });

  // GET single user not found
  $.ajax({
    url: "https://reqres.in/api/users/23",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // GET LIST<RESOURCE>
  $.ajax({
    url: "https://reqres.in/api/unknown",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // GET SINGLE <RESOURCE>

  $.ajax({
    url: "https://reqres.in/api/unknown/2",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // GET SINGLE <RESOURCE> NOT FOUND

  $.ajax({
    url: "https://reqres.in/api/unknown/23",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // POST create
  $.ajax({
    url: "https://reqres.in/api/user",
    type: "POST",
    data: {
      name: "Dimitrije",
      job: "JS developer",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // PUT/PATCH update
  $.ajax({
    url: "https://reqres.in/api/user/2",
    type: "PUT",
    data: {
      name: "Dimitrije",
      job: "NodeJS developer",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // DELETE
  $.ajax({
    url: "https://reqres.in/api/users/2",
    type: "DELETE",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // POST register - successful/unsuccessful
  $.ajax({
    url: "https://reqres.in/api/register",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // POST register - unsuccessful
  $.ajax({
    url: "https://reqres.in/api/register",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // POST login successful
  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // POST login unsuccessful
  $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
      email: "eve.holt@reqres.in",
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });

  // GET delayed response
  $.ajax({
    url: "https://reqres.in/api/users?delay=3",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
});
