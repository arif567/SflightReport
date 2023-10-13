sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sflight.controller.AirlineInfo", {

            onInit: function () {

               const oRouter =sap.ui.core.UIComponent.getRouterFor(this);

               oRouter.getRoute("RouteAirlineInfo").attachMatched(this.onRouteMatched,this);

            },

            onRouteMatched: function(oEvent){
                const iCarrId =oEvent.getParameter("arguments").carrid;
                const oView = this.getView();

                oView.bindElement({
                    path: "/za_cds_SCARR_view2(carrid='" + iCarrId + "')",

                    events:{
                        dataRequested: function (){
                            oView.setBusy(true);
                        },
                        dataReceived: function(){
                            oView.setBusy(false);
                        }
                    }

                });


            }




            
        });
    });
