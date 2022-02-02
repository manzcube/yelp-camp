mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/bright-v8', 
center: campground.geometry.coordinates,
zoom: 11
});

map.addControl(new mapboxgl.NavigationControl())

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h6>${campground.title}</h6><p>${campground.location}</p>`
        )
    )
    .addTo(map) 
