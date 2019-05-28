document.getElementById("submitButton").onclick = function(){
    // Get query.
    let query = document.getElementById("query").value;

    // Set up query to Wikipedia api.
    let url = "https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=10&gapfrom=Ba&prop=links%7Ccategories&format=json";

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('Checkout this JSON! ', out);
        })
        .catch(err => { throw err });

    // Calculate the results.

    // Paste results onto the page.
    document.getElementById("result").innerHTML = url;
};
