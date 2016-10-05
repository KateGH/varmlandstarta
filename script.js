var ingredients = [3, 2, 100, 35, 3, 7.5, 75, 100];
var portion =1;

var myAmount = [];
// myAmount = [amount, amount, amount, amount,....., amount];


// #1 For-loop to print out in console
for(var i=0;i<ingredients.length;i++){
    console.log("intgre no." + i + ": " + ingredients[i]);
}

// #2 another way (For-of) to print out in console
//for(var ingredient of ingredients){
//    console.log(ingredient);
//}


// ?? can number*Array = Array? => YES! it can!
function calculateAmount(){
    portion = document.getElementById("portion").value;
      
    for(var i=0;i<(ingredients.length)-1;i++){
        myAmount[i] = portion*ingredients[i];
        console.log("myAmount" + i + ": " + myAmount[i]);  
        
        document.getElementsByClassName("amount")[i].innerHTML = myAmount[i];        
    }
    
    console.log(myAmount);
}


$(document).ready(function(){
// nr.01
$("#star01").on({
   
    mouseenter: function(){
        $(this).attr("src", "image/s07.png");
    },
    mouseleave: function(){
        $(this).attr("src", "image/s05.png");
    },
    click: function(){
        $("#myvote").html(1); //คำสั่งให้ update ค่าใน html แทนคำสั่ง document.getElementById().innerhtml ซึ่งเป็นการสั่งผ่าน DOM ไม่ใช่ jQuery ที่สั้นกว่า ex.document.getElementById("myvote").innerHTML = "1";
        
//      $("#star01").off("mouseleave"); // take away this to make mouseleave active still after click 
        $("#star01").on("mouseenter");     
    }
});
    
    
// nr.02
$("#star02").on({
    
    mouseenter: function(){
        for(var i=1;i<=2;i++){
            $("#star0"+i).attr("src", "image/s07.png");
        }        
    },
    mouseleave: function(){
        for(var i=1;i<=2;i++){
            $("#star0"+i).attr("src", "image/s05.png");
        }
    },
    click: function(){
        $("#myvote").html(2);
        
        for(var i=1;i<=2;i++){
            $("#star0"+i).on("mouseenter");
        }
    } 
});

 
// nr.03
$("#star03").on({
    
    mouseenter: function(){
         for(var i=1;i<=3;i++){
            $("#star0"+i).attr("src", "image/s07.png");
      }
    },
    mouseleave: function(){
        for(var i=1;i<=3;i++){
            $("#star0"+i).attr("src", "image/s05.png");
        }
    },
    click: function(){
        $("#myvote").html(3);
    
        for(var i=1;i<=3;i++){
            $("#star0"+i).on("mouseenter");    
        }
    }
});


// nr.04
$("#star04").on({
    
    mouseenter: function(){
        for(var i=1;i<=4;i++){
        $("#star0"+i).attr("src", "image/s07.png");
        }
    },
    mouseleave: function(){
        for(var i=1;i<=4;i++){
        $("#star0"+i).attr("src", "image/s05.png");
        }
    },
    click: function(){
        $("#myvote").html(4);
    
        for(var i=1;i<=4;i++){
            $("#star0"+i).on("mouseenter");    
        }
    }
});
 

// nr.05
$("#star05").on({
    
    mouseenter: function(){
        for(var i=1;i<=5;i++){
        $("#star0"+i).attr("src", "image/s07.png");
        }
    },
    mouseleave: function(){
        for(var i=1;i<=5;i++){
        $("#star0"+i).attr("src", "image/s05.png");
        }
    },
    click: function(){
        $("#myvote").html(5);
        
        for(var i=1;i<=5;i++){           
            $("#atat0"+i).on("mouseenter");
        }
    }  
});
    


if(typeof(Storage) != undefined){
    
    var url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f2491aa18658377a&recipe=varmlandtarta";
    
    var jsonString = JSON.stringify(url); // Obj => String
    
    localStorage.setItem("votesKey", jsonString);
    
    var jsonObjLocalData = JSON.parse(localStorage.getItem("votesKey")); // JSON string => Obj
    
    $.each(jsonObjLocalData, function(key, value){
        console.log(key + ' = ' + value);
    });
    
    

//    document.getElementById("votes").innerHTML = localStorage.getItem("votesKey");
//} else {
//    document.getElementById("votes").innerHTML = "Sorry, you browser does not support web storage"
}
    
    
    
    

}); 



// Here how to fix vote function !!

function loadDoc(){ 
$.ajax({
url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f2491aa18658377a&recipe=varmlandtarta&rating=5", 
type: "GET",
//data: [],
//dataType: 'json',
    
success: function loadJSON(){
    
    var url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f2491aa18658377a&recipe=varmlandtarta";
    var http_request = new XMLHttpRequest();
    
    http_request.onreadystatechange = function(){
    
        if(http_request.readyState == 4 && http_request.status == 200){
       
        var jsonObj = JSON.parse(http_request.responseText);
//    $("#myvote").html(i); // move to each .click(function())
        $("#votes").html(jsonObj.votes);
        $("#rating").html(jsonObj.rating.toFixed(2)); // fix 2 digits figure        
        }
    };
    
    http_request.open("GET", url, true);
    http_request.send();
}       
});    
    
}

