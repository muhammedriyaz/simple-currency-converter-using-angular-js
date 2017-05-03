var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope,$http) {

    $scope.currencies = {"AUD":1.4518,"BGN":1.9558,"BRL":3.4585,"CAD":1.4928,"CHF":1.0852,"CNY":7.5263,"CZK":26.893,"DKK":7.437,"GBP":0.8452,"HKD":8.4937,"HRK":7.457,"HUF":312.2,"IDR":14530.0,"ILS":3.9397,"INR":70.102,"JPY":122.55,"KRW":1233.6,"MXN":20.457,"MYR":4.724,"NOK":9.378,"NZD":1.5782,"PHP":54.577,"PLN":4.2088,"RON":4.5495,"RUB":62.23,"SEK":9.629,"SGD":1.5222,"THB":37.657,"TRY":3.8621,"USD":1.0915,"ZAR":14.489};

    $scope.convert = function(){
    	$http.get("http://api.fixer.io/latest?base=USD")
    	.then(function(response){
    		from_value = $scope.currency_val_from;
    		from_currency_rate = response.data.rates[$scope.currency_from];
    		to_currency_rate = response.data.rates[$scope.currency_to];

    		to_value = from_value*(to_currency_rate/from_currency_rate);
    		if($scope.currency_to == 'USD'){
    			to_value = from_value/from_currency_rate;
    		}
    		if($scope.currency_from == 'USD'){
    			to_value = from_value*to_currency_rate;
    		}

    		$scope.currency_val_to = to_value;
    	});
    }
});