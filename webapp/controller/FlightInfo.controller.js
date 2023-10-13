sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sflight.controller.FlightInfo", {

            onInit: function () {},

            handAirlinePress: function(oEvent){

                

                var selectedCarrid = oEvent.getSource().getBindingContext().getProperty("carrid");
                console.log(selectedCarrid);
                
                var oRouter =sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("RouteAirlineInfo",{
                    carrid: selectedCarrid 
                })


            }



            
        });
    });
