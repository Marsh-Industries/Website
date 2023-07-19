// login.js
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful login
      console.log("Login successful!");
      // Redirect the user to the main page or dashboard
    })
    .catch((error) => {
      console.error("Login failed: ", error.message);
      // Handle login error (e.g., show error message to the user)
    });
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful signup
      console.log("Signup successful!");
      // Redirect the user to the main page or dashboard
    })
    .catch((error) => {
      console.error("Signup failed: ", error.message);
      // Handle signup error (e.g., show error message to the user)
    });
}
