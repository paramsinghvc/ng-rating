# ng-rating
An Angular directive for the implementing rating system in Angular.
#
![ng Rating](https://zippy.gfycat.com/VainThoroughGeese.gif)

### Configuartion options

```
$scope.ratingOptions = {
	blocks: 8,
	slabs: [
		'0 - 100',
		'100 - 200',
		'200 - 300',
		'300 - 400',
		'400 - 500'
	],
	symbol: '&#9733;',
	hoverSymbol: '&#9734;',
	symbolColor: '#ffffff',
	symbolHoverColor: '#ffcc00'
}

```

### Directive Usage :

`<div class="main" weight="weight" ng-rating options="ratingOptions"></div>`
