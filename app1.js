

	var app=angular.module('h',['ui.sortable']);
	app.controller('hc',['$scope','$http',function($scope,$http){
		$scope.list=[];
		var Arr_len;
		$http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
		.success(function(response){
			$scope.names=response;
			Arr_len=response.length/10;
			console.log(Arr_len);
			for(var i=0;i<Arr_len;++i)
			{
				$http.get("https://hacker-news.firebaseio.com/v0/item/" + $scope.names[i] + ".json?print=pretty")
				.success(function(response){
					$scope.list.push(response);
				});
			}
		});
			
	}]);
