$(document).ready(function() {
	$('#addBtn').click(function() {
		$('#addBtn-container').fadeToggle("fast", "linear", function() {
			$('#addEntity').fadeToggle("fast", "linear");
		});
	});
	
	$('#cancelAddBtn').click(function(e){
		e.preventDefault();
		$('#addEntity').fadeToggle("fast", "linear", function() {
			$('#addBtn-container').fadeToggle("fast", "linear");
		});
		
		$('#addEntity input[type=text], #addEntity select').val("");
	});
	
	$('.editBtn').click(function() {
		cancelEdit($('.activeEdit .cancelDeptEditBtn').val(), false);
		
		var deptNum = $(this).val();
		$('#deptRow'+deptNum).fadeToggle("fast","linear",function(){
			$('#editDeptRow'+deptNum).fadeToggle("fast","linear",function(){
				$(this).addClass('activeEdit');
			});
		});
		
		$('#editDeptRow'+deptNum+' .editDeptName').val($('#deptRow'+deptNum+' .deptName').data('value'));
		$('#editDeptRow'+deptNum+' .editDeptParent').val($('#deptRow'+deptNum+' .deptParent').data('value'));
		
		if($('#t1 #th').hasClass('activeTH')){
			$('#t1 #th').fadeToggle("fast","linear", function(){
				$(this).removeClass('activeTH');
				$('#t1 #thEdit').fadeToggle("fast","linear", function(){
					$(this).addClass('activeTH');
				});
			});
		}
	});
	
	$('.cancelEditBtn').click(function(e){
		e.preventDefault();
		var ID = $(this).val();
		cancelEdit(ID, true);
	});
	
	$('.removeBtn').click(function(){	
		$.ajax({
			type: "POST",
			url: "depts",
			data: {
				_method: "delete",
				id: $(this).val()
			},
			success: function(){
				window.location.href="depts";
			}
		});
	});
	
	$('.saveBtn').click(function(){
		var deptNum = $(this).val();
		var deptName = $('#editDeptRow'+deptNum+' .editDeptName').val();
		var parentId = $('#editDeptRow'+deptNum+' .editDeptParent').val();
		
		$.ajax({
			type: "POST",
			url: "depts",
			data: {
					_method: "put",
					id: deptNum,
					name: deptName, 
					parentId: parentId
				  },
			success: function(){
				window.location.href="depts";
			}
		});
	});
});

function cancelEdit(ID, editing){
	$('#editDeptRow'+ID).fadeToggle("fast","linear",function(){
		$(this).removeClass('activeEdit');
		$('#deptRow'+ID).fadeToggle("fast","linear");
	});
	
	$('#editDeptRow'+ID+' .editDeptName').val("");
	$('#editDeptRow'+ID+' .editDeptParent').val("");
	
	if(editing){
		$('#t1 #thEdit').fadeToggle("fast","linear", function(){
			$(this).removeClass('activeTH');
			$('#t1 #th').fadeToggle("fast","linear", function(){
				$(this).addClass('activeTH');
			});
		});
	}
}
