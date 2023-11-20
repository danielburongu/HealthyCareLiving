// script.js

console.log("Script is running...");

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseonfig";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function addDataToFirestore() {
  const data = {
    message: "Hello from Firebase!"
  };

  // Add data to Firestore
  return db.collection("messages").add(data);
}

function fetchDataFromFirestore() {
  // Retrieve data from Firestore
  return db.collection("messages").get();
}

// Example usage
addDataToFirestore()
  .then(docRef => {
    console.log("Document added with ID:", docRef.id);
    // After adding data, fetch it and display in HTML
    fetchDataFromFirestore()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const message = doc.data().message;
          displayMessage(message);
        });
      })
      .catch(error => {
        console.error("Error fetching data from Firestore:", error);
        displayMessage("Error fetching data from Firestore");
      });
  })
  .catch(error => {
    console.error("Error adding document:", error);
    displayMessage("Error adding document to Firestore");
  });

function displayMessage(message) {
  // Display the message in the HTML
  const messageContainer = document.getElementById("message-container");
  messageContainer.textContent = message;
}
