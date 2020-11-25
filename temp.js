var val;
var result;
var val2;

function reset() {
    val = " ";
    result = " ";
    val2 = " ";
    document.getElementById('fahren').value = " ";
    document.getElementById('cel').value = " "
}

function convert() {
        val = document.getElementById('fahren').value
        if(val=="")
        {
            alert("Please Enter a Number.")
        }
        else{

        result = (val - 32) * (5 / 9);
        document.getElementById('cel').value = result;
        }

    }
function convert2(){
        
    val = document.getElementById('cel').value
    if(val=="")
    {
        alert("Please Enter a Number.")
    }
    else{
    result = (val * (9 / 5)) + 32;
    document.getElementById('fahren').value = result;
    }
}