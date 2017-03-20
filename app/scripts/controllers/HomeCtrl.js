(function() {
  function HomeCtrl($scope, Room, Message, $uibModal, $cookies) {
      
      $scope.rooms = Room.all;
      
      $scope.Message = Message;
      
      $scope.userName = $cookies.get('blocChatCurrentUser');
      
      $scope.createRoom = function() {
          $uibModal.open({
              controller: "ModalCtrl",
              templateUrl: "templates/modal.html"         
          })
      };
      
      $scope.signIn = function() {
          $uibModal.open({
              controller: "UserModalCtrl",
              templateUrl: "templates/usermodal.html"
          }).closed.then(function() {
              $scope.userName = $cookies.get('blocChatCurrentUser');
          })
      };
      
      $scope.signOut = function() {
          $cookies.put('blocChatCurrentUser', 'Guest');
          $scope.userName = $cookies.get('blocChatCurrentUser')
      }
      
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
