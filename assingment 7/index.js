var list = document.getElementById("ull");

var inpt = document.getElementById("typing");
function handleAddList(){
    if (inpt.value !== "") {
        
        var add = inpt.value;
        list.innerHTML += `            <li onclick="DELETE(this)" ><b>${add}</b> <button >DELETE</button></li>
        `; 
        inpt.value = ""
    }else{
        alert("Enter Value")
    }
    
}

function DELETE(ele){
     ele.style.display="none"
        // console.log(gg)
}


function searchBar(){
    var searching = document.getElementById("searchBar");
    var searching2 = searching.value;
    var ListData = document.getElementsByTagName("li");
    // console.log("🚀 ~ searchBar ~ ListData:", ListData[0].childNodes[0].innerText)
    
    for (let i = 0; i < ListData.length; i++) {
        var textValue = ListData[i].childNodes[0];
        if (textValue){
            var finalResult = textValue.innerHTML;
            
            if(finalResult.indexOf(searching2) > -1){
                ListData[i].style.display = '';            
            // alert()
        }else{
            
            ListData[i].style.display = 'none';            
        }
        
    }
}
}

    