var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Survey_1 = new ol.format.GeoJSON();
var features_Survey_1 = format_Survey_1.readFeatures(json_Survey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_1.addFeatures(features_Survey_1);
cluster_Survey_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Survey_1
});
var lyr_Survey_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Survey_1, 
                style: style_Survey_1,
                popuplayertitle: 'Survey',
                interactive: true,
                title: '<img src="styles/legend/Survey_1.png" /> Survey'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Survey_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Survey_1];
lyr_Survey_1.set('fieldAliases', {'fid': 'fid', 'date': 'date', 'notes': 'notes', 'photo': 'photo', });
lyr_Survey_1.set('fieldImages', {'fid': 'Hidden', 'date': 'DateTime', 'notes': '', 'photo': 'ExternalResource', });
lyr_Survey_1.set('fieldLabels', {'date': 'no label', 'notes': 'no label', 'photo': 'no label', });
lyr_Survey_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});