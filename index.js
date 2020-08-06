<!DOCTYPE html>
<html>
<head>
<style>
#myDiv {
width:280px;
height:280px;
border:1px solid red;

}

</style>
</head>
<body>

<div id="myDiv"></div>

<button type="button" onclick="btn1()">change color</button>
<button type="button" onclick="btn2()">change color</button>
<button type="button" onclick="btn3()">change color</button>


<script>

function btn1() {
  var myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor = "yellow";
  
}

function btn2() {
 var myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor = "red";  
}

function btn3() {
 var myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor = "blue";  
}
</script>

</body>
</html>
