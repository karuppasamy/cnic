$(document).ready(function() {
    setInterval(function() {
        var randomnumber = Math.round(Math.random() * 100);
        knobfunction(randomnumber);
    }, 1000);

    $("#knob1").knob({
        'width': 80,
        'height': 80,
        'readonly': true,
        'change' : function (v) {  },
        'release' : function (v) {  }
    });
    $("#knob2").knob({
        'width': 80,
        'height': 80,
        'readonly': true,
        'change' : function (v) {  },
        'release' : function (v) {  }
    });
    $("#knob3").knob({
        'width': 80,
        'height': 80,
        'readonly': true,
        'change' : function (v) {  },
        'release' : function (v) {  }
    });
    $("#knob4").knob({
        'width': 80,
        'height': 80,
        'readonly': true,
        'change' : function (v) {  },
        'release' : function (v) {  }
    });

    // $("#knob").knob({
    //     'min': 10,
    //     'max': 20,
    //     'width': 100,
    //     'readonly': true,
    //     'change' : function (v) { console.log(v); },
    //     'release' : function (v) { console.log(v); }
    // });

    function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

var loadLX = function() {
    var imageSource = document.getElementById("ImageSource");
    var Imagesrc1 = '/assets/sec-03f-bg1.jpg';
    var Imagesrc2 = '/assets/sec-03f-bg2.jpg';
    var Imagesrc3 = '/assets/sec-03f-bg3.jpg';
    var Imagesrc4 = '/assets/sec-03f-bg4.jpg';
    setTimeout(function () {imageSource.src = Imagesrc1 }, 20);
    setTimeout(function () { imageSource.src = Imagesrc2 }, 2000);
    setTimeout(function () { imageSource.src = Imagesrc3 }, 2300);
    setTimeout(function () { imageSource.src = Imagesrc4 }, 2600);
    $("body").appendChild(imageSource);
}

function knobfunction(value1){
    $('#knob1')
    .val(value1 * Math.random())
    .trigger('change');
     $('#knob2')
    .val(value1 * Math.random())
    .trigger('change');
     $('#knob3')
    .val(value1 * Math.random())
    .trigger('change');
     $('#knob4')
    .val(value1 * Math.random())
    .trigger('change');
}


