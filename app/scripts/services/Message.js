(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        
        Message.messages = [];
        
        Message.currentRoom =
        
        Message.getRoomById = function(roomName) {
            var roomRef = ref.orderByChild("roomId").equalTo(roomName);
            Message.messages = $firebaseArray(roomRef);

        }
        
        Message.sendMessage = function(message, roomName) {
            var newMessage = {
                content: message
            }
            
            Message.messages.$add(newMessage);
        }
        
        return Message;
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();