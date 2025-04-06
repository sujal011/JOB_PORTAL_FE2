// app/app.js
const app = angular.module("jobPortalApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "app/views/login.html",
            controller: "LoginController"
        })
        .when("/register", {
            templateUrl: "app/views/register.html",
            controller: "RegisterController"
        })
        .when("/jobs", {
            templateUrl: "app/views/jobs.html",
            controller: "JobsController"
        })
        .when("/create-job", {
            templateUrl: "app/views/createJob.html",
            controller: "CreateJobController"
        })
        .otherwise({
            redirectTo: "/login"
        });
}]);

app.controller("MainController", ["$scope", function($scope) {
    $scope.baseUrl = "http://localhost:3000/api";

    $scope.logout = function() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/#!/login";
    };
    $scope.getLoggedInUser = function() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    };
    // $scope.isEmployer = function() {
    //     const user = $scope.getLoggedInUser();
    //     if (user && user.role === 'employer') {
    //         return true;
    //     }
    //     return false; // Explicitly return false if the user is not an employer
    // }
}]);
