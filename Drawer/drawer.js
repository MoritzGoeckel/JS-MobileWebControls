$(function () { //Init
  console.log("Init");
  drawer = new Drawer();

  $("#open-drawer-btn").on('click touchstart',function(event){
    drawer.toggle();
  });
});

function Drawer()
{
  var duration = {duration: 200, specialEasing: "linear"};

  this.close = function(){
    $("#drawer").animate({"left": "-300px"}, duration);
    $("#content-opac").css("width", "0%");
  };

  this.open = function(){
    $("#drawer").animate({"left": "0px"}, duration);
    $("#content-opac").css("width", "100%");
  };

  this.toggle = function(){
    if(this.isOpen())
      this.close();
    else
      this.open();
  };

  this.isOpen = function(){
    return $("#drawer").css("left") == "0px";
  };
}
