 var sudokuApp = angular.module('sudokuApp', []);
 sudokuApp.controller('SudokuCtrl', function ($scope, $http){
 	$http.get('/json/').success(function(data) {  
 	   $scope.size = data.size;
       $scope.grid = data.grid;  
       $scope.cellclicked = function( row, column, value) {
    	   if (value == "\u00A0") {
           	   $http.get('/json/'+row+'/'+column).success(function(data) {
           		   $scope.size = data.size;
                   $scope.grid = data.grid; 
                   fillGrid($scope.grid);
           	   });
    	   }
       }
       $scope.candidates=[]
       fillGrid($scope.grid, $scope.candidates);
     });   
 	
 	
 });


function fillGrid(grid, candidates) {
    var arrayLength = grid.length;
    for (var i = 0; i < arrayLength; i++) {
        var cell = grid[i];
        var id=cell.row*10+cell.column;
        if (cell.value == 0) {
        	if (cell.candidates) {
        		var candidateCell = angular.element(document.querySelector('#cell'+id))
        		console.log("found a cell with candidates at "+id + " with candidates " + candidates);
    		    candidates.splice(id,0,'' +
					'<div class="candidatecell" ng-repeat="candidate in cell.candidates" >'+
						'<p class="candidatetext">9</p>' +
					'</div>' 
				);
        	}
        	cell.value ="\u00A0";
        }
    }
}

