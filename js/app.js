var app = angular.module('pdmadataentry',['ngRoute']);

var baseURL = 'http://localhost/PDMAreporting/';

app.config(function($routeProvider) {
    
    $routeProvider.
      when('/Deadinjured', {
        templateUrl: baseURL+'dataentry/deadinjured',
        controller: 'DeadInjuredCtrl'
    }).
      when('/Housedamage', {
        templateUrl: baseURL+'dataentry/housedamage',
        controller: 'HouseDamageCtrl'
      }).
      when('/Cattles', {
        templateUrl: baseURL+'dataentry/cattles',
        controller: 'CattleCtrl'
        }).
      otherwise({
        redirectTo: '/'
      });
});
 
app.controller('DeadInjuredCtrl', function($scope, $http) {
    // console.log('im here...');
     $http.get(baseURL+'budget/getbudget').success(function(data, status, headers, config){
          $scope.budget = data;
          //console.log(data);
        });

        $scope.AddDeadInjured = function(data){
          //var mydata = JSON.stringify(data);
        
          $scope.message = "Data is being inserted...";
              $http.post('http://localhost/PDMAreporting/deadinjured/add',data).success(function(data, status, headers, config){
  
                $scope.message = "Data Inserted";
              });
        }
});
 
app.controller('HouseDamageCtrl', function($scope, $http) {
        $http.get(baseURL+'budget/getbudget').success(function(data, status, headers, config){
          $scope.budget = data;
          //console.log(data);
        });

        $scope.AddHouseDamage = function(data){
          //var mydata = JSON.stringify(data);
          $scope.message = "Data is being inserted...";
              $http.post('http://localhost/PDMAreporting/house/add',data).success(function(data, status, headers, config){
              
                $scope.message = "Data Inserted";
              });
        }

});

app.controller('CattleCtrl', function($scope, $http) {
        $http.get(baseURL+'budget/getbudget').success(function(data, status, headers, config){
          $scope.budget = data;
          //console.log(data);
        });

  $scope.addCattle = function(data){
    //var mydata = JSON.stringify(data);
    $scope.message = "Data is being inserted...";
        $http.post('http://localhost/PDMAreporting/cattle/add',data).success(function(data, status, headers, config){
          
          $scope.message = "Data Inserted";
        });
    /*
        $http.get('http://localhost/PDMAreporting/cattle/add2/'+1).success(function(data, status, headers, config){
          console.log(data);
        });
    */
  }
});