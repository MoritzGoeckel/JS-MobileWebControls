$(function () { //Init
  console.log("Init");
  chart = new Chart("myCanvas");

  chart.setData('[{"x": 200, "y": 10}, {"x": 200, "y": 10}, {"x": 240, "y": 15}, {"x": 300, "y": 13}, {"x": 500, "y": 11}]');
  chart.redraw();
});

function Chart(container_id)
{
  var chart = $("#"+container_id).get(0);
  var context = chart.getContext("2d");
  var data;


  this.redraw = function(){
    this.calcExtrema();

    //Clear and start
    context.clearRect (0, 0, chart.width, chart.height);
    context.beginPath();

    for(i = 0; i < data.length; i++){
      //Berechne Koordinaten
      var x = data[i].x;
      var y = data[i].y;

      var chartx = (x - minX) / (maxX - minX);
      var charty = (y - minY) / (maxY - minY);

      //Einzeichnen
      if(i === 0)
        context.moveTo(chartx, charty);
      else
        context.lineTo(chartx, charty);
    }

    //Pfad einzeichnen
    context.stroke();
  };

  var maxX = -1000000;
  var minX = 1000000;
  var maxY = -1000000;
  var minY = 1000000;


  this.calcExtrema = function(){
    for(i = 0; i < data.length; i++){
      var x = data[i].x;
      if(x > maxX)
        maxX = x;

      if(x < minX)
        minX = x;

      var y = data[i].y;
      if(y > maxY)
        maxY = y;

      if(y < minY)
        minY = y;
    }

    console.log("X: " + maxX + " <-> " + minX);
    console.log("Y: " + maxY + " <-> " + minY);
  };


  this.setData = function(json){
    data = jQuery.parseJSON(json);
    console.log(data);
  };
}
