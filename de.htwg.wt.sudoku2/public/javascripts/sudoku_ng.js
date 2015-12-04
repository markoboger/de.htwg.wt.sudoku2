$(function() {

	$(".cell").click(function(event){
		var row = $(this).attr("data-row");
		var column = $(this).attr("data-column");
		console.log("Received click at cell ("+ row + "," + column+")");
		setShowCandidates(row, column);
	});
	$(".candidatecell").click(function(event) {
		var row = $(this).attr("data-row");
		var column = $(this).attr("data-column");
		var value = $(this).attr("data-value");
		console.log("Received click at candidate ("+ row + "," + column + "," + value + ")");
		setValue(row, column, value);
	});
});


function setValue(row,column,value) {
	console.log("Received click at cell ("+ row + "," + column+")");

    $.get("/json/" + row +"/"+ column +"/"+ value, function (data) {
        fillGrid(data);
    });
}

function setValue() {
	console.log("function called");
}

function setShowCandidates(row,column) {
    $.get("/json/" + row +"/"+ column, function (data) {
        fillGrid(data);
    });
}

function fillGrid(grid) {
    var arrayLength = grid.length;
    for (var i = 0; i < arrayLength; i++) {
        var cell = grid[i];
        var id=cell.row*10+cell.column;
        if (cell.value == 0) {
        	cell.value ="\u00A0";
        }
    }
}

