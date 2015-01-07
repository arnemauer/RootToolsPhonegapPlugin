cordova.define("cordova/plugin/com.rtplugin.roottoolsphonegapplugin", function(require, exports, module) {
	plot = {};
	plot.exampleConfiguration = { "publicKey": "", "cooldownPeriod": -1, "enableOnFirstRun": true };
    
  var notificationsToShow = [];
  var notificationsToFilter = [];
  
  var initialized = false;
    
	/*
	Notification: {id: …, message: …, data: …}
	*/
    
	function identityFilterCallback(notifications) {
		return notifications;
	}
  
  function defaultNotificationHandler(notification, data) {
  	cordova.exec(undefined, undefined, "PlotCordovaPlugin", "defaultNotificationHandler", [notification, data]);
  }                            
   
 
	//only works on IOS
	plot.filterCallback = identityFilterCallback;
  
  plot.notificationHandler = defaultNotificationHandler; 
  
  plot._runNotificationHandler = function(notification) {
  	if (initialized) {
  		plot.notificationHandler(notification, notification.data);
  	} else {
  		notificationsToShow.push(notification);
  	}
  };
  
  
	plot._runFilterCallback = function(notifications) {
		if (initialized) {
			var result = plot.filterCallback(notifications);
			cordova.exec(undefined, undefined, "PlotCordovaPlugin", "filterCallbackComplete", [result]);
		} else {
			notificationsToFilter.push(notifications);
		}
	};  
  
    
	plot.init = function(configuration, successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "initPlot", [configuration]);
		 initialized = true;
		 
		 for (var i = 0; i < notificationsToShow.length; i++) {
		 		plot._runNotificationHandler(notificationsToShow[i]);  
		 }
		 notificationsToShow = [];
		 
		 
		 for (var i = 0; i < notificationsToFilter.length; i++) {
				plot._runFilterCallback(notificationsToFilter[i]);  
		 }
		 notificationsToFilter = [];
		 
	};
	plot.enable = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "enable", []);
	};
	plot.disable = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "disable", []);
	};
	plot.isEnabled = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "isEnabled", []);
	};
	plot.setCooldownPeriod = function(cooldownSeconds, successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "setCooldownPeriod", [cooldownSeconds]);
	};
	plot.getVersion = function(successCallback, failureCallback) {
		 cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "getVersion", []);
	};
	
	//The data for the debug log on iOS is only collected when the DEBUG preprocessor macro is set.
	plot.mailDebugLog = function(successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, "PlotCordovaPlugin", "mailDebugLog", [])
	};
	module.exports = plot;
});

