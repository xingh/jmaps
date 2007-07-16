/* jQuery Maps (jMaps) - A jQuery plugin for Google Maps API
 * Author: Tane Piper (digitalspaghetti@gmail.com) 
 * With special thanks Dave Cardwell (who helped on getting this plugin to work).
 * Website: http://code.google.com/p/gmapp/
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * For Google Maps API see http://www.google.com/apis/maps/
 * Version 1.1 (16/07/2007)
 */
(function($){function searchAddress(c,d,e,f){e.getLatLng(d,function(a){if(!a){alert(d+" not found")}else{c.setCenter(a,f.zoom);var b=new GMarker(a,{draggable:true});c.addOverlay(b);b.openInfoWindowHtml("Latitude: "+mylocation.lat()+"<br />Longitude: "+mylocation.lng());GEvent.addListener(b,"dragend",function(){mylocation=b.getPoint();b.openInfoWindowHtml("Latitude: "+mylocation.lat()+"<br />Longitude: "+mylocation.lng())})}})};$.fn.extend({jmap:function(b){var c="0.1";b=jQuery.extend({maptype:G_HYBRID_TYPE,center:[55.958858,-3.162302],zoom:12,control:"small",showtype:true,showoverview:true,dragging:true,scrollzoom:true,smoothzoom:true,searchfield:"#Address",searchbutton:"#findaddress"},b);if(GBrowserIsCompatible()){return this.each(function(){var a=this.GMap2=new GMap2(this);GGeocoder=new GClientGeocoder();this.GMap2.setCenter(new GLatLng(b.center[0],b.center[1]),b.zoom,b.maptype);switch(b.control){case"small":this.GMap2.addControl(new GSmallMapControl());break;case"large":this.GMap2.addControl(new GLargeMapControl());break;case"none":break;default:this.GMap2.addControl(new GSmallMapControl())}if(b.showtype==true){this.GMap2.addControl(new GMapTypeControl())}if(b.showoverview==true){this.GMap2.addControl(new GOverviewMapControl())}if(b.scrollzoom==true){this.GMap2.enableScrollWheelZoom()}if(b.smoothzoom==true){this.GMap2.enableContinuousZoom()}if(b.dragging==false){this.GMap2.disableDragging()}jQuery(b.searchbutton).bind('click',function(){searchAddress(a,jQuery(b.searchfield).attr('value'),GGeocoder,b)});jQuery(document).unload(function(){GUnload()})})}},myMap:function(){return this[0].GMap2},addPoint:function(a,b,c,d,e){var f=this[0].GMap2;console.log(f);var g=new GMarker(new GLatLng(a,b),{draggable:d});GEvent.addListener(g,"click",function(){g.openInfoWindowHtml(c)});if(e==true){GEvent.addListener(g,"dblclick",function(){return f.removeOverlay(g)})}return f.addOverlay(g)},addPoly:function(a){var b=this[0].GMap2;return b.addOverlay(a)},addKml:function(a){var b=this[0].GMap2;var c=new GGeoXml(a);return b.addOverlay(c)},directions:function(a,b){var c=this[0].GMap2;var d=document.getElementById(b);directions=new GDirections(c,d);directions.load(a)}})})(jQuery);