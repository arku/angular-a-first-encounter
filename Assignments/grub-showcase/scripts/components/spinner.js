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

    spinnerCtrl.showSpinner = false;
    spinnerCtrl.$onInit = function() {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        spinnerCtrl.showSpinner = true;
      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        spinnerCtrl.showSpinner = false;
      });

      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
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
    }
  }
  
}());