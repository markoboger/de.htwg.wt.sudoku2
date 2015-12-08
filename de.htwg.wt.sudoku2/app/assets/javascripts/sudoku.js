$(function() {
	console.log("Document is ready");
	$(".cellouter").click(function(event){
		var row = $(this).attr("data-row");
		var column = $(this).attr("data-column");
		console.log("Received click at cell ("+ row + "," + column+")");
		setShowCandidates(row, column);
	});
	$(".candidate").click(function(event) {
		var row = $(this).attr("data-row");
		var column = $(this).attr("data-column");
		var value = $(this).attr("data-value");
		console.log("Received click at candidate ("+ row + "," + column + "," + value + ")");
		setValue(row, column, value);
	});
});


function setValue(row,column,value) {
    $.get("/sudoku/" + row + column + value, function (data) {
        location.reload();
    });
}

function setShowCandidates(row,column) {
    $.get("/sudoku/" + row + column, function (data) {
        location.reload();
    });
}

function fill_grid(data) {
	var json = JSON.parse(data);
	var grid  = json.grid;
    var arrayLength = grid.length;
    for (var i = 0; i < arrayLength; i++) {
        var cell = grid[i];
        console.log("found cell ("+ cell.row + "," + cell.column + ")" + cell.value);
        var id=cell.row*10+cell.column;
        if (cell.value !== 0) {
           $("#cell"+id).text(cell.value);
        }
    }
}

