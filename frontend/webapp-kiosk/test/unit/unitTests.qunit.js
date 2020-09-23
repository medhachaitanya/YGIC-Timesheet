/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ygic/timeentry/kiosk/YGIC-TimeSheet-Kiosk/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});