var bulletinApp = angular.module('bulletinApp', ['ngResource']);

bulletinApp.controller('PostsCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.heading = 'Bulletin Board';
  $scope.posts = Post.query();

  $scope.create = function() {
    Post.save($scope.newPost, function(resource) {
      $scope.posts.push(resource)
      $scope.newPost = {}
    }, function(response) {
      console.log("Error: " + response.status);
    });
  };
}]);

bulletinApp.factory('Post', ['$resource', function($resource) {
  return $resource('/posts');
}]);

bulletinApp.filter('noVowels', function() {
  return function(text) {
    if(typeof text !== 'undefined') {
      return text.replace(/[aeiou]/gi,'')
    }
  }
});
