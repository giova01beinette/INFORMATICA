$(function(){

    console.log("collegamento creato");

    $("#submit").click(function(){
        
        
        var name = $("#name").val();
        var surname = $("#surname").val();

        if(name != "" && surname!= ""){
            $("#tableBody").append("<tr><td>"+surname+"</td><td>"+name+"</td></tr>");

            $("#name").val("");
            $("#surname").val("");
        }
        
    })

})