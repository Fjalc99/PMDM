$(document).ready(function () {
    var i = 0;

    $(document).on("click", "#btn-add-paragraph", function () {
      $("#content").append("<p>" + i + '>> Lorem ipsum <button class="btn-delete-paragraph"> delete paragraph </button></p>')
      i++;
    });
  });


 
    $(document).on("click", ".btn-delete-paragraph", function () {
      $(this).closest("p").remove();
    
    });
  