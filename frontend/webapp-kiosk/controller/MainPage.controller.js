sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ygic.timeentry.kiosk.YGIC-TimeSheet-Kiosk.controller.MainPage", {
		onInit: function () {

		},
		handleTimeChange: function(oEvent)
		{
			this.CalcTimeDiff();
		},
		CalcTimeDiff: function()
		{
			var timeFrom = this.byId("idTimeIn").getDateValue();
		 	var timeTo = this.byId("idTimeOut").getDateValue();
		 	if(timeTo === null || timeFrom === null)
		 	{
		 		return;
	 			
		 	}
		 	else
		 	{
		 		var diffInMilliSecs = timeTo - timeFrom;
	 			var diffInMins = ((diffInMilliSecs/1000)/60);
	 			var diff = Math.floor(diffInMins / 60) + "hrs " + (diffInMins % 60) + "mins";
	 			this.byId("idHoursLogged").setNumber(diff);
		 	}
		}
	});
});