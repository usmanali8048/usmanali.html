

let demo = document.getElementById("demo");
let fname = [ "qasim", "muzammil" , "usman"];
let lname = [ "ali", "ahmad" , "javed"];

for (let i=0; i < fname.length; i++){
    for (let j=0; j < lname.length; j++){
        if (i == j){
            demo.style.color = "white";
            demo.style.backgroundColor = "black";
            demo.innerHTML +=  `${lname[j]} ${fname[i]} </br>`;
        }

    }    
}