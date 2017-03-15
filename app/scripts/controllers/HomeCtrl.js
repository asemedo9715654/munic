(function() {
  function HomeCtrl($scope, Room, Message, $uibModal) {
      $scope.rooms = Room.all;
      $scope.openModal = function() {
          $uibModal.open({
              controller: "ModalCtrl",
              templateUrl: "templates/modal.html"         
          })
      };
      
      $scope.messages = Message.messages;
      $scope.showActiveRoom = function(roomName) {
          Message.getRoomById(roomName);
      };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
