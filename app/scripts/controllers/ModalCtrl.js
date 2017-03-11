(function() {
    function ModalCtrl($scope, Room) {
        $scope.createRoom = function() {
            Room.createRoom();
        }
        
        $scope.cancel = function() {
            $scope.$close()
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', ModalCtrl]);
})();