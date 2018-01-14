define(["./core"], function() {
	function listen(evt, module_id){
		CORE.registerEvents(evt, module_id);
	}

	function notify(evt){
		CORE.triggerEvents(evt);
	}

	return {
		listen: listen,
		notify: notify
	}
});