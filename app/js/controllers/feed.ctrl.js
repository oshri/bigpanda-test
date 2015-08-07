(function(angular){
	'use strict';

	var mi = angular.module('controllers').controller('feedCtrl', FeedCtrl);

	function FeedCtrl($log){
		this.comments = [{
			email: 'elik@bigpanda.io',
			comment: 'Hello there, how are you?'
		},{
			email: 'shai@bigpanda.io',
			comment: 'Good!!!'
		},{
			email: 'noam@bigpanda.io',
			comment: 'Gooodbye :)'
		}];

		this.tempComment = {};
	}

	FeedCtrl.prototype.addUser = function(){
		if (!this.tempComment.email == "") {
			this.comments.push(this.tempComment);
			this.tempComment = {};
		}
		
	};

	FeedCtrl.$inject = ['$log'];

})(window.angular);