$(document).ready(function () {

function displayList () {
    // https://dog.ceo/api/breeds/list/all

    $.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        method: "GET"
    })
    .then(function(res) {
 
        const arr = Object.keys(res.message);
        console.log(arr);

        $("#dog-breeds").text(arr.join("\n"));

        // for (let i = 0; i < arr.length; i++) {
        //     $("#dog-breeds").text(arr[i]);
        // }

        // $("#dog-breeds").text()
        
    })

}

    displayList();

});

