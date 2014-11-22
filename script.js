


var myVar=setInterval(function(){updateTime()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function updateTime(){
	var today = new Date();
	var hour = today.getHours();
	var mins = today.getMinutes();
	var secs = today.getSeconds();	
	
	updateProgress(secs);
}

function updateProgress(progress){
	
	if(progress <= 30 && progress >0){
		rotate = -180 + progress*180/30;
		$('.fill_right').css("-webkit-transform", "rotate(" + rotate +"deg)");
		$('.fill_right').css("-ms-transform", "rotate(" + rotate +"deg)");
		$('.fill_right').css("transform", "rotate(" + rotate +"deg)");
		
		$('.fill_left').css("-webkit-transform", "rotate(0deg)");
		$('.fill_left').css("-ms-transform", "rotate(0deg)");
		$('.fill_left').css("transform", "rotate(0deg)");
		
		$('.fill_right').css("z-index", "1");
		$('.fill_left').css("z-index", "2");
	}else{
		rotate = (progress-30)*180/30;
		
		$('.fill_left').css("-webkit-transform", "rotate(" + rotate +"deg)");
		$('.fill_left').css("-ms-transform", "rotate(" + rotate +"deg)");
		$('.fill_left').css("transform", "rotate(" + rotate +"deg)");
		
		$('.fill_right').css("-webkit-transform", "rotate(0deg)");
		$('.fill_right').css("-ms-transform", "rotate(0deg)");
		$('.fill_right').css("transform", "rotate(0deg)");
		
		$('.fill_right').css("z-index", "2");
		$('.fill_left').css("z-index", "1");
	}
	
	 document.getElementById("second").innerHTML = progress;
}