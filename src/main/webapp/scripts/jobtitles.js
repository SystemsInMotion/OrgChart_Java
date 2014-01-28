$(document).ready(function() {
	$('#addBtn-container').css('width', $('#editableTable').width());

	$('#addBtn').click(function() {
		$('#addBtn-container').fadeToggle("fast", "linear", function() {
			$('#addEntity').fadeToggle("fast", "linear");
		});
	});

    $('#cancelBtn').click(function () {
        $('#addEntity').fadeToggle("fast", "linear", function () {
        });
        $('#addBtn-container').fadeToggle("fast", "linear");
    });

});
