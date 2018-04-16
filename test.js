var x = document.getElementsByClassName("egoProfileTemplate");
var i,j;
for (i = 0; i < 7; i++) {
// Reset the jth
j=0;
    x[i].style.backgroundColor = "red";
    x[i].querySelector('button[type="submit"]').click();    
    console.log(i);
    for (j = 0; j < 100; j++) {
	console.log("Delayed", i, j);
    }
}