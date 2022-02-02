//ADD YOUR FIREBASE LINKS HERE 
// Your web app's Firebase configuration
var firebaseConfig = 
{ apiKey: "AIzaSyCzLN0HzuNeOw_ad1Kk8jRNM6a_UBuO7kA",
 authDomain: "classtest-a5abb.firebaseapp.com", 
 databaseURL: "https://classtest-a5abb-default-rtdb.firebaseio.com",
  projectId: "classtest-a5abb",
   storageBucket: "classtest-a5abb.appspot.com",
    messagingSenderId: "54590184475",
     appId: "1:54590184475:web:38cf67dd4b04be028becbe" }; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    function Logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
    }
    function send(){
          msg=document.getElementById("text").value ;
          firebase.database().ref(room_name).push({
                message:msg,
                userName:user_name,
                like:0
          });
          document.getElementById("text").innerHTML="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
