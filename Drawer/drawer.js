$(function () { //Init
  console.log("Init");

  $("#open-drawer-btn").click(function(event){

    var duration = {duration: 200, specialEasing: "linear"};

    if($("#drawer").css("left") != "0px")
      $("#drawer").animate({"left": "0px"}, duration);
    else
      $("#drawer").animate({"left": "-300px"}, duration);
  });

});
