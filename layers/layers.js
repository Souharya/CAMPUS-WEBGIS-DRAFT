var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_COLLEGEOUTERBOUNDARY_3 = new ol.format.GeoJSON();
var features_COLLEGEOUTERBOUNDARY_3 = format_COLLEGEOUTERBOUNDARY_3.readFeatures(json_COLLEGEOUTERBOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLLEGEOUTERBOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLLEGEOUTERBOUNDARY_3.addFeatures(features_COLLEGEOUTERBOUNDARY_3);
var lyr_COLLEGEOUTERBOUNDARY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COLLEGEOUTERBOUNDARY_3, 
                style: style_COLLEGEOUTERBOUNDARY_3,
                interactive: true,
                title: '<img src="styles/legend/COLLEGEOUTERBOUNDARY_3.png" /> COLLEGE OUTER BOUNDARY'
            });
var format_ROADS_4 = new ol.format.GeoJSON();
var features_ROADS_4 = format_ROADS_4.readFeatures(json_ROADS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_4.addFeatures(features_ROADS_4);
var lyr_ROADS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_4, 
                style: style_ROADS_4,
                interactive: true,
    title: 'ROADS<br />\
    <img src="styles/legend/ROADS_4_0.png" /> AMTA COLLEGE ROAD<br />\
    <img src="styles/legend/ROADS_4_1.png" /> UDAYNARAYNPUR AMTA ROAD<br />\
    <img src="styles/legend/ROADS_4_2.png" /> WAY 1<br />\
    <img src="styles/legend/ROADS_4_3.png" /> WAY 2<br />\
    <img src="styles/legend/ROADS_4_4.png" /> WAY 4<br />\
    <img src="styles/legend/ROADS_4_5.png" /> WAY 5<br />\
    <img src="styles/legend/ROADS_4_6.png" /> WAY 6<br />\
    <img src="styles/legend/ROADS_4_7.png" /> <br />'
        });
var format_Inner_5 = new ol.format.GeoJSON();
var features_Inner_5 = format_Inner_5.readFeatures(json_Inner_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inner_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inner_5.addFeatures(features_Inner_5);
var lyr_Inner_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inner_5, 
                style: style_Inner_5,
                interactive: true,
    title: 'Inner<br />\
    <img src="styles/legend/Inner_5_0.png" /> Acharya Jagadish Chandra bose bhavan<br />\
    <img src="styles/legend/Inner_5_1.png" /> Acharya prafulla chandara Bhavan<br />\
    <img src="styles/legend/Inner_5_2.png" /> Bike & Cycle Parking<br />\
    <img src="styles/legend/Inner_5_3.png" /> Botany Department Garden<br />\
    <img src="styles/legend/Inner_5_4.png" /> Botany department\'s Garden<br />\
    <img src="styles/legend/Inner_5_5.png" /> Car Parking<br />\
    <img src="styles/legend/Inner_5_6.png" /> GARDEN<br />\
    <img src="styles/legend/Inner_5_7.png" /> Gate !<br />\
    <img src="styles/legend/Inner_5_8.png" /> Gate 2<br />\
    <img src="styles/legend/Inner_5_9.png" /> Gate 3<br />\
    <img src="styles/legend/Inner_5_10.png" /> Gitanjali Bhavan<br />\
    <img src="styles/legend/Inner_5_11.png" /> GRDEN GEETANJALI BHAVAN<br />\
    <img src="styles/legend/Inner_5_12.png" /> Ground 1<br />\
    <img src="styles/legend/Inner_5_13.png" /> Ground 2<br />\
    <img src="styles/legend/Inner_5_14.png" /> GROUND OF GEETANJALI BHAVAN<br />\
    <img src="styles/legend/Inner_5_15.png" /> Heritage Bhavan<br />\
    <img src="styles/legend/Inner_5_16.png" /> IMD WEATER STATION INSTRUMENTS<br />\
    <img src="styles/legend/Inner_5_17.png" /> Meterological Intruments<br />\
    <img src="styles/legend/Inner_5_18.png" /> Open Canteen<br />\
    <img src="styles/legend/Inner_5_19.png" /> Panchanan Chongdar Bhavan<br />\
    <img src="styles/legend/Inner_5_20.png" /> Pond<br />\
    <img src="styles/legend/Inner_5_21.png" /> Rabindra Bhavan<br />\
    <img src="styles/legend/Inner_5_22.png" /> Vidyasagar Bhavan<br />\
    <img src="styles/legend/Inner_5_23.png" /> Vivekananda Bhavan<br />\
    <img src="styles/legend/Inner_5_24.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_COLLEGEOUTERBOUNDARY_3.setVisible(true);lyr_ROADS_4.setVisible(true);lyr_Inner_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_COLLEGEOUTERBOUNDARY_3,lyr_ROADS_4,lyr_Inner_5];
lyr_COLLEGEOUTERBOUNDARY_3.set('fieldAliases', {'id': 'id', });
lyr_ROADS_4.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Inner_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PHOTO': 'PHOTO', });
lyr_COLLEGEOUTERBOUNDARY_3.set('fieldImages', {'id': '', });
lyr_ROADS_4.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Inner_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_COLLEGEOUTERBOUNDARY_3.set('fieldLabels', {'id': 'inline label', });
lyr_ROADS_4.set('fieldLabels', {'id': 'no label', 'NAME': 'header label', });
lyr_Inner_5.set('fieldLabels', {'id': 'no label', 'Name': 'header label', 'PHOTO': 'header label', });
lyr_Inner_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});