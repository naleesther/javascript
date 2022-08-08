var color=document.getElementById("background")
color.style.background="silver"

var titlecolour=document.getElementById("title")
titlecolour.style.color="green"

var uppercase=document.getElementById("case")
uppercase.style.textTransform="uppercase"

var uppercase=document.getElementById("uppercase")
uppercase.style.textTransform="uppercase"

var newList=document.createElement("li")
var nextFruit=document.createTextNode("grapes")
newList.appendChild(nextFruit)
var element=document.getElementById("fruList")
element.append(newList)

var firstItem=document.createElement("li")
var secondItem=document.createTextNode("spinach")
firstItem.appendChild(secondItem)
var element=document.getElementById("vegList")
element.append(firstItem)

