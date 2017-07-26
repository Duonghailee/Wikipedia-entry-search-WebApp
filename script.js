$(document).ready(function() {

    $("button").on("click", search);

});

function search() {
    //clear search result;
    $("#search-result").html("");
    var input = $("input").val();
    var URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=12&namespace=0&format=json&callback=?";
    $.ajax({
        type: "GET",
        url: URL,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data) {
            for (var i = 0; i < data[1].length; i++) {
                $("#search-result").append("<div><a target=\"_blank\" href=" + data[3][i] + "><h3>" + data[1][i] + "</h3></a></div><div class=\"content\"><p>" + data[2][i] + "</p></div><hr>");
            }

        }
    });

}