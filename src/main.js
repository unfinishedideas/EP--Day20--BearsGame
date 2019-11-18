import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Bear } from './bear.js';


$(document).ready(function(){
  let newBear;
  let intervalId;

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
    startLiving(newBear);
  });

  $("#feedBtn").click(function(){
    newBear.hunger = 20;
    updateScreens(newBear);
  });

  $("#sleepBtn").click(function(){
    newBear.sleep = 20;
    updateScreens(newBear);
  });

  $("#attentionBtn").click(function(){
    newBear.attention = 20;
    updateScreens(newBear);
  });

  $("#greetingBtn").click(function(){
    $("#greetingTag").show();
    setTimeout(function(){
      $("#greetingTag").hide();
    }, 5000);
  });

  function updateScreens(bear){
    $("#bearSleep").text(bear.sleep);
    $("#bearAttention").text(bear.attention);
    $("#bearHunger").text(bear.hunger);
  }

  function startLiving(bear){
    intervalId = setInterval(dyingBear, 250, bear);
  }

  function dyingBear(bear){
    bear.hunger --;
    bear.sleep --;
    bear.attention --;
    if ((bear.hunger < 1) || (bear.sleep < 1) || (bear.attention < 1)) {
      clearInterval(intervalId);
      deathText(bear);
    }
    updateScreens(bear);
  }

  function deathText(bear) {
    $(".displayBox").hide();
    $(".controls").hide();
    $("#deathTag").show();
  }

});
