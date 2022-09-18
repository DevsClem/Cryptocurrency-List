$(document).ready(function(){
    $.get('/exchanges', function(data){
        for(let res of data) {
            $('ul#data').append(`<li>${res.name}</li>`);
        }
    }, 'json');

    $('#exchanges').click(function(){
        $.get('/exchanges', function(data){
            let list = "";
            for(let res of data) {
                list += `<li>${res.name}</li>`;
            }
            $('ul#data').html(list);
        }, 'json');
        $("#top").show();
        $("ul#data").css('height','250px').css('overflow','auto').scrollTop(0);;
        return false;
    });
    
    $('#finance').click(function(){
        $.get('/finance', function(data){
            let list = "";
            for(let res of data) {
                list += `<li>${res.name}</li>`;
            }
            $('ul#data').html(list);
        }, 'json');
        $("#top").show();
        $("ul#data").css('height','250px').css('overflow','auto').scrollTop(0);;
        return false;
    });

    //when scroll hits the bottom, append 10 more data to the list
    document.getElementById('data').addEventListener('scroll', function(event){
        let element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight){
            $.get('/next', function(data){
                let list = "";
                for(let res of data) {
                    list += `<li>${res.name}</li>`;
                }
                $('ul#data').append(list);
            });
        }
    });

    $('#top').click(function(){
        $.get('/top', function(data){
            let list = "";
            for(let res of data) {
                list += `<li>${res.name}</li>`;
            }
            $('ul#data').html(list);
        });
        $("ul#data").css('height','2750px').css('overflow','visible');
        $("#top").hide();
        return false;
    });
});