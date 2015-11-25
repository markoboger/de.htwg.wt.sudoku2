$(function() {
	console.log("Document is ready");
	$(".cellouter").click(function(event){
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
    $.get("/json/" + row +"/"+ column +"/"+ value, function (data) {
        console.log("Received message from Server ("+ data +")"); 
        //fill_grid(msg);
    });
}

function setShowCandidates(row,column) {
    $.get("/json/" + row +"/"+ column, function (data) {
		console.log("Received message from Server ("+ data +")"); 
        //fill_grid(data);
    });
}

function fill_grid(data) {

}

