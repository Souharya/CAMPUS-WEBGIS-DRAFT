var size = 0;
var placement = 'point';
function categories_ROADS_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'AMTA COLLEGE ROAD':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,215,88,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UDAYNARAYNPUR AMTA ROAD':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,84,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAY 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(123,158,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAY 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,164,64,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAY 4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,68,85,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAY 5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(70,223,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAY 6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,225,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(147,93,235,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ROADS_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ROADS_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
