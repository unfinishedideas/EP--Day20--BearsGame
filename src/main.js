import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Bear } from './bear.js';

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
