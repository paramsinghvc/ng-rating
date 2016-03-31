angular.module('myApp', ['ngRating'])
	.controller('indexController', function($scope) {
		$scope.weight = 0;
		$scope.ratingOptions = {
			blocks: 8,
			// slabs: [
			// 	'0 - 100',
			// 	'100 - 200',
			// 	'200 - 300',
			// 	'300 - 400',
			// 	'400 - 500'
			// ],
			symbol: '&#9733;',
			hoverSymbol: '&#9734;',
			symbolColor: '#ffffff',
			symbolHoverColor: '#ffcc00'
		}
	})

angular.bootstrap(document, ['myApp'])
