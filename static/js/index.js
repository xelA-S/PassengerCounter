let count = 0

let counter = document.getElementById("counter")
let save = document.getElementById("save")



function increment(){
    count+=1
    counter.innerText=count
}

function saving(){
    save.innerText+=" " +count + " -"
    //save.textContent += count + " - " can also be used as it does not remove previously added spaces
    counter.innerText = 0
    count = 0
}


function Clear(){
    save.textContent= "Previous entries:"
}