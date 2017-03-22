(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        Message.messages = [];
         
        Message.getRoomById = function(roomName) {
            var roomRef = ref.orderByChild("roomId").equalTo(roomName);
            Message.messages = $firebaseArray(roomRef);

        }
        
        Message.sendMessage = function(message) {
            var messageRef = ref.orderByChild("content");
            Message.messages = $firebaseArray(messageRef);
        }
        
        return Message;
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();