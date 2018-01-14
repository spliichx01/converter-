window.$on = function(target, type, cb) {
	target.addEventListener(type, cb, false);
} 

define(["./core", "./temperature", "./showTemperature"],  function	(CORE, temperature, showTemperature)

	CORE.addModule(temperature.id, temperature);
	CORE.addModule(showTemperature.id, showTemperature);

	temperature.init();
	showTemperature.init();

});



window.$on = function(target, type, cb) {
		target.addEventListener(type, cb, false);
}

define(["./core", "./images", "./place"], function(CORE, images, place){
	
	CORE.addModule(images.id, images);
	CORE.addModule(place.id, place);
	
	images.init();
	place.init();

});