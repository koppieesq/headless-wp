document.getElementById("submitButton").onclick = function(){
    // Set up variables for later use.
    let results = "<ul>";
    let link = "https://en.wikipedia.org/wiki/";
    let key = 0;
    let items = [];

    // Get text query from user.
    let query = document.getElementById("query").value;

    // Get the page limit from user.
    let limit = document.getElementById("number").value;

    // Set up query to Wikipedia api.
    let url = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=" + limit + "&gapfrom=" + query + "&prop=links%7Ccategories&format=json";

    // Get the results.
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            let itemsRaw = out.query.pages;
            console.log('Checkout this JSON! ', itemsRaw);

            // Copy the results from a json object to an array, so we can sort it.
            for (key in itemsRaw) {
                items[key] = itemsRaw[key];
            };

            // Check to see if we need to sort the results.
            let sort = document.getElementById("sortby").value;
            if (sort == "alphabetical") {
                items.sort((a, b) => (a.title > b.title) ? 1 : -1)
            } else if (sort == "reverse") {
                items.sort((a, b) => (a.title > b.title) ? -1 : 1)
            }

            // Paste results onto the page.
            for (key in items) {
                let itemElement = items[key]["title"];
                results = results + "<li><a href='" + link + itemElement + "' target='_blank'>" + itemElement + "</a></li>";
            };
            results = results + "</ul>";
            document.getElementById("result").innerHTML = results;
        })
        .catch(err => { throw err });
};
