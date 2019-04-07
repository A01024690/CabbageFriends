//   --------------item info reading from Firebase ----------------
    var out1 = document.getElementById("Fame_Name1");
    var fameName1Ref = firebase.database().ref().child("farms/Hwawon Farm/farmName");
    fameName1Ref.on("value", snap => out1.innerText = snap.val());
           
    var out2 = document.getElementById("Fame_Name2");
    var fameName2Ref = firebase.database().ref().child("farms/Samsan Farm/farmName");
    fameName2Ref.on("value", snap => out2.innerText = snap.val());
           
    var out3 = document.getElementById("Fame_Name3");
    var fameName3Ref = firebase.database().ref().child("farms/Songji Farm/farmName");
    fameName3Ref.on("value", snap => out3.innerText = snap.val());
            
            
    var out4 = document.getElementById("Fame_location1");
    var location1Ref = firebase.database().ref().child("farms/Hwawon Farm/location");
    location1Ref.on("value", snap => out4.innerText = snap.val());
            
    var out5 = document.getElementById("Fame_location2");
    var location2Ref = firebase.database().ref().child("farms/Samsan Farm/location");
    location2Ref.on("value", snap => out5.innerText = snap.val());
            
    var out6 = document.getElementById("Fame_location3");
    var location3Ref = firebase.database().ref().child("farms/Songji Farm/location");
    location3Ref.on("value", snap => out6.innerText = snap.val());
            
            
    var out7 = document.getElementById("Fame_Price1");
    var famePrice1Ref = firebase.database().ref().child("farms/Hwawon Farm/price");
    famePrice1Ref.on("value", snap => out7.innerText = snap.val() + snap.val() * 0.9 + '  KRW (10% discounted!)');
           
    var out8 = document.getElementById("Fame_Price2");
    var famePrice2Ref = firebase.database().ref().child("farms/Samsan Farm/price");
    famePrice2Ref.on("value", snap => out8.innerText = snap.val() * 0.9 + '  KRW (10% discounted!)');
            
    var out9 = document.getElementById("Fame_Price3");
    var famePrice3Ref = firebase.database().ref().child("farms/Songji Farm/price");
    famePrice3Ref.on("value", snap => out9.innerText = snap.val() * 0.9 + '  KRW (10% discounted!)' );


//------------------------ Calculation ------------------- 
function myConfirm() {
            console.log("works");
            var totalQuant =  Number(document.getElementById('buy_num_in_farm1').value) + Number(document.getElementById('buy_num_in_farm2').value) + Number(document.getElementById('buy_num_in_farm3').value);
            
            var CalcRef = firebase.database().ref("/");
            CalcRef.update ({
            AddedCount: totalQuant,
            TotalPrice: Number(document.getElementById('buy_num_in_farm1').value) * 630 + Number(document.getElementById('buy_num_in_farm2').value) * 720 + Number(document.getElementById('buy_num_in_farm3').value) * 774
            });
            
            var out10 = document.getElementById("totalQuantity");
            var TQRef = firebase.database().ref().child("AddedCount");
            TQRef.on("value", snap => out10.innerText = snap.val() );
            
            var out11 = document.getElementById("totalPrice");
            var TPRef = firebase.database().ref().child("TotalPrice");
            TPRef.on("value", snap => out11.innerText = snap.val() + ' KRW' );
        }