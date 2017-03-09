$(document).ready(function(){
	$('#publicar').click(function(){
		var post = document.getElementById('postInput').value;
		var tipo = document.getElementById('select').value;

		sessionStorage.setItem("post",post);
		sessionStorage.setItem("tipo",tipo);

		document.getElementById('postInput').value="";
		document.getElementById('select').value="";
	});
});


$(document).ready(function(){
	$('#public').click(function(){

	});
});



$(document).ready(function(){
	$('#friend').click(function(){
		var input =document.getElementById('div');
		var filter;

		for (var i = 0; i < input.length; i++) {
			filter[i].
		}
	});
});
