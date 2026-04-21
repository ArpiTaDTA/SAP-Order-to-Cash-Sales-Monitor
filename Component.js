sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/salesorders/model/models"
], function (UIComponent, JSONModel, models) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.salesorders.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createDeviceModel(), "device");

            var oSalesModel = models.createSalesOrdersModel(
                sap.ui.require.toUrl("sap/ui/demo/salesorders/model/salesOrders.json")
            );

            this.setModel(oSalesModel, "sales");
            this.setModel(new JSONModel({
                projectTitle: "SAP Order-to-Cash Sales Monitor",
                programName: "ZSODATA",
                serviceName: "ZSO_SALES_ORDERS_SRV",
                sourceTables: "VBAK + VBAP",
                lastLoadedAt: ""
            }), "appState");

            oSalesModel.attachRequestCompleted(function () {
                this.getModel("appState").setProperty("/lastLoadedAt", new Date().toLocaleString());
            }.bind(this));

            this.getRouter().initialize();
        }
    });
});
