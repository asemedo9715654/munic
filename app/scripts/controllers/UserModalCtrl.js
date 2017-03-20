(function() {
    function UserModalCtrl($scope, $uibModalInstance, $cookies) {
        
        $scope.createUser = function(userName) {
            $cookies.put('blocChatCurrentUser', userName);
            $uibModalInstance.close();
        };
    }
    
    angular 
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();