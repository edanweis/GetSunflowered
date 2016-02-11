GetSunflowered
===

Mapping webapp for #GetSunflowered project.

The GetSunflowered is a quick Vanilla JQuery + html5, CSS website with no underlying database or CMS. It must be updated manually.


Updating / adding data
---

To modify the data, go to [JSON Editor Online](http://www.jsoneditoronline.org/?id=2d63664b5d0c1dd468f033d88925d2c2) and edit the GetSunflowered JSON data. When done, save it as `data.json`. Be sure to open it, and add the following code, wrapping the original code with a few lines at the beginning/end, as shown below:

```
var context = {
    sites:
```
Contents of data.json

`}`

Updating Markers and Map style
---

To change marker coordinates, visit [geojson.io](http://geojson.io/) and open the file `markers.geojson`. Only lat/lng coordinates are referenced from this file, not properties. Make adjustments and then download the file when done. Visit [Mapbox Studio](https://www.mapbox.com/studio/) and upload it as a new dataset for the layer titled: `GetSunflowered Sites (edit at geojson.io)` in the Mapbox editor - choose "Select data" and upload it.

Visit [Mapbox Studio](https://www.mapbox.com/studio/) and open the GetSunflowered style, or upload `GetSunflowered-Mapbox.json` as a new style to begin editing. If creating a new style, be sure to copy the style URL Eg: `mapbox://styles/edanweis/cijeagq2s00dh0altk7fewog0` into the app, eg:

```
 var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/edanweis/cijeagq2s00dh0altk7fewog0', //your style URL goes here.
            center: [144.9613418,-37.8148271],
            zoom: zoom_level
        });
```

**Note** Make sure all files are saved over/in the same location.


Testing locally
---
You can simply open index.html in your browser for testing. (Geolocation will not work unless run on a server).