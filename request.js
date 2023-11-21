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
var RequestFormDB = firebase.database().ref("RequestForm");

document.getElementById("RequestForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var msgContent = getElementVal("msgContent");
  var telephone = getElementVal("telephone");

  saveMessages(name, email, msgContent, telephone);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("RequestForm").reset();
}

const saveMessages = (name, email, msgContent, telephone) => {
  var newrequestForm = RequestFormDB.push();

  newrequestForm.set({
    name: name,
    emailid: email,
    password: msgContent,
    telephone: telephone,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};