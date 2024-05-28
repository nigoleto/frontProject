var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.442350, 126.571444),
    level: 2
};

var map = new kakao.maps.Map(container, options);

// 지도에 마커 표시
var markerPosition  = new kakao.maps.LatLng(33.442350, 126.571444);
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

// 맵타입, 확대 기능
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);