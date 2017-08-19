var Main = function () {

  return {
    map: null,

    init: function () {

      Main.initMap();
    },

    initMap: function(){
      var mapCenter = new google.maps.LatLng(40.4437097, -80.00772);
      var mapCanvas = document.getElementById('map_canvas');
      var mapOptions = {
        center: mapCenter,
        zoom: 15,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      Main.map = new google.maps.Map(mapCanvas, mapOptions);
    }
  };
}();