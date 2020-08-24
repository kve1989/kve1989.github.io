$(function() {

    let start_date = $("input[name='start']");
    let end_date = $("input[name='end']");

    start_date.change(function (e) {
        end_date.val(start_date.val());
    });

    $('.btn--del').click(function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'del.php',
            dataType: 'json',
            data: {
                id: $(this).attr('data-id')
            },
            success (data) {
                if (data.status) {
                    document.location.href = "/";
                }
            }
        });
    });

    $(".btn--clone").click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "clone.php",
            dataType: "json",
            data: {
                id: $(this).attr("data-id")
            },
            success (data) {
                if (data.status) {
                    document.location.href = "/";
                }
            },
        });
    });
});