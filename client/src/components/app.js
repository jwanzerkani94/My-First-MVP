angular.module('pet-app',[])
.component('app',{
	controller :function(){
		this.pets = window.examplePetsData
		console.log(this.pets)
		
	// 	this.insertData=()=>{
	// 		$.ajax({
 //  			type: "POST",
 // 			 url: '/addPet',
 // 			 data: {$scope.input},
 //  			success: function(data){

 //  			},
 //  			dataType: "application/json"
	// 		});
	// 	}

	// 	$scope.insertData=function(){		
 //    $http.post("/addPet", {$scope.input})
 //    .success(function(data,status,headers,config){
 //    console.log("Data Inserted Successfully");
 //    });
 //        }
	},
	
	template: `<div>
	<search>
		<h3>search</h3>
	</search>
</div>
	
<div>
	<add-pet>
		<h3>Add Pet</h3>
	</add-pet>
</div>

<div>
	<pets-table pets="$ctrl.pets">
		<h3>View Pets</h3>
	</pets-table>
</div>
`
});