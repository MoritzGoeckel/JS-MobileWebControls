##Mobile firendly Web Controls
This is a collection of mobile firendly web controls. It uses JQuery.

##It currently supports:
* Chart
* Navigation Menu (Like the android Navigation Drawer)
* Slider

##Slider
![Simple Slider JS](https://raw.githubusercontent.com/MoritzGoeckel/JS-MobileWebControls/master/slider.gif)

```js
$( document ).ready(function() {
          slider = new Slider('#schieber', '#schiene');
          slider.setValue(0);
          slider.setChangedEvent(onSliderChanged);
      });
      function onSliderChanged(newValue){
          console.log(newValue);
          $("#label").html(newValue);
      }
```

##Drawer
![Simple Drawer JS](https://raw.githubusercontent.com/MoritzGoeckel/JS-MobileWebControls/master/drawer.gif)

##Chart
![Simple Chart JS](https://raw.githubusercontent.com/MoritzGoeckel/JS-MobileWebControls/master/chart.PNG)

```js
var chart = new Chart("myCanvas");
      chart.setData('[{"x": 1, "y": 10}, {"x": 3, "y": 3}, {"x": 5, "y": 4}, {"x": 6, "y": 10}]');
      chart.redraw();
```