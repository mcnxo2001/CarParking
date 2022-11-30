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

var AmountCar = 0;
var LastAmountCar = 0;
var Timerout1;
var Timerout2;

database.ref("/Park").on("value", function (snapshot) {
    var InputCar = document.getElementById("InputCar")
    var OutputCar = document.getElementById("OutputCar")
    InputCar.innerHTML = snapshot.val().Amount;
    OutputCar.innerHTML = 999999 - snapshot.val().Amount;
    AmountCar = snapshot.val().Amount;

    if (LastAmountCar != snapshot.val().Amount) {
        if (LastAmountCar < snapshot.val().Amount) {
            LastAmountCar = snapshot.val().Amount;
            var LaberInputCar = document.getElementById("LaberInputCar")
            LaberInputCar.style.display = 'block';
            clearTimeout(Timerout1);
            Timerout1 = setTimeout(function () {
                LaberInputCar.style.display = 'none';
            }, 3000);
        }
        if (LastAmountCar > snapshot.val().Amount) {
            LastAmountCar = snapshot.val().Amount;
            var LaberOutputCar = document.getElementById("LaberOutputCar")
            LaberOutputCar.style.display = 'block';
            clearTimeout(Timerout2);
            Timerout2 = setTimeout(function () {
                LaberOutputCar.style.display = 'none';
            }, 3000);
        }
    }
})