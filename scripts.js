document.getElementById("submitButton").onclick = function(){
    // Set up variables for later use.
    let results = "<ul>";
    let link = "https://en.wikipedia.org/wiki/";

    // Get query.
    let query = document.getElementById("query").value;

    // Set up query to Wikipedia api.
    let url = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=100&gapfrom=" + query + "&prop=links%7Ccategories&format=json";

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            let items = out.query.pages;
            // Calculate the results.
            console.log('Checkout this JSON! ', items);
            for (let key in items) {

                let itemElement = items[key]["title"];
                results = results + "<li><a href='" + link + itemElement + "' target='_blank'>" + itemElement + "</a></li>";
            };
            results = results + "</ul>";
            // Paste results onto the page.
            document.getElementById("result").innerHTML = results;
        })
        .catch(err => { throw err });
};
