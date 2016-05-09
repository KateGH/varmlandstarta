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
      
    for(var i=0;i<ingredients.length;i++){
        myAmount[i] = portion*ingredients[i];
        console.log("myAmount" + i + ": " + myAmount[i]);  
        
        document.getElementsByTagName("span")[i].innerHTML = myAmount[i];        
    }
    
    console.log(myAmount);
}


// nr.01
$("#star01").mouseover(function(){  
    
    $("#star01").attr("src", "image/s07.png");
});

$("#star01").mouseout(function(){
    
    $("#star01").attr("src", "image/s05.png");
});

$("#star01").click(function(){
    
    $("#myvote").html(1);
    
    $("#star01").off("mouseout");
    $("#star01").on("mouseover");
    
    for(var j=2;j<=5;j++){
        $("#star0"+j).off("mouseout");
        $("#star0"+j).off("mouseover");
    }
    
});



// nr.02
$("#star02").mouseover(function(){
    
    for(var i=1;i<=2;i++){
        $("#star0"+i).attr("src", "image/s07.png");
    }
    
});

$("#star02").mouseout(function(){
    
    for(var i=1;i<=2;i++){
        $("#star0"+i).attr("src", "image/s05.png");
    }
    
});

$("#star02").click(function(){
    
    $("#myvote").html(2);
    
    for(var i=1;i<=2;i++){
        $("#star0"+i).off("mouseout");
        $("#star0"+i).on("mouseover");    
    }
    
    
    for(var j=3;j<=5;j++){
        $("#star0"+j).off("mouseout");
        $("#star0"+j).off("mouseover");
    }
    
});


 
// nr.03
$("#star03").mouseover(function(){
    
    for(var i=1;i<=3;i++){
        $("#star0"+i).attr("src", "image/s07.png");
    }
});

$("#star03").mouseout(function(){
    
     for(var i=1;i<=3;i++){
        $("#star0"+i).attr("src", "image/s05.png");
    }
});

$("#star03").click(function(){
    
    $("#myvote").html(3);
    
    for(var i=1;i<=3;i++){
        $("#star0"+i).off("mouseout");
        $("#star0"+i).on("mouseover");    
    }
    
    for(var j=4;j<=5;j++){
        $("#star0"+j).off("mouseout");
        $("#star0"+j).off("mouseover");
    }
    
});
    
    
// nr.04
$("#star04").mouseover(function(){
    
    for(var i=1;i<=4;i++){
        $("#star0"+i).attr("src", "image/s07.png");
    }
});

$("#star04").mouseout(function(){
    
    for(var i=1;i<=4;i++){
        $("#star0"+i).attr("src", "image/s05.png");
    }
});

$("#star04").click(function(){
    
    $("#myvote").html(4);
    
    for(var i=1;i<=4;i++){
        $("#star0"+i).off("mouseout");
        $("#star0"+i).on("mouseover");    
    }
    
    $("#star05").off("mouseout");
    $("#star05").off("mouseover");
    
});    
    
 

// nr.05
$("#star05").mouseover(function(){
    
   for(var i=1;i<=5;i++){
        $("#star0"+i).attr("src", "image/s07.png");
    }
});

$("#star05").mouseout(function(){
    
  for(var i=1;i<=5;i++){
        $("#star0"+i).attr("src", "image/s05.png");
    }
});

$("#star05").click(function(){
    
    $("#myvote").html(5);
    
  for(var i=1;i<=5;i++){
        $("#star0"+i).off("mouseout");
        $("#star0"+i).on("mouseover");    
    }    
}); 


// here to fix vote function

function loadPage(){
$.ajax({
  url:"https://edu.oscarb.se/sjk15/api/recipe/?api_key=f2491aa18658377a&recipe=varmlandtarta&rating=5",
  type: "GET",
  success: function loadJSON(){
      var data_file = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f2491aa18658377a&recipe=varmlandtarta";
      var http_request = new XMLHttpRequest();
      
      http_request.open("GET", data_file, true);
      http_request.send();
      
      http_request.onreadystatechange = function(){
          if(http_request.readyState == 4 && http_request.status == 200){
              var jsonObj = JSON.parse(http_request.responseText);
              $("#votes").html(jsonObj.votes);
              $("#rating").html(jsonObj.rating.toFixed(2));
          }
      }
      
  }
    
} );
    
}

