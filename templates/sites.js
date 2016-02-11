(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sites'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.hidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    \r\n	<li class=\"glide__slide\">\r\n	    \r\n    	<div class=\"title center noselect\" style=\"color: "
    + alias4(((helper = (helper = helpers.marker_color || (depth0 != null ? depth0.marker_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marker_color","hash":{},"data":data}) : helper)))
    + "\"> \r\n    		<span class=\"left back_icon\"><i class=\"material-icons\">arrow_back</i></span>\r\n    		<span class=\"id_icon\" style=\"background-color: "
    + alias4(((helper = (helper = helpers.marker_color || (depth0 != null ? depth0.marker_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marker_color","hash":{},"data":data}) : helper)))
    + "\">\r\n    			<span class=\"id_num\">\r\n    				"
    + alias4((helpers.zeroPad || (depth0 && depth0.zeroPad) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),2,{"name":"zeroPad","hash":{},"data":data}))
    + "\r\n    			</span>\r\n    		</span>\r\n    		<span class=\"title-text\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n            <!-- <span class=\"right add-to-route\"><i class=\"material-icons\">more_vert</i></span> -->\r\n              <!-- Dropdown Trigger -->\r\n          <a class='dropdown-button right menu' href='#' data-activates='dropdown"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'><i class=\"material-icons\">menu</i></a>\r\n\r\n          <!-- Dropdown Structure -->\r\n          <ul id='dropdown"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class='dropdown-content'>\r\n            <li class=\"\"><a href=\"#!\" class=\"addtoroute\"><span class=\"add\"></span></a></li>\r\n            <li class=\"GoogleDirectionsModal disabled\"><a href=\"#GoogleDirections\" modal-trigger class=\"getroute\"><img src=\"img/gmap.png\" class=\"gmap-icon\"/> Get Directions</a></li>\r\n            <li><a href=\"#!\" class=\"mylocation\" ><span class=\"loc_enabled\"><i class=\"material-icons\">my_location</i> GPS enabled</span><span class=\"loc_disabled\"><i class=\"material-icons\">location_disabled</i> GPS disabled</span></a></li>\r\n            <!-- <li><a href=\"#!\" class=\"logout\" ><i class=\"material-icons\">power_settings_new</i> Logout</a></li> -->\r\n          </ul>\r\n\r\n    	</div>\r\n        \r\n            <div class=\"description animated invisible\">\r\n            <p class=\"address\">"
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + "</p>\r\n                <p class=\"designedby\">Designed by "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.designers : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\r\n                <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n                  \r\n            \r\n        </div>\r\n	    <div class=\"back\" style=\"background-image: url('img/cards/card-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ".svg'); background-color: "
    + alias4(((helper = (helper = helpers.background_color || (depth0 != null ? depth0.background_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"background_color","hash":{},"data":data}) : helper)))
    + "; \">\r\n	        <div class=\"middle\">\r\n	        	<div class=\"front\">\r\n	            	<div class=\"sunflower-ripple ripple-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n	            	<div class=\"sunflower-button\">\r\n	            	</div>\r\n            	</div>\r\n	        </div>          \r\n	    </div>\r\n\r\n	</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(container.lambda(depth0, depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.first),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return ", ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.first),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return " and ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.sites : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();