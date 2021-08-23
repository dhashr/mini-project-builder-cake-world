/*Fill your code */
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let candle = document.getElementById("candle");
let layer = 0;
let total = 0;

function chocolatefn(){
   document.getElementById("bill-list1").innerHTML = "Chocolate -------- 300";
   layer++;
   total += 300;
     if(layer == 1){
        layer1.style.visibility = "visible";
        layer1.style.background = "rgb(250, 118, 23)";
     }
     else if(layer == 2){
        layer2.style.visibility = "visible";
        layer2.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 3){
        layer3.style.visibility = "visible";
        layer3.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 4){
        layer4.style.visibility = "visible";
        layer4.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer == 5){
        layer5.style.visibility = "visible";
        layer5.style.background = "rgb(250, 118, 23)"; 
     }
     else if(layer > 5){
         total -= 300;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;
     }
 }
 document.getElementById("chocobtn").addEventListener("click", chocolatefn);
 
 function strawberryfn(){
   document.getElementById("bill-list2").innerHTML = "Strawberry ------- 100";
   layer++;
   total += 100;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(247, 102, 126)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(247, 102, 126)";
      }
      else if(layer > 5){
         total -= 100;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;
      }
 }
 document.getElementById("berrybtn").addEventListener("click", strawberryfn) 

 function butterscotchfn(){
   document.getElementById("bill-list3").innerHTML = "Butterscotch ----- 200";
   layer++;
   total += 200;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(250, 250, 136)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(250, 250, 136)";
      }
      else if(layer > 5){
         total -= 200;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;
      }
 }
 document.getElementById("scotchbtn").addEventListener("click", butterscotchfn)

 function vannilafn(){
   document.getElementById("bill-list4").innerHTML = "Vannila ---------- 250";
   layer++;
   total += 250;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "#ffffff";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "#ffffff";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "#ffffff";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "#ffffff";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "#ffffff";
      }
      else if(layer > 5){
         total -= 250;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;
      }
 }
 document.getElementById("vannilabtn").addEventListener("click", vannilafn)

 function redvelvetfn(){
   document.getElementById("bill-list5").innerHTML = "Red-Velvet ------- 350";
   layer++;
   total += 350;
      if(layer == 1){
         layer1.style.visibility = "visible";
         layer1.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 2){
         layer2.style.visibility = "visible";
         layer2.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 3){
         layer3.style.visibility = "visible";
         layer3.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 4){
         layer3.style.visibility = "visible";
         layer4.style.background = "rgb(247, 46, 46)";
      }
      else if(layer == 5){
         layer5.style.visibility = "visible";
         layer5.style.background = "rgb(247, 46, 46)";
      }
      else if(layer > 5){
         total -= 100;
         candle.style.visibility = "visible";
         document.getElementById("total").innerHTML = "Total --------" +total;
      }
 }
 document.getElementById("velvetbtn").addEventListener("click", redvelvetfn)

 function buyfn(){
   if(layer >= 5){
      candle.style.visibility = "visible";
      document.getElementById("total").innerHTML = "Total --------" +total;
   }  
}
 document.getElementById("buybtn").addEventListener("click", buyfn)