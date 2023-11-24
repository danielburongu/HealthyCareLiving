// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import {getAuth,createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth()

// get all the elements form html
var fullName = document.getElementById("fullname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

   if(fullName.value == "" || contact.value=="" || email.value =="" || password.value ==""){
       alert("All Field Are Required")
   }
   if(password.value == copassword.value){
    
   }
   else{
       alert("Password Confirmation is Wrong")
       return false
   }

   e.preventDefault();
   var obj = {
     firstName: fullName.value,
     contact: contact.value,
     email: email.value,
     password: password.value,
   };
 
   createUserWithEmailAndPassword(auth, obj.email, obj.password)
   .then(function(success){
       window.location.replace('login.html')
     // console.log(success.user.uid)
     alert("signup successfully")
   })
   .catch(function(err){
     alert("Error in " + err)
   });
  console.log()
   console.log(obj);
 };