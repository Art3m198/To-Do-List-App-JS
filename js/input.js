$("#input").on('keyup', function(e) {
    var arr = $(this).val().split('.');
    var result = '';
    for (var x = 0; x < arr.length; x++) {
        result += arr[x].replace(/^\s+/, '').charAt(0).toUpperCase() + arr[x].replace(/^\s+/, '').slice(1) + '. ';
    }
    $(this).val(result.substring(0, result.length - 2));
  });

  $(document).keypress(function (e) {
    if (e.which == 13) {
            document.getElementById("add").click();
            document.getElementById("input").value = "";
    }
});