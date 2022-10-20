const firebaseConfig = {
    apiKey: "AIzaSyB0wSeH7_yAGIRcBOrfeS8pZ8jDqzxmjmc",
    authDomain: "carparking-905d3.firebaseapp.com",
    databaseURL: "https://carparking-905d3-default-rtdb.firebaseio.com",
    projectId: "carparking-905d3",
    storageBucket: "carparking-905d3.appspot.com",
    messagingSenderId: "262881250453",
    appId: "1:262881250453:web:6b1714484a054d70de5f9c"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

database.ref("/Park").on("value", function (snapshot) {
    var InputCar = document.getElementById("InputCar")
    var OutputCar = document.getElementById("OutputCar")
    InputCar.innerHTML = snapshot.val().Amount;
    OutputCar.innerHTML = 100 - snapshot.val().Amount;
})