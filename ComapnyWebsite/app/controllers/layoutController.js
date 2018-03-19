app.controller('navCtrl', ['$scope', '$location',
   function ($scope, $location) {
   	//Redirect to the new location regardless of if it has anchor name
   	$scope.linkTo = function (id) {
   		$location.url(id);
   	};
   }]);

