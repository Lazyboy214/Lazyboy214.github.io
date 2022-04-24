const developer = () => {
  var yourName = prompt("Hey there, what's your name?")
  var code = prompt("Would you like to play a game?").toLowerCase()
  if(code === "yes") {
      alert(`Let us begin ${yourName} ☠️`)
  } else {
      alert("Come back when you're ready my friend 😈")
  }
}
developer()


const ticTac = (ingredient) => {
  if(ingredient === "0") {
    document.getElementById("0").innerHTML = "🐖"
  } else if(ingredient === "1") {
    document.getElementById("1").innerHTML = "🐺"
  } else if(ingredient === "2") {
    document.getElementById("2").innerHTML = "🦞"
  } else if(ingredient === "3") {
    document.getElementById("3").innerHTML = "🐌"
  } else if(ingredient === "4") {
    document.getElementById("4").innerHTML = "🐸"
  } else if(ingredient === "5") {
    document.getElementById("5").innerHTML = "🌈"
  } else if(ingredient === "6") {
    document.getElementById("6").innerHTML = "🐣"
  } else if(ingredient === "7") {
    document.getElementById("7").innerHTML = "🦉"
  } else if(ingredient === "8") {
    document.getElementById("8").innerHTML = "🦆"
  } else if(ingredient === "9") {
    document.getElementById("9").innerHTML = "🦜"
  } else if(ingredient === "10") {
    document.getElementById("10").innerHTML = "🐫"
  } else if(ingredient === "11") {
    document.getElementById("11").innerHTML = "🐍"
  } else if(ingredient === "12") {
    document.getElementById("12").innerHTML = "🐏"
  } else if(ingredient === "13") {
    document.getElementById("13").innerHTML = "🐝"
  } else if(ingredient === "14") {
    document.getElementById("14").innerHTML = "🦟"
  } else if(ingredient === "15") {
    document.getElementById("15").innerHTML = "🦋"
  }
}

// const ingredient = () => {
//   var randomNum = Math.floor(Math.random() * 15)
// }
// const treasure = (click) => {
//   if(click === "treasurelocation")
// }
