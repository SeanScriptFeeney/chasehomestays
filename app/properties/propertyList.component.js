(function() {
    "use strict";

    var module = angular.module("chaseHomestays");
    
    module.component("propertyList", {
       templateUrl: "/properties/propertyList.component.html",
       controller: PropertyList,
       controllerAs: 'model'
    });

    function PropertyList(propertyService) {
        this.propertyService = propertyService;
    }

    PropertyList.$inject = ['propertyService'];

    PropertyList.prototype = {
        $onInit: function () {
            this.loadProperties();
        },
        loadProperties: function () {
            var _this = this;
            this.propertyService.getProperties().then(function (properties) {
                _this.properties = properties;
            });
        }
    }

}());