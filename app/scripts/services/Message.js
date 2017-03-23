(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        
        Message.messages = []; 
        
        Message.getRoomById = function(roomName) {
            var roomRef = ref.orderByChild("roomId").equalTo(roomName);
            Message.messages = $firebaseArray(roomRef);
        }
        
        Message.sendMessage = function(message) {
            var newMessage = {
                content: message,
                username: $cookies.get("blocChatCurrentUser")
            };
            
            Message.messages.$add(newMessage);
        }
        
        return Message;
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();