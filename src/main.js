import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Bear } from './bear.js';
// import { logSomeStuff } from './apicalls.js';

$(document).ready(function(){
  let newBear;
  let variable;

  $(".bearForm").submit(function(event){
    event.preventDefault();
    newBear = new Bear($("#name").val());

    $(".bearName").text(newBear.name);
    $("#bearSleep").text(newBear.sleep);
    $("#bearAttention").text(newBear.attention);
    $("#bearHunger").text(newBear.hunger);

    $(".displayBox").show();
    $(".controls").show();
    $(".bearForm").hide();
    newBear.slowlyDie();
    healthCheck(newBear);

    //API Stuff
    let request = new XMLHttpRequest();
    let randoPoke = Math.floor(Math.random() * (200 - 1) + 1);
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
      $('.bearImg').prepend('<img id="theImg" src="'+response.sprites.front_default+'" />');
    };


  });

  $("#feedBtn").click(function(){
    newBear.feed();
    updateScreens(newBear);
  });

  $("#sleepBtn").click(function(){
    newBear.letSleep();
    updateScreens(newBear);
  });

  $("#attentionBtn").click(function(){
    newBear.giveAttention();
    updateScreens(newBear);
  });

  $("#greetingBtn").click(function(){
    $("#greetingTag").text(newBear.sayHello()).show();
    setTimeout(function(){
      $("#greetingTag").hide();
    }, 5000);
  });

  let healthCheck = (bear) => {
    variable = setInterval(updateScreens, 1000, bear);
  };

  function updateScreens(bear){
    if ((bear.bearStarves()===true)||(bear.bearStroke()===true)||(bear.bearBored()===true)){
      deathText();
      clearInterval(variable);
    }
    $("#bearSleep").text(bear.sleep);
    $("#bearAttention").text(bear.attention);
    $("#bearHunger").text(bear.hunger);
  }

  function deathText() {
    $(".displayBox").hide();
    $(".controls").hide();
    $("#deathTag").show();
  }

});
