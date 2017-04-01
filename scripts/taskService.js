var taskService = (function () {
    return {
        baseUrl: 'http://learn-todo.gear.host/api/tasks',
        getTasks: function () {
            var self = this;
            $.ajax({
                url: self.baseUrl,
                type: 'GET',
                success: function (response) {
                    console.log('Success', response);
                    for (var i = 0; i < response.length; i++) {
                        buildTask(response[i]);
                    }
                    $('.task-row.completed').find('.check').prop('checked', true);
                },
                error: function (response) {
                    console.log('Error', response);
                    showErrorAlert("Data cannot be received");
                }
            })
        },
        addTask: function (task) {
            var self = this;
            $.ajax({
                url: self.baseUrl,
                type: 'POST',
                data: task,
                success: function (response) {
                    console.log('Success', response);
                    buildTask(response);
                },
                error: function (response) {
                    console.log('Error', response);
                    showErrorAlert();
                }
            })
        },

        deleteTask: function (taskId) {
            var self = this;
            $.ajax({
                url: self.baseUrl + '/' + taskId,
                type: 'DELETE',
                success: function (response) {
                    console.log('Success', response);
                },
                error: function (response) {
                    console.log('Error', response);
                    showErrorAlert();
                }
            })
        },
        updateTask: function (task) {
            var self = this;
            $.ajax({
                url: self.baseUrl,
                type: 'PUT',
                data: task,
                success: function (response) {
                    console.log('success', response);
                },
                error: function (response) {
                    console.log('error', response);
                    showErrorAlert();
                }
            })
        }

    }
})();