$(document).ready(function () {

    function displayList() {

        $.ajax({
            url: "https://dog.ceo/api/breeds/list/all",
            method: "GET"
        })
            .then(function (res) {

                let dogArr = Object.keys(res.message);
                // console.log(arr);
                // $("#dog-breeds").text(dogArr.join("\n"));

                for (let i = 0; i < dogArr.length; i++) {
                    console.log(dogArr[i]);
                    $("#dog-text").append("<li class='dog-breeds'>" + dogArr[i] + "</li>")
                }
            })
    }

    displayList();

});

