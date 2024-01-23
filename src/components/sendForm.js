// send the regist form to create a new user

// get data from form
const el = {
  form: document.getElementById("myRegistForm"),
  username: document.getElementById("nameRegist"),
  email: document.getElementById("emailRegist"),
  password: document.getElementById("passRegist"),
};

// el.form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   fetch("http://localhost:3000/userRegist", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: el.username.value,
//       email: el.emailRegist.value,
//       password: el.password.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(error => {
//         console.log(error)
//     })
// });
