(function(angular){
	'use strict';
	var mi = angular.module('directives').directive('userCard', UserCardDir);

	function UserCardDir(md5,$log){
		return {
			restrict: 'AE',
			template: [
	            '<div class="user-card">',
	            	'<div class="gravatar">',
	            		'<img ng-src="{{gravatar()}}" alt="{{user.email}}">',
	            	'</div>',
                    '<div class="user-detail">',
                    	'<div class="user-name" ng-bind="user.email"></div>',
                    	'<div class="user-comment" ng-bind="user.comment"></div>',
                    '</div>',
	            '</div>'
	        ].join(''),
			scope: {
				user: '=source'
			},
			link: function(scope, element, attrs){
				scope.gravatar = function(){
					return "http://www.gravatar.com/avatar/" +  md5.createHash(scope.user.email);
				}
			}
		}
	}

	UserCardDir.$inject = ['md5','$log'];


})(angular);