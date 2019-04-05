
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiAhAXTdVzymNXtsvvZGCuMSVj_lZWR-E",
    authDomain: "projectx-cabbagefriends.firebaseapp.com",
    databaseURL: "https://projectx-cabbagefriends.firebaseio.com",
    projectId: "projectx-cabbagefriends",
    storageBucket: "projectx-cabbagefriends.appspot.com",
    messagingSenderId: "219900775267"
  };
  firebase.initializeApp(config);


// var db = firebase.firestore();

function writeData(farmName, location, price){
// var farm = firebase.auth().farm.uid;
	
	firebase.database().ref('farms/' + farmName).set({
		farmName: farmName,
		location: location,
		price: price
	});
}

function storeData(){
	var farmName = document.getElementById("fname").value;
	var location = document.getElementById("flocation").value;
	var price = document.getElementById("fprice").value;

	

	if(farmName != "" && location != "" && price !=""){
		writeData(farmName, location, price);
		document.getElementById("fname").value = "";
		document.getElementById("flocation").value = "";
		document.getElementById("fprice").value = "";
	} else {
		alert("please input all the blank!")
	}

	var promise = firebase.database().ref("farms/" + farmName).update({
				farmName: farmName,
				location: location,
				price: price
			});

	promise.then(function() {
			   window.location.href="you_are_a_cabbage_friend.html";    
			});	
}

// function storeData(){
// window.location='file:///C:/term%201/web/comp%201930/project%201/ProjectX/cabbage%20friend%20now.html';
// }

   
        
            
    	







// function storeData() {
//   	db.collection("movies").doc("newhome").set({
//     name: "newhime",
//     date: "2010",
//     desctiption: "jslkadsajdjsalkdjsalkjdlkjsadlkjsalkdj",
//     actors: ["yoyoyo", "lalala"]
//   });
