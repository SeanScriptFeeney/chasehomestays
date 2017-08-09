(function() {
    "use strict";

    var module = angular.module("chaseHomestays");
    
    module.component("chaseHomestaysRoot", {
       templateUrl: "/chasehomestays/chaseHomestaysRoot.component.html",
       $routeConfig: [
           { path: "/properties", component:"propertyList", name: "List" },
           { path: "/propertyprofile/:id", component:"propertyProfile", name: "PropertyProfile" },
           { path: "/**", redirectTo: ["List"] }
           //{ path: "/about", component:"appAbout", name: "About" },
           //{ path: "/detail/:id", component:"movieDetails", name:"Details"},
           //{ path: "/**", redirectTo: ["List"] }
       ] 
    });

}());