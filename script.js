


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
	var elements = document.getElementsByClassName("fill");
	if(progress <= 30){
		rotate = -180 + progress*180/30;
		document.getElementById("demo").innerHTML = rotate;
		$('.fill_right').css("background", "green");
	}else{
		document.getElementById("demo").innerHTML = progress;
				$('.circle .fill_right').css("background", "green");

	}
}