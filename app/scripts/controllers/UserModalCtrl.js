(function() {
    function UserModalCtrl($scope, $uibModalInstance, Room) {
        $scope.createUser = function() {
            // create a new user
        };
        
        
    }
    
    angular 
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', 'Room', UserModalCtrl]);
})();