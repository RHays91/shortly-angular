angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = Links;
  $scope.getLinks = Links.getLinks;

  Links.getLinks().then(function(links){
    $scope.data.links = links;
  });
  
});
