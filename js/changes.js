"use strict";

$(document).ready(function($){
    let changes = getChanges();

    $("#show-table").on("click", function(e){
        addRows(changes);
        $("#show-table").addClass("hidden");
    });
});

function addRows(changes) {
	for (let i = 0; i < changes.length; i += 3) {
		$('#myTable tr:last').after($('<tr>'));
		$('#myTable tr:last').append($('<th scope="row">').text((i+3)/3));
		$('#myTable tr:last').append($('<td>').text(changes[i].toUpperCase()));
		$('#myTable tr:last').append($('<td>').text("$" + changes[i + 1]));
		$('#myTable tr:last').append($('<td>').text(changes[i + 2]));
	}
}
