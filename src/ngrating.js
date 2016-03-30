angular.module('ngRating', [])
	.directive('ngRating', ['$timeout', '$interpolate',
		function($timeout, $interpolate) {
			return {
				restrict: 'AE',
				replace: true,
				scope: {
					weight: '=',
					options: '='
				},
				template: '<div class="ngRating ngRatingHolder"><ul></ul><div class="infoCallout" ng-show="calloutText">{{calloutText}}</div></div>',
				compile: function($el, $attrs) {
					return function($scope, $el, $attrs) {
						$scope.weight = $scope.weight || 0;
						$timeout(function() {
							var blocks = $scope.options.blocks || 0;
							if ($scope.options.slabs) {
								if (Object.prototype.toString.call($scope.options.slabs) !== '[object Array]')
									throw 'Slabs should be of type array';
								if (!!$scope.options.slabs)
									blocks = $scope.options.slabs.length;
								else {
									blocks = $scope.options.block;
								}
							}
							var $ul = $el.find('ul');
							for (var i = 1; i <= blocks; i++) {
								$ul.append($interpolate('<li class="b' + i + ' block">{{symbol}}</li>')({
									symbol: ($scope.options.symbol || '&#9733;')
								}));
							}

							var maskedWeight = 0;

							$ul.on('mouseover', function(e) {
								var idx = e.target.classList[0].match(/\d{1,2}/)[0];

								maskLeftBlocks(e.target, idx);
								if ($scope.options.slabs) {
									$scope.$apply(function() {
										$scope.calloutText = $scope.options.slabs[idx - 1];
									})
								}

							})

							$ul.on('click', function(e) {
								$scope.$apply(function() {
									$scope.weight = maskedWeight;
									restoreSymbolColor();
								});
							});

							$ul.on('mouseleave', function() {
								this.style.color = $scope.options.symbolColor;
								restoreSymbolColor();
								$scope.$apply(function() {
									$scope.calloutText = null;
								})

							})

							function restoreSymbolColor() {
								[].slice.call($el.find('li'), $scope.weight).forEach(function(el) {
									el.style.color = $scope.options.symbolColor;
								});
							}

							function maskLeftBlocks($elem, index) {
								if (!$elem) return;
								var elemsToMask = index;
								$liElems = Array.prototype.slice.call($elem.parentElement.childNodes, 0, parseInt(elemsToMask));
								for (var i = 0; i < elemsToMask; i++) {
									$liElems[i].style.color = $scope.options.symbolHoverColor;
								}
								maskedWeight = parseInt(elemsToMask);
							}
						});
					}
				}
			}
		}
	])
