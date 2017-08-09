(function() {
    "use strict";

    var module = angular.module("chaseHomestays", ["ngComponentRouter", "property.service"]);
    
    module.value("$routerRootComponent", "chaseHomestaysRoot");

}());