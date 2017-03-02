$('.my-panel').on('click', '.check', function () {
    $(this).parents('.task-row').toggleClass('completed');
})

$('.my-panel').on('click', '.remove-icon', function () {
    $(this).parents('.task-row').remove();
})


$('#saveText').click(function () {
    //var el = $('#addText').val();
    var input1 = $('#addText');
    var el = input1.val();
    input1.val('');
        if (el.trim() !== "") {
            $('.panel-body').append('<div class="checkbox task-row"><button class="close" type="button"><i class="fa fa-times remove-icon" aria-hidden="true"></i></button><label><input type="checkbox" class="check" value="">' + el + '</label></div>');
        } else {
            return false;
        }
    })
    



