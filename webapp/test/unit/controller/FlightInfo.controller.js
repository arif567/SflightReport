/*global QUnit*/

sap.ui.define([
	"sflight/controller/FlightInfo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FlightInfo Controller");

	QUnit.test("I should test the FlightInfo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
