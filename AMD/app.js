window.$on = function(target, type, cb) {
	target.addEventListener(type, cb, false);
} 

define(["./core", "./temperature", "./showTemperature"],  function	(CORE, temperature, showTemperature){

	CORE.addModule(temperature.id, temperature);
	CORE.addModule(showTemperature.id, showTemperature);

	temperature.init();
	showTemperature.init();

});
