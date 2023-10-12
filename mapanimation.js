const busStops = [
  [76.96836858666605,11.017184003743793],
  [77.01797872410174,11.028641620104397],
  [77.02994960123718,11.00388866436712],
  [ 77.0488302502839,11.004048909680243],
  [ 77.12861237062205,11.031052884109815]
  

];


// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [76.96836858666605,11.017184003743793],
  zoom: 12,
});


// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker= new mapboxgl.Marker()
            .setLngLat([76.96836858666605,11.017184003743793])
            .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}


// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}