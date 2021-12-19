app = angular.module("AngularApp",[])
.controller("EmployeeController", function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Employees.xml"
    }).then (function mySucces(respone){
        $scope.employees=respone.data
    }, function myError(respone){
        $scope.dataError=respone.statusText
    })
})