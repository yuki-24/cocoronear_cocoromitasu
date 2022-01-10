function initialize() {
  var latlng = new google.maps.LatLng(34.746021, 135.482505);
  var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	scrollwheel: false,
	panControl: false,
    mapTypeControl: false,
	streetViewControl: false,
	draggable: true
  };
  var icon = new google.maps.MarkerImage('http://cocoromitasu.com/wp/wp-content/themes/cocoromitasu_seo/images/mappin.png',
  new google.maps.Size(57,64),
  new google.maps.Point(0,0),
  new google.maps.Point(28,64)
);
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  var markerOptions = {
  position: latlng,
  map: map,
  icon: icon,
  title: 'COCOROMITASU'
  
};
var marker = new google.maps.Marker(markerOptions);
var styleOptions = [
   {
    "stylers": [
      { "hue": "#4ab8cd" },
      { "saturation": -20 },
      { "lightness": -3 }
    ]
  },{
    "featureType": "poi",
  }
];

var lopanType = new google.maps.StyledMapType(styleOptions);
map.mapTypes.set('noText', lopanType);
map.setMapTypeId('noText');

}