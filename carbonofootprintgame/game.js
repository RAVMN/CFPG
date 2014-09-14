function functionOne() { alert('You clicked the top text'); }
function functionTwo() { alert('You clicked the bottom text'); }

function calcular(){
var vehiculo = document.getElementById("transporte").value; //Que medio usa
var kmdiario = document.getElementById("KMDIA").value;
document.getElementById("resultado1").innerHTML = "Recorriste " + kmdiario + " km";
document.getElementById("resultado2").innerHTML = "La emisión por KM aproximada es de " + vehiculo
var emisiontotal = kmdiario * vehiculo * 365;
document.getElementById("resultado3").innerHTML = "Tu emisión anual proyectada es de " + emisiontotal;

return emisiontotal;

if(emisiontotal < 200000) {
document.body.style.backgroundImage="url('blue.png')";}
else if (emisiontotal > 1000000) {
document.body.style.backgroundImage="url('red.png')";}
else {
document.body.style.backgroundImage="url('grey.png')"}
}

function tirardato(){
document.getElementById("resultado3").innerHTML = "Tu emisión anual proyectada es de " + emisiontotal;
}

var lat1
var lon1
var lat2
var lon2

function getPosition(){
	function success(pos){
		lat1 = pos.coords.latitude;
		lon1 = pos.coords.longitude;
		document.getElementById('posicioninicialguardada').innerHTML="Posición inicial guardada";		
		posicioninicial.style.display = 'none';
		posicionfinal.style.display = 'block';}
	function error(){
		document.getElementById('dynamicdata1').innerHTML='No se pudo obtener la posición'; }
	if("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(success, error); } 
	else {
		document.getElementById('dynamicdata1').innerHTML="Geolocation no soportada"; }
}
function getPosition2(){
	function success(pos){
		lat2 = pos.coords.latitude;
		lon2 = pos.coords.longitude;
		document.getElementById('posicionfinalguardada').innerHTML="Recorriste " + calcCrow(lat1, lon1, lat2, lon2).toFixed(1) + " kilometros lineales de punto a punto";		
			document.getElementById('dynamicdata1').innerHTML="Lat1 " + lat1 + ", long1 " + lon1;
			document.getElementById('dynamicdata2').innerHTML="Lat2  " + lat2 + ", long2 " + lon2;
		posicionfinal.style.display = 'none';
		recorridototal.style.display = 'block';
		/*var posicioneame = d;*/}
	function error(){
		document.getElementById('dynamicdata1').innerHTML='No se pudo obtener la posición'; }
	if("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(success, error); } 
	else {
		document.getElementById('dynamicdata1').innerHTML="Geolocation no soportada"; }
}

    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }


/*function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>La latitud es ' + latitude + '° <br>La longitud es ' + longitude + '°</p>';
    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    output.appendChild(img);  };
  function error() {
    output.innerHTML = "Unable to retrieve your location";  };
  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}*/


	function empezarjuego(){
GameTime.style.display = 'block';
FirstTime.style.display = 'none';
}
function regresarjuego(){
GameTime.style.display = 'block';
UpdateTime.style.display = 'none';
}