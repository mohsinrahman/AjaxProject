

var Moduel = (function(){


//var btn = document.getElementById("getInfoBtn");
//btn.addEventListener("click", _init, false);

document.getElementById("getInfoBtn").addEventListener("click",function(){
           let city = document.getElementById("city").value;

     _init(city);
    });



function _init(city) {
  //e.stopPropagation();
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');

  ourRequest.onload = function() {
         if (ourRequest.status >= 200 && ourRequest.status < 400) {
         var ourData = JSON.parse(ourRequest.responseText);
         
document.getElementById("getInfoBtn").disabled = false;
         render(ourData); 
              
    }    
         else {
         console.log("We connected to the server, but it returned an error.");
    }
    };
  ourRequest.onerror = function() {
         console.log("Connection error");
    };

  ourRequest.send();
    }

 (function(){

         let title= document.getElementById("title");

              title.innerHTML = "Yahoo Weather !!!"
              //ourData.query.results.channel.title;
})();


function render(ourData){
   document.getElementById("colDiv").innerHTML = "";
  let col_Div = document.getElementById("colDiv");
  let card_Div = document.createElement("div");
      card_Div.setAttribute("class", "card");
  let cardblock_Div = document.createElement("div");
      cardblock_Div.setAttribute("class", "card-block");
  let cardtitle_h2 = document.createElement("h1");
      cardtitle_h2.setAttribute("class", "card-title badge badge-warning"); 
       cardtitle_h2.innerHTML = "Created On: " + ourData.query.created;
  let cardtitle_h4 = document.createElement("h4");
      cardtitle_h4.setAttribute("class", "card-title badge badge-warning"); 
       cardtitle_h4.innerHTML = "Available Only in : " + ourData.query.lang;
  let cardbtn_btn = document.createElement("button");
      //cardbtn_btn.setAttribute("onclick", "getDetail()");
      cardbtn_btn.setAttribute("class", "btn card-main__btn btn-lg"); 
      cardbtn_btn.setAttribute("id", "btnDetails");
      cardbtn_btn.innerHTML="Click for Details";
      



      card_Div.appendChild(cardtitle_h2);
      card_Div.appendChild(cardtitle_h4);
      card_Div.appendChild(cardbtn_btn);
      col_Div.appendChild(card_Div);
 // console.log(ourData.query.results.channel.item.forecast);
   

  

  //.addEventListener("click", getDetail(ourData), false );
  /* document.getElementById("btnDetails").addEventListener("click",function(){
      
     getDetail(ourData);
    }); */
   getDetail(ourData);
}

function getDetail(ourData){
      
        document.getElementById("card-detail").innerHTML = "";
      for(let forecast of ourData.query.results.channel.item.forecast ){
    console.log(forecast.code + forecast.date + forecast.day + forecast.high + forecast.low + forecast.text  );
    
         let row_Div = document.getElementById("card-detail");
         let col_md = document.createElement("div");
          col_md.setAttribute("class", "col-md-4");
         let card_Div = document.createElement("div");
        card_Div.setAttribute("class", "card");
         let cardblock_Div = document.createElement("div");
        cardblock_Div.setAttribute("class", "card-block");
        let cardcode_h5 = document.createElement("h5");
        cardcode_h5.setAttribute("class", "card-title badge badge-warning"); 
        cardcode_h5.innerHTML = "Code: " + forecast.code;
        let carddate_h4 = document.createElement("h4");
        carddate_h4.setAttribute("class", "card-title"); 
        carddate_h4.innerHTML = "Date : " + forecast.date; 
        let cardday_h4 = document.createElement("h4");
        cardday_h4.setAttribute("class", "card-title"); 
        cardday_h4.innerHTML = "Day : " + forecast.day; 
        let cardhigh_h4 = document.createElement("h4");
        cardhigh_h4.setAttribute("class", "card-title"); 
        cardhigh_h4.innerHTML = "High : " + forecast.high; 
        let cardlow_h4 = document.createElement("h4");
        cardlow_h4.setAttribute("class", "card-title"); 
        cardlow_h4.innerHTML = "Low : " + forecast.low;
        let cardtext_h4 = document.createElement("h4");
        cardtext_h4.setAttribute("class", "card-title"); 
        cardtext_h4.innerHTML = "Discription : " + forecast.text;
        
         cardblock_Div.appendChild(cardcode_h5);
        cardblock_Div.appendChild(carddate_h4);
        cardblock_Div.appendChild(cardday_h4);
        cardblock_Div.appendChild(cardhigh_h4);
        cardblock_Div.appendChild(cardlow_h4);
        cardblock_Div.appendChild(cardtext_h4);
      card_Div.appendChild(cardblock_Div);
      col_md.appendChild(card_Div);
      row_Div.appendChild(col_md);
      //div.innerHTML = "<h5 class='card-title badge badge-warning'>" + forecast.code + "</h5>";
   } 
 
      //console.log(ourData);
}




  return {
  _init: _init,

 }

})();



//var animalContainer = document.getElementById("");


/*function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}  */