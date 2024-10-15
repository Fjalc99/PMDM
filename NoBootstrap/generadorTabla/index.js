$(document).ready(function() {

    $(document).on("click", "#addFila", function () {
        var row = "<tr><td><button class='btn-delete-row'>Eliminar</button></td><td>Nuevo</td></tr>";
        $("#table").append(row);
    });

    $(document).on("click", "#addColumna", function () {
        $("#table tr").each(function() {
            $(this).append("<td>Nuevo</td>");
        });
    });

    $(document).on("click", ".btn-delete-row", function () {
        $(this).closest("tr").remove();
    });

    $(document).on("click", "#deleteColumna", function () {
        $("#table tr").each(function() {
            $(this).children().last().remove();
        });
    });
});

