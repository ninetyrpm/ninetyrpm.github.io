function getFullMapPolygon() {
  var mapBounds = map.getBounds();
  var southwest = mapBounds.getSouthWest();
  var northeast = mapBounds.getNorthEast();

  // Create a polygon with coordinates of southwest and northeast corners
  var fullMapPolygon = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [southwest.lng, southwest.lat],
            [northeast.lng, southwest.lat],
            [northeast.lng, northeast.lat],
            [southwest.lng, northeast.lat],
            [southwest.lng, southwest.lat] // Close the polygon
          ]
        }
      }
    ]
  };
  return fullMapPolygon;
}
