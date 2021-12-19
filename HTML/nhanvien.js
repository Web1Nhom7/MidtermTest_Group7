app = angular.module("AngularApp",[])
.controller("EmployeeController", function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Employees.xml"
    }).then (function mySucces(response){
        $scope.employees=response.data
    }, function myError(response){
        $scope.dataError=response.statusText
    })
})