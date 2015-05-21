$(function () { //Init
  console.log("Init");
  chart = new Chart();

  chart.setData("[{x: 200, y: 10}, {x: 200, y: 10}, {x: 240, y: 15}, {x: 300, y: 13}, {x: 500, y: 11}]");
  chart.calcExtrema();
});

function Chart(container_id)
{
  var chart = $("#"+container_id);
  var data;

  this.redraw = function(){

  };

  var biggestX;
  var lowestX;
  var biggestY;
  var lowestY;
  this.calcExtrema = function(){
    for(i = 0; i < data.length; i++){
      alert(data[i]);
    }
  };

  this.setData = function(json){
    data = jQuery.parseJSON(json);
  };
}
