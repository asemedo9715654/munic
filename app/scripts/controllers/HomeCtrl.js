(function() {
  function HomeCtrl($scope, Room, $uibModal) {
      $scope.rooms = Room.all;
      $scope.openModal = function() {
          $uibModal.open({
              controller: "ModalCtrl",
              templateUrl: "templates/modal.html"         
          }) 
      };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
