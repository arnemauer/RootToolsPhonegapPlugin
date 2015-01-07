package com.rtplugin.RoottoolsPhonegapPlugin;

import android.content.Context;
import android.content.Intent;

import android.net.Uri;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.stericson.RootShell.RootShell;


public class RoottoolsPhonegapPlugin extends CordovaPlugin {

/*
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        handleIntent(cordova.getActivity().getIntent());
    }
*/


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("rootavailable".equals(action)) {
            this.isRootAvailable(callbackContext);
				//} else if ("disable".equals(action)) {
				//    this.disable(callbackContext);
				//} else if ("isEnabled".equals(action)) {
				//    this.isEnabled(callbackContext);
        } else {
            return false;
        }
        return true;
    }


/*
    private void enable(CallbackContext callbackContext) {
        try {
            Plot.enable();
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

	
    private void disable(CallbackContext callbackContext) {
        try {
            Plot.disable();
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

	*/

    private void isRootAvailable(CallbackContext callbackContext) {
        try {
            boolean isAvailable = RootShell.isRootAvailable();
            callbackContext.success(isAvailable ? 1 : 0);
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

	/*
	
    private void setCooldownPeriod(JSONArray args, CallbackContext callbackContext) {
        try {
            try {
                int cooldownseconds = args.getInt(0);
                Plot.setCooldownPeriod(cooldownseconds);
                callbackContext.success();
            } catch (JSONException e) {
                callbackContext.error("Cooldown period not specified or not specified correctly.");
            }
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

    private void getVersion(CallbackContext callbackContext) {
        try {
            String version = Plot.getVersion();
            callbackContext.success(version);
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

    private void mailDebugLog(CallbackContext callbackContext) {
        try {
            Plot.mailDebugLog();
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

    private void defaultNotificationHandler(JSONArray args, CallbackContext callbackContext) {
        try {
            String data = args.getString(1);

            Uri uri = Uri.parse(data);

            Intent openBrowserIntent = new Intent(Intent.ACTION_VIEW, uri);
            openBrowserIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);

            Context context = cordova.getActivity();
            context.startActivity(openBrowserIntent);

            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

	
	*/
	
}

