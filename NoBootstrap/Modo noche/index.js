$(document).on("click", ".bi-sun", function () {
    $("body").addClass("oscuro");
    $(".bi").removeClass(".bi bi-sun");
    $(".bi").addClass(".bi bi-moon");
    $("body").removeClass("claro");
  });

  $(document).on("click", ".bi-moon", function () {
    $("body").addClass("claro");
    $(".bi").removeClass(".bi bi-moon");
    $(".bi").addClass(".bi bi-sun");
    $("body").removeClass("oscuro");
  });
