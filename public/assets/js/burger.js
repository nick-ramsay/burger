$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
        
        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevouredState);
                location.reload();
            }
        );
    });

    $("#submit").on("click", function (event) {
        //event.preventDefault();

        var newBurgerName = {
            burger_name: $("#newBurger").val()
        };
        alert(newBurgerName);
        console.log(newBurgerName);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerName
        }).then(
            function() {
                console.log("Create new burger...");
                $("#newBurger").val("");
                location.reload();
            }
        );
    });
});