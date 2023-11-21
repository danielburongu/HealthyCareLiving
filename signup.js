// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBH1Kpsl8Sk_C0lKRXEJdGMWhz7Yvamug",
    authDomain: "health-care-living.firebaseapp.com",
    databaseURL: "https://health-care-living-default-rtdb.firebaseio.com",
    projectId: "health-care-living",
    storageBucket: "health-care-living.appspot.com",
    messagingSenderId: "261327610736",
    appId: "1:261327610736:web:b37cccd11eedf4006b65b5"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, email, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};