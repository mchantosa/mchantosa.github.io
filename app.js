(function() {
    
    var module = angular.module('app', ['ui.bootstrap']);
    
    module.controller('oaksPopupCtrl', ['$scope', '$uibModalInstance', 
        function($scope, $uibModalInstance) {
            $scope.ok = function () {
                $uibModalInstance.close();
             };
        }]);    
    
    module.controller('mainCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
        $scope.title="About Megan Chantosa...";
            var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'oaks-popup.html',
              controller: 'oaksPopupCtrl',
              size: 'md'
            });
    }]);
})();