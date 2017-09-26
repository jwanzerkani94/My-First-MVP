angular.module('pet-app')
.component('addPet',{

	template: `<center><h2>Post pets information here</h2></center>
	<div class="form-group">
	<div class="panel panel-default">
  <div class="panel-body"><div><form>
 <label for="usr">Pet Name:</label><input type="text"  class="form-control" ng-model=input.name />
<label for="usr">Pet Species:-</label><input type="text"  class="form-control" ng-model=input.species />
<label for="usr">Pet Descreption:-</label><input type="text"  class="form-control" ng-model=input.description />
<label for="usr">Photo Url :- </label><input type="text"  class="form-control" ng-model=input.image />
<label for="usr">Username:- </label><input type="text"  class="form-control" ng-model=input.username />
<label for="usr">Email:- </label><input type="text"  class="form-control" ng-model=input.email />
<label for="usr">Mobile Number:- </label><input type="text"  class="form-control" ng-model=input.number />
<input type="button" class="btn btn-default" value="Submit" ng-click="insertData()" />
</form></div></div>
</div></div>`
});