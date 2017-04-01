
//taskService.getTasks();


$('.my-panel').on('click', '.check', function () {
    var taskRow = $(this).parents('.task-row');
    taskRow.toggleClass('completed');
    var task = {
        id: taskRow.data('taskid'),
        title: taskRow.find('span').text(),
        isDone: $(this).prop('checked')
    };
    taskService.updateTask(task);
});

$('.my-panel').on('click', '.remove-icon', function () {
    var taskId = $(this).parents('.task-row').data('taskid');
    $(this).parents('.task-row').remove();
    if (taskId != undefined) {
        taskService.deleteTask(taskId);
    }
});


$('#taskForm').submit(function (event) {
    event.preventDefault();
    var title = $('#addText').val();
    if (title.trim() != '') {
        var task = {
            title: title
        };
        taskService.addTask(task);
        $('#addText').val('');

    } else {
        showErrorMessage('Please enter a task title');
    }
})

    

function buildTask(task) {
    var container = $('.my-panel');
    var el = '<div class="checkbox task-row' + (task.isDone ? ' completed' : '') + '" data-taskid=' + task.id + '><button class="close" type="button"><i class="fa fa-times remove-icon" aria-hidden="true"></i></button>'
    el += '<label><input type="checkbox" class="check" value=""><span>' + task.title + '</span></label></div>';

    container.append(el);
}

function showErrorMessage(message) {
    var input = $('#newTask input');
    var el = $('<p></p>');
    el.addClass('error-message');
    el.text(message);
    input.after(el);
}


function showErrorAlert(text) {
    var textError = text || "Error during the process";
    var alert = '<div class="alert alert-danger error-alert">';
    alert += '<span class="close" onclick="closeErrorAlert()">&times;</span>' + textError + '</div>';
    var block = document.createElement('div');
    $(block).addClass('blocked');
    $('body').append(alert);
    $('body').append(block);
}

function closeErrorAlert() {
    $('.error-alert').remove();
    $('.blocked').remove();
}