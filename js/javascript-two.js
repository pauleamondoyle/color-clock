window.onload = function(){

	var clock = document.getElementById('timeDiv')
	var colorDiv = document.getElementById('colorDiv')
	var bodyObj = document.getElementsByTagName('body')[0]
	var progBar = document.getElementById('progressBar')
	

// Calculating the time
	
	var getTime = function(){
		var d = new Date()

		var hours = function(){
			var startHour = d.getHours()
			if (startHour === 0) return 12
			else if (startHour > 12) return startHour - 12 
			else return startHour 
		}
			
		var minutes = function(){
			var minuteCount = d.getMinutes()
			if (minuteCount < 10) return "0" + minuteCount
			else return minuteCount
		}
		
		var seconds = function(){
			var secondCount = d.getSeconds()
			if (secondCount < 10) return "0" + secondCount
			else return secondCount
		}
		
		var showTime = function(){
			clock.innerHTML = "<p>" + hours() + ":" + minutes() + ":" + seconds() + "</p>"
		}

		showTime();

	}	

	var chageTime = function(){
		setInterval(getTime, 1000)
	}
		

//------------------------------------------------------------------------

 // Getting background color and progress bar

getSecondsDisplay = function(){ 
	var d = new Date()
 	return d.getSeconds()
}

getMinDisplay = function(){
	var d = new Date ()
	return d.getMinutes()
}

var getHexNum = function(){ 	
 	var intVal = (getMinDisplay()+1)*279513 - getSecondsDisplay()*2;
 	hexValue = intVal.toString(16).toUpperCase()
 	return hexValue
}

var getColor = function(){

	bodyObj.style.background = "-webkit-radial-gradient(center, circle cover, #FFE6EC, #" + getHexNum() + ")";	
}

var displayColor = function(){
	
	colorDiv.innerHTML = "<p>" + "#" + getHexNum() + "</p>"
}

var changeColor = function(){
	setInterval(getColor, 1000)
}

var showColor = function(){
	setInterval(displayColor,1000)		
}

var updateProgress = function(){
	progBar.style.width = getSecondsDisplay()*4 + "px"
}

var showProgress = function(){
	setInterval(updateProgress, 1000)
}


 // ----------------------------------------------------------------------

	showColor();
	changeColor();
	chageTime();
	showProgress();	

}


