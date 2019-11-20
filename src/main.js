import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Bear } from './bear.js';
import { Bearpen } from './bearpen.js';

$(document).ready(function(){
  let newBear;
  let variable;
  let newBearpen = new Bearpen();

  // On submit! --------------------------------------------
  $(".bearForm").submit(function(event){
    event.preventDefault();
    newBear = new Bear($("#name").val());
    newBearpen.addBear(newBear);

    newBear.slowlyDie();
    updateBears(newBearpen);
    healthCheck(newBearpen);

    //API Stuff
    let request = new XMLHttpRequest();
    let randoPoke = Math.round(Math.random() * (200 - 1) + 1);
    const url = `http://pokeapi.co/api/v2/pokemon/${randoPoke}/`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      newBear.imgLink = response.sprites.front_shiny;
      $("#liveBearsList").html(displayBear(newBearpen));
    };
  });


  function displayBear(bearpen){
    let htmlToAdd = "";
    bearpen.bearArray.forEach(function(bear) {
      htmlToAdd += '<li><div class="displayBox" id="'+bear.id+'"><h2>'+bear.name+'</h2><div class="bearImg">'+'<img src="'+bear.imgLink+'"</img></div><h3>Sleep: <span class="scaryText" id="bearSleep'+bear.id+'"></span></h3><h3>Attention: <span class="scaryText" id="bearAttention'+bear.id+'"></span></h3><h3>Hunger: <span class="scaryText" id="bearHunger'+bear.id+'"></span></h3><div class="controls'+bear.id+'"><button type="button" class="sleepBtn" id="'+bear.id+'">Sleep</button><button type="button" class="feedBtn" id="'+bear.id+'">Feed</button><button type="button" class="attentionBtn" id="'+bear.id+'">Attention</button><button type="button" class="greetingBtn" id="'+bear.id+'">Greet</button></div><h3 class="greetingTag" id="greet'+bear.id+'"></h3></div></li>';
    });
    return htmlToAdd;
  }

  function updateBears(bearpen){
    bearpen.bearArray.forEach(function(bear){
      if ((bear.bearStarves()===true)||(bear.bearStroke()===true)||(bear.bearBored()===true)){
        deadBears(bear);
        bearpen.destroyBear(bear.id);
        $(".displayBox#"+bear.id).hide();
        $(".deadBears").show();
      } else {
        $("#bearSleep"+bear.id).text(bear.sleep);
        $("#bearAttention"+bear.id).text(bear.attention);
        $("#bearHunger"+bear.id).text(bear.hunger);
      }
    });
  }

  $("#liveBearsList").on("click", ".sleepBtn", function() {
    let currentBear = newBearpen.findBear(this.id);
    currentBear.letSleep();
    updateBears(newBearpen);
  });
  $("#liveBearsList").on("click", ".feedBtn", function() {
    let currentBear = newBearpen.findBear(this.id);
    currentBear.feed();
    updateBears(newBearpen);
  });
  $("#liveBearsList").on("click", ".attentionBtn", function() {
    let currentBear = newBearpen.findBear(this.id);
    currentBear.giveAttention();
    updateBears(newBearpen);
  });
  $("#liveBearsList").on("click", ".greetingBtn", function() {
    let currentBear = newBearpen.findBear(this.id);
    $("#greet"+this.id).text("Hi my name is " + currentBear.name);
    $(".greetingTag#greet"+this.id).show();
    setTimeout( ()=>$(".greetingTag#greet"+this.id).hide(), 5000);
  });


  let healthCheck = (bearpen) => {
    variable = setInterval(updateBears, 1000, bearpen);
  };
  function deadBears(bear){
        $("#deadBearsList").append('<li class="scaryText">'+bear.name+'<img src="'+bear.imgLink+'"</img></li>');
  }

});


//Old API Call ----------------------------------
// let request = new XMLHttpRequest();
// let randoPoke = Math.floor(Math.random() * (200 - 1) + 1);
// const url = `http://pokeapi.co/api/v2/pokemon/${randoPoke}/`;
//
//
// request.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     const response = JSON.parse(this.responseText);
//     getElements(response);
//   }
// };
// request.open("GET", url, true);
// request.send();
//
//
// const getElements = function(response) {
//       console.log(response.sprites.front_shiny);
//   $('.bearImg').prepend('<img id="theImg" src="'+response.sprites.front_shiny+'" />');
// };
// });
