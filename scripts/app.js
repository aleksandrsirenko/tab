var routeProvider = (function () {
    return {
        getRegister: function () {
            $.ajax({
                url: '/register.html',
                type: 'GET',
                success: function(data) {
                    $('#main').html(data);
                },
                error: function(data) {
                    console.log('Error getRegister', data);
                }
            });
        },
        getLogin: function() {
            $.ajax({
                url: '/login.html',
                type: 'GET',
                success: function(data) {
                    $('#main').html(data);
                },
                error: function(data) {
                    console.log('Error getLogin', data);
                }
            });
        },
        getTasks: function() {
            $.ajax({
                url: '/tasks.html',
                type: 'GET',
                success: function(data) {
                    $('#main').html(data);
                },
                error: function(data) {
                    console.log('Error getTasks', data);
                }
            });
        }
    }
})();