var myMap;
ymaps.ready(function () {
    myMap = new ymaps.Map("ymap", {
        center: [56.829768, 60.615800],
        zoom: 15,
        controls: ["zoomControl"]
    });
    myMap.behaviors.disable('scrollZoom');
});