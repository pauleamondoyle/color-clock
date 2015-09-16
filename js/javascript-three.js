window.onload = function(){

	var clock = document.getElementById('timeDiv')
	var colorDiv = document.getElementById('colorDiv')
	var bodyObj = document.getElementsByTagName('body')[0]
	var progBar = document.getElementById('progressBar')
	

// Calculating the time
	
	var getHours = function(){
		var d = new Date()
		var startHour = d.getHours()
		if (startHour === 0) return 12
		else if (startHour > 12) return startHour - 12 
		else return startHour 
	}
			
	var getMinutes = function(){
		var d = new Date()
		var minuteCount = d.getMinutes()
		if (minuteCount < 10) return "0" + minuteCount
		else return minuteCount
	}
		
	var getSeconds = function(){
		var d = new Date()
		var secondCount = d.getSeconds()
		if (secondCount < 10) return "0" + secondCount
		else return secondCount
	}

// Displaying the time

	var showTime = function(){
		clock.innerHTML = "<p>" + getHours() + ":" + getMinutes() + ":" + getSeconds() + "</p>"
	}

	// var chageTime = function(){
	// 	setInterval(showTime, 1000)
	// }
		

//------------------------------------------------------------------------

 // Getting background color and progress bar


	var getHexNum = function(){ 	
	 	var intVal = (getMinutes()+1)*279513 - getSeconds()*8;
	 	hexValue = intVal.toString(16).toUpperCase()
	 	return hexValue
	}

	var assignGradient = function(){
		bodyObj.style.background = "-webkit-radial-gradient(center, circle cover, #FFE6EC, #" + getHexNum() + ")";	
	}

	var displayColor = function(){
		colorDiv.innerHTML = "<p>" + "#" + getHexNum() + "</p>"
	}

	// var changeColor = function(){
	// 	setInterval(assignGradient, 1000)
	// }

	// var showColor = function(){
	// 	setInterval(displayColor,1000)		
	// }

	var updateProgress = function(){
		progBar.style.width = getSeconds()*4 + "px"
	}

	// var showProgress = function(){
	// 	setInterval(updateProgress, 1000)
	// }


 // ----------------------------------------------------------------------
	var showPage = function(){
		displayColor();
		assignGradient();
		showTime();
		updateProgress();	
	}

	var updatePage = function(){
		setInterval(showPage, 1000)
	}

	updatePage();




}


