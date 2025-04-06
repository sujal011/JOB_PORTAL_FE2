app.controller("JobsController", ["$scope", "$http", function($scope, $http) {
    $scope.jobs = [];
    $scope.error = null;

    // Fetch jobs from the API
    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    if (!token) {
        window.location.href = "/#!/login";
        return;
    }
    
    $http.get($scope.baseUrl + "/jobs", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(function(response) {
console.log($scope.getLoggedInUser());
            
            $scope.jobs = response.data;
        })
        .catch(function(error) {
            $scope.error = "Failed to load jobs. Please try again later.";
            console.error(error);
        });
}]);