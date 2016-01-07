/** * Created by Apurva on 02/01/2016. */

var storeLocator = angular.module('storeLocator', []);

storeLocator.controller('StoreListCtrl', function($scope, $http){
    $http.jsonp('http://127.0.0.1:8080/Locator/').success(function(data){
    /*using jsonp for the Cross Origin resource Sharing (CORS) issue.*/
        $scope.Stores = data['Store_list'];
    }).error(function(data){console.log('No or Erroneous data');});
    /*[
     {'pincode':'411019',
     'address':'Some Place'}
     ]*/
});