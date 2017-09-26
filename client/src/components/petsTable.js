angular.module('pet-app')
.component('petsTable',{

	bindings: {
		pets : '<'
	},
	controller:function(){
		// console.log(this.pets)
	},
	
	template: `<div>
	
				<pets-table-entry pet="pet" ng-repeat="pet in $ctrl.pets">
				</pets-table-entry>
			  </div>`
});