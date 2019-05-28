document.getElementById("submitButton").onclick = function(){
    let query = document.getElementById("query").value;
    let result = 'Your query was ' + query;
    document.getElementById("result").innerHTML = result;
};
