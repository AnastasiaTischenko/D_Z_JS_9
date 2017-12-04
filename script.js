$(document).ready(function(){
    $('button').on('click', fff);
    $('#height').on('change', Hpeople);
});
function fff(event){
    //куда послать, что взять с собой , что делать дальше
    var c = 33;
    $.post(
        '1.php',//куда
        {
            "a" : 2,//что
            "num2" : c
        },
       function(data){
           console.log(data);
       } 
    );
    
    $.post(
        'a1.php',
        {
            'num1' : 10,
            'num2' : 12
        },
        function(data){
            console.log("total summ = " + data);
        }
    );
    
    $.post(
        'a2.php',
        {
            'year' : 1999
        },
        function(data){
            console.log(data);
        }
    );
    
    var h = $('#height').val();
    var s = $('input[name=sex]:checked').val();
    console.log(s);
    $.post(
        'a3.php',
        {
            'height' : h,
            'sex' : s
        },
        function(data){
            console.log(data);
        }
    );
    
    var f = $('#fio').val();
    var e = $('#email').val();
    var p = $('#phone').val();
    console.log(f, e, p);
    $.post(
        'mail.php',
        {
            'fio' : f,
            'email' : e,
            'phone' : p
        },
        function(data){
            console.log(data);
        }
    )
    $.get(
        'goods.php',
        {
            'art': $('#good').val()
        },
        function(data){
        data = JSON.parse(data);
        $('#out2').html(`name: ${data.name}  <br>  weight: ${data.weight}  <br>  cost: ${data.cost}  <br>  <img src="${data.img}" alt="">`)
    }
    )
    
};

function Hpeople(){
    out.innerHTML = $('#height').val();
}