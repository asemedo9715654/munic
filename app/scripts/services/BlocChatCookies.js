(function() {
    function BlocChatCookies($cookies, $uibModal) {
        console.log("TEST");
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $cookies.put('blocChatCurrentUser', 'Guest')
        };
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
