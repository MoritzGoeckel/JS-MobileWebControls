function Drawer()
{
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

  this.close = function(){
    $("#drawer").animate({"left": "-300px"}, duration);
  };

  this.open = function(){
    $("#drawer").animate({"left": "0px"}, duration);
  };

  this.toggle = function(){
    if(isOpen())
      close();
    else
      open();
  };

  this.isOpen = function(){
    return $("#drawer").css("left") == "0px";
  };
}

var drawer = new Drawer();
