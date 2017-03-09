(function() {
    function ModalCtrl($scope, Room) {
        $scope.createRoom = function() {
            //function created in Room.js that adds a room to the $firebaseArray with a name according to the user input name
        }
        
        $scope.cancel = function() {
            $scope.$close()
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', ModalCtrl]);
})();