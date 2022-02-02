
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgsOarf9NmQbHm647X1fayYKkaA3RPzwY",
  authDomain: "kwittier-1b2df.firebaseapp.com",
  projectId: "kwittier-1b2df",
  storageBucket: "kwittier-1b2df.appspot.com",
  messagingSenderId: "677697010893",
  appId: "1:677697010893:web:e5258845f64902d0fdfd84"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+ "!";

function add_room(){
  room_name=document.getElementById("room_name").value ;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding User Name"
  });
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name : "+ Room_names);
row = "<div id="+Room_names+"onclick='redirectToRoomname(this.id)'class='room_name'>#"+Room_names+"</div> <hr>";
document.getElementById("trending_rooms").innerHTML=row ;
      //End code
      });});}
getData();
function redirectToRoomname(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}