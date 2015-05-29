function Slider(schieberId, schieneId){
    var max = 100;
    var initialValue = 0;
    var onePercent;
    var value;
    var mousePos = {"x": 0, "y": 0};
    var clicked = false;
    var stepsize = 5;

    var width;

    var changedEvent;

    this.setValue = function(newValue){
        value = newValue;
        $(schieberId).css('margin-left', steppyfy(value * onePercent) + "px");
    };

    this.setChangedEvent = function(method){
        changedEvent = method;
    };

    this.getValue = function(){
        return value;
    };

    this.setClickListener = function(){
        var schieber = document.getElementById("schieber");
        $(schieberId).mousedown(function(){ down(); });
        schieber.addEventListener('touchstart', function(event){
            down();
            event.preventDefault();
        });

        $(document).mouseup(function(){ up(); });
        schieber.addEventListener('touchend', function(event){
            up();
            event.preventDefault();
        });

        $(document).mousemove(function(event){
            move(event);
            changedEvent(value);
        });
        schieber.addEventListener('touchmove', function(event){
            move(event.changedTouches[0]);
            changedEvent(value);
            event.preventDefault();
        });
    };

    function move (event){
        mousePos.x = event.pageX - $(schieneId).offset().left;
        mousePos.y = event.pageY - $(schieneId).offset().top;
        if (clicked) {
            var x = mousePos.x;
            var maxX = width;
            console.log("width: " + width);

            if (x > maxX) x = maxX;
            if (x < 0) x = 0;
            $(schieberId).css('margin-left', steppyfy(x) + "px");

            value = steppyfy(x / maxX * max);
        }
    }

    function down(){
        console.log("MouseDown");
        clicked = true;
    }

    function up(){
        console.log("MouseUp");
        clicked = false;
    }

    this.init = function(){
        this.setValue(initialValue);
        width = $(schieneId).width() - 10;
        onePercent = width / max;

        this.setClickListener();
    };

    steppyfy = function(value){
        var newValue =  (value / stepsize).toFixed(0) * stepsize;
        return newValue;
    };

    this.init();
}
