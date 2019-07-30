$("#submit").on("click", function (event) {
    event.preventDefault();
  
    var inString = $("#textAreaInput").val().trim()

    $.ajax({
        method: "POST",
        url: "/validate",
        data: {initialString: inString}
    }).then(data => { 

     alert(data)

    });
    
    $("#textAreaInput").val("");

});