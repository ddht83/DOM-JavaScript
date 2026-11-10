var button1 = document.getElementById("button1");

button1.addEventListener("click", (e) => {
  alert("Button clicked!");
  e.target.style.backgroundColor = "white"; 
});

alert("Button clicked!");