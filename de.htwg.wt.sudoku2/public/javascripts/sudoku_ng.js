 var sudokuApp = angular.module('sudokuApp', ['ngSanitize']);
 
 angular.module('sudokuApp')
 .filter('to_trusted', ['$sce', function($sce){
     return function(text) {
         return $sce.asTrustedHtml(text);
     };
 }]);
 
 sudokuApp.controller('SudokuCtrl', function ($scope, $http){
 	$http.get('/json/').success(function(data) {  
 	   $scope.size = data.size;
       $scope.grid = data.grid;  
       $scope.cellHtml=[]
       $scope.cellclicked = function( row, column, value) {
    	   console.log("cell clicked" );
    	   if (value == "\u00A0") {
           	   $http.get('/json/'+row+'/'+column).success(function(data) {
           		   $scope.size = data.size;
                   $scope.grid = data.grid; 
                   fillGrid($scope.size, $scope.grid, $scope.cellHtml);
           	   });
    	   }
       }
       $scope.candidateclicked = function( row, column, value) {
    	   console.log("candidate clicked" );
       	   $http.get('/json/'+row+'/'+column+'/'+value).success(function(data) {
       		   $scope.size = data.size;
               $scope.grid = data.grid; 
               fillGrid($scope.size, $scope.grid, $scope.cellHtml);
       	   });
       }
    
       fillGrid($scope.size, $scope.grid, $scope.cellHtml);
     });   
 });


function fillGrid(size, grid, cellHtml) {
    var arrayLength = grid.length;
    for (var i = 0; i < arrayLength; i++) {
        var cell = grid[i];
        var id=cell.row*10+cell.column;
        if (cell.value == 0) {
        	var candidateCell = angular.element(document.querySelector('#cell'+id))
        	if (cell.candidates !== undefined) {
        		var html="";
        		for (var j = 0; j < size; j++ )	{	
        			if (cell.candidates[j]) {
			    		html = html + '<div class="candidate" ng-click="candidateclicked(cell.row,cell.column,'+ (j+1) +') ">' + (j+1) + '</div>' ;
        			} else {
        				html = html + '<div class="candidate"> &nbsp; </div>';
        			};
        		};
        		cellHtml.splice(id,0,html);
        	} else
        	cellHtml.splice(id,0,"\u00A0");
        } else cellHtml.splice(id,0,cell.value); 	
    }
}

