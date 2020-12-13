//JQuery()
$(document).ready(function(){
    //$("#div1").html("Hello from jQuery....");
    $("button").click(() => {
        //$("#div1").append('<button>Dodatno dugme</button>')
        //$("#div1").hide()
        //$("#div1").toggle();
        //$("#div1").css('background-color', 'red');
        //$("#div1").remove();
        callAPI();
    })

    // $("button").on('mouseover', () => {
    //     alert('Klik na dugme')
    // })

    //$("button").trigger('mouseover')
    // $("li:not(.klasa1)")
    // $("li:eq(5)").forEach(() => {

    // });
});

//AJAX

function callAPI(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response_json = JSON.parse(this.responseText)
            //console.log(response_json)
            //$("#div1").html();
            $("#div1").html(response_json.slip.advice)
        }
    }
    xhttp.open("GET", "https://api.adviceslip.com/advice", true);
    xhttp.send();
};

