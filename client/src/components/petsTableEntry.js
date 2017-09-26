angular.module('pet-app')
.component('petsTableEntry',{

	bindings: {
		pet : '<'
	},
	controller : function(){
		console.log(this.pet)
	},
	
	template: `
				<div class = "media">
				<div class="media-left media-middle"><img src="{{$ctrl.pet.image}}"class="media-object" style="width:200px" /></div>
				<div class="media-body">
				<div class="raw">name : {{$ctrl.pet.name}}</div>
				<div class="raw">species : {{$ctrl.pet.species}}</div>
				<div>descreption : {{$ctrl.pet.description}}</div>
				<div>username : {{$ctrl.pet.username}}</div>
				<div>Email : {{$ctrl.pet.email}}</div>
				<div>Mobile Number : {{$ctrl.pet.number}}</div>
				</div>
				
			  </div>`
});