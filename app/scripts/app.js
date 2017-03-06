(function() {
  function config ($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/'
      });

    }

  angular
    .module('blocChat', ['ui.router', 'firebase'])

})();
