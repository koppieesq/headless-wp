document.getElementById("submitButton").onclick = function(){
    // Get query.
    let query = document.getElementById("query").value;

    // Set up query to Wikipedia api.
    let url = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=10&gapfrom=" + query + "&prop=links%7Ccategories&format=json";

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            let items = out.query.pages;
            // Calculate the results.
            console.log('Checkout this JSON! ', items);
            let results = "<ul>";
            for (let key in items) {
                results = results + "<li>" + items[key]["title"] + "</li>";
            };
            results = results + "</ul>";
            // Paste results onto the page.
            document.getElementById("result").innerHTML = results;
        })
        .catch(err => { throw err });

};
