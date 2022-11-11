function multiplicatin(){
    let number = document.getElementById('numberTab').value
    let result = document.getElementById('result')

    
        if (number === "") {
            alert("Field cannot be empty")
            document.getElementById('numberTab').focus()
        }else{
        document.getElementById('result').innerHTML = ""
           for (let i = 1; i < 11; i++) { 
            result.innerHTML += (`${number} X ${i} = ${number*i} </br>`)
           }
           
           document.getElementById('numberTab').value = ""
           document.getElementById('numberTab').focus()
        }
   
}