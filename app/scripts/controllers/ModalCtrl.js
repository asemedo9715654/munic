(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        $scope.rooms = Room.all;
        
        $scope.createRoom = function(roomName) {
            Room.addRoomToFirebase(roomName, $scope);
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