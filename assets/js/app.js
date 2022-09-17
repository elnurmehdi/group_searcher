
function Show()
{
    var x = document.getElementById('group').value  
    var grNum = x.slice(-3, -2) 

    document.getElementById('groupNumber').innerHTML=x
 

    if(grNum==1){
        document.getElementById('groupNumber').style.color="yellow"
        alert("Morning shifts")
    }

    else if(grNum==2){
        document.getElementById('groupNumber').style.color="red"
        alert("Afternoon shifts")
    }

    else if(grNum==3){
        alert("Night shifts")
        document.getElementById('groupNumber').style.color="black"
    
    } 

  

    
}

function Mode() {
 
 if ( document.body.style.backgroundColor=="white") {
    
     document.body.style.backgroundColor="black"
     document.getElementById("btn").textContent="Light mode"
    

    }
    
 else 
 {
    document.body.style.backgroundColor="white"
    document.getElementById("btn").textContent="Dark mode"
    
 }
    
}


