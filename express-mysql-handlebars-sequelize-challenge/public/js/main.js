$(document).ready(function() {

    var destroyTask = function (user, task) {
        $.post('/people/'+user+'/tasks/create', { task: task },
            function(returnedData){
                console.log(returnedData);
            }, 'json');
    };

});