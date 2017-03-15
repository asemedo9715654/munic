(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    Room.all = $firebaseArray(ref);
      
    Room.addRoomToFirebase = function($scope) {
        Room.all.$add($scope.roomName);
    }
    
    return Room
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
