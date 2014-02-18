angular.module('searchServices',['ngResource'])
	.factory('Event', function ($resource) {
		return $resource('/Search/api/Event:tags');
	})