app.controller("ProfileController", ["$scope", "$http", function($scope, $http) {
    $scope.uploadResume = function() {
        if (!$scope.resumeFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("resume", $scope.resumeFile);

        const token = document.cookie.split("; ").find(row => row.startsWith("token=")).split("=")[1];

        $http.post(`${$scope.baseUrl}/users/upload-resume`, formData, {
            headers: {
                "Content-Type": undefined, // Let the browser set the Content-Type
                Authorization: `Bearer ${token}`
            }
        })
        .then(function(response) {
            alert("Resume uploaded successfully!");
            console.log("Upload response:", response.data);
        })
        .catch(function(error) {
            alert("Failed to upload resume: " + (error.data.message || "Unknown error"));
            console.error("Error details:", error);
        });
    };
}]);