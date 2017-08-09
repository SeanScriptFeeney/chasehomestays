(function () {
    "use strict";

    var module = angular.module("chaseHomestays");

    module.component("propertyProfile", {
        templateUrl: "/properties/propertyProfile.component.html",
        controller: PropertyProfile,
        controllerAs: 'model'
    });

    function PropertyProfile(propertyService) {
        this.propertyService = propertyService;
    }

    PropertyProfile.$inject = ['propertyService'];

    PropertyProfile.prototype = {
        $onInit: function () {
            this.loadProperty();
        },
        loadProperty: function () {
            var _this = this;
            _this.$routerOnActivate = function (next, previous) {
                console.log(next.params.id);
                _this.id = next.params.id;

                _this.propertyService.getProperty(_this.id).then(function (property) {
                _this.property = property;
                console.log(property);
            });
            };
        }
    }

}());