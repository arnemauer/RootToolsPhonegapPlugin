cordova.define("cordova/plugin/com.rtplugin.roottoolsphonegapplugin", function(require, exports, module) {
	rtplugin = {};
	rtplugin.exampleConfiguration = { "publicKey": "", "cooldownPeriod": -1, "enableOnFirstRun": true };
    
  var notificationsToShow = [];
  var notificationsToFilter = [];
  
  var initialized = false;
    
  

	rtplugin.rootAvailable = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "RoottoolsPhonegapPlugin", "rootAvailable", []);
	};
	
	rtplugin.isAccessGiven = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "RoottoolsPhonegapPlugin", "isAccessGiven", []);
	};
	
	
	/*
	plot.disable = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "RoottoolsPhonegapPlugin", "disable", []);
	};
	plot.isEnabled = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "RoottoolsPhonegapPlugin", "isEnabled", []);
	};
	*/
	
	//The data for the debug log on iOS is only collected when the DEBUG preprocessor macro is set.
	rtplugin.mailDebugLog = function(successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, "RoottoolsPhonegapPlugin", "mailDebugLog", [])
	};
	module.exports = rtplugin;
});

