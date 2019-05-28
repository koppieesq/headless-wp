document.getElementById("submitButton").onclick = function(){
    // Get query.
    let query = document.getElementById("query").value;

    // Set up query to Wikipedia api.
    let url = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=10&gapfrom=" + query + "&prop=links%7Ccategories&format=json";

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // Calculate the results.
            console.log('Checkout this JSON! ', out.query.pages);
            // Paste results onto the page.
            out.query.pages.forEach(function () {
                
            });
            document.getElementById("result").innerHTML = out.query.pages;
        })
        .catch(err => { throw err });

};
