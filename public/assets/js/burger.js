$(function () {
    $(".devourButton").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        });
        location.reload();
    });

    $("#submit").on("click", function (event) {

        var newBurgerName = {
            burger_name: $("#newBurger").val()
        };

        if (newBurgerName.burger_name != "") {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurgerName
            });
            $("#newBurger").val("");
            location.reload();
        } else {
            alert("Please enter a name for the new burger.");
        }
    });
});