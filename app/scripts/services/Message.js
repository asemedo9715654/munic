(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        Message.messages = [];
         
        Message.getRoomById = function(roomName) {
            console.log(roomName);
            var roomRef = ref.orderByChild("roomId").equalTo(roomName);
            Message.messages = $firebaseArray(roomRef);

        }
        
        return Message;
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();