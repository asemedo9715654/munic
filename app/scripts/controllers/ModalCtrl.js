(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        $scope.rooms = Room.all;
        
        $scope.createRoom = function() {
            Room.addRoomToFirebase($scope);
            $uibModalInstance.close();
        }
        
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel')
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();