 var sudokuApp = angular.module('sudokuApp', ['ngSanitize']);
 
 sudokuApp.directive('sudokuGrid' , function () {
		return {
			templateUrl: 'html/sudokuGrid.html'
		}; 
	 });
	 
 sudokuApp.directive('sudokuCell' , function () {
	return {
		templateUrl: 'html/sudokuCell.html'
	}; 
 });
 
 sudokuApp.directive('sudokuValuecell' , function () {
		return {
			templateUrl: 'html/sudokuValueCell.html'
		}; 
	 });
 
 sudokuApp.directive('sudokuCandidatecell' , function () {
		return {
			templateUrl: 'html/sudokuCandidateCell.html'
		}; 
	 });
 
 sudokuApp.controller('SudokuCtrl', function ($scope, $http){
 	$http.get('/json/').success(function(data) {  
 	   $scope.size = data.size;
       $scope.grid = data.grid;  
       $scope.cellclicked = function( row, column, value) {
    	   if (value == "\u00A0") {
           	   $http.get('/json/'+row+'/'+column).success(function(data) {
           		   $scope.size = data.size;
                   $scope.grid = data.grid; 
           	   });
    	   }
       }
       $scope.candidateclicked = function( row, column, value) {
       	   $http.get('/json/'+row+'/'+column+'/'+value).success(function(data) {
       		   $scope.size = data.size;
               $scope.grid = data.grid;       
       	   });
       }
     });   
 });
