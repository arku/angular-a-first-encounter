(function () {
  'use strict';

  angular.module('Spinner')
    .component('spinner', {
      templateUrl: 'views/spinner.html',
      controller: SpinnerController
    });

    SpinnerController.$inject = ['$rootScope', '$state'];
    function SpinnerController($rootScope, $state) {
    var spinnerCtrl = this;
    var events = [];
    spinnerCtrl.showSpinner = false;

    spinnerCtrl.$onInit = function() {
      var event = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        spinnerCtrl.showSpinner = true;
      });
      events.push(event);

      event = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        spinnerCtrl.showSpinner = false;
      });
      events.push(event);

      event = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        spinnerCtrl.showSpinner = false;
        swal({
          title: 'Oops...',
          text: 'No internet connection',
          type: 'error',
          closeOnConfirm: false,
          confirmButtonText: 'Go home'
        },
          function() {
            $state.go('home');
            swal.close();
          }
        );
      });
      events.push(event);
    };

    spinnerCtrl.$onDestroy = function() {
      events.forEach(function(event) {
        event();
      });
    };



  }
  
}());