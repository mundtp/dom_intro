
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
   var pNode = document.querySelector('#compoundInvestment')
var value = pNode.textContent
pNode.textContent = parseInt(value) * 2
})





document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleNode = document.querySelector('#circle-bw')
  if (circleNode.style.backgroundColor === "white"){
  	circleNode.style.backgroundColor = 'black'
  }
  else{circleNode.style.backgroundColor = 'white'}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circleNode = document.querySelector('.circle-red')
  var computedStyle = window.getComputedStyle(circleNode)
  var intWidth = parseInt(computedStyle.width)
  var intHeight = parseInt(computedStyle.height)
  circleNode.style.width = (intWidth + 40) + "px"
  circleNode.style.height = (intWidth + 40) + "px"
  if(intWidth >= 320){
  	circleNode.style.width = "40px"
  circleNode.style.height = "40px"
  }
 
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  	var ulNode = document.querySelector(".answer-box > ul")
	var liNodes = ulNode.querySelectorAll("li")
  	for (var i = 0; i < liNodes.length; i ++) {
    var liNode = liNodes[i]
    	if (liNode.classList.contains('inactive')) {
       ulNode.removeChild(liNode)
    	} 
 	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
 
	var spanNodes = document.querySelectorAll(".answer-box > span")
  	spanNodes[0].style.background = '#34495e'
	spanNodes[1].style.background = '#8e44ad'
  	spanNodes[2].style.background = '#34495e'
  	spanNodes[3].style.background = '#8e44ad'
  	spanNodes[4].style.background = '#8e44ad'
  	spanNodes[5].style.background = '#8e44ad'
  	spanNodes[6].style.background = '#d35400'

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  	
  var ulNode = document.querySelector("ul#tasks")
  var liNodes = ulNode.querySelectorAll("li")
  	for (var i = 0; i < liNodes.length; i ++) {
  			var outputStr = ''
		    var arr = liNodes[i].innerHTML.split('')
		    for (var j = arr.length - 1; j >= 0; j--){
		        outputStr += arr[j]
		    }
		liNodes[i].innerHTML = outputStr

  	}

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8

var imgNode = document.querySelector("img#city-img")
var number = Math.floor(Math.random() * 10)
var numberToString = number.toString()
imgNode.src = "http://lorempixel.com/400/200/city/" + numberToString

})


