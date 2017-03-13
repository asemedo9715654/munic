(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var createRoom = function(roomName, $scope) {
        $scope.rooms.$add($scope.roomName);
    }
    
    return {all: rooms, addRoomToFirebase: createRoom}
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
