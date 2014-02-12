$(document).ready(function() {
	$('#addBtn-container').css('width', $('#t1').width());

	$('#addBtn').click(function() {
		$('#addBtn-container').fadeToggle("fast", "linear", function() {
			$('#addEntity').fadeToggle("fast", "linear");
		});
	});
	$('.cancelBtn').click(function() {
		$('#addEntity').hide();
		$('#editEntity').hide();
		$('#addBtn-container').fadeToggle("fast", "linear");
	});
	$('.editBtn').click(function() {
		$('#addEntity').hide();
		$('#editEntity').fadeToggle("fast", "linear");
		$('#addBtn-container').hide();
		$('#editDepartmentId').hide();
		$('#t1 tr').click(function() {
			
			$('#editDepartmentId').val(this.id);
			//console.log($(this).children()[0].innerHTML);
			$('#editDepartmentName').val($(this).children()[0].innerHTML);
			//$('#editDepartmentName').val("Hello")
			$('#editParentDepartmentId').val($(this).children()[1].className);
			$('#editDepartmentManagerId').val($(this).children()[2].className);
			

		});

	});
	
});
