$("#submit").on("click", function (event) {
    event.preventDefault();
  
    var inString = $("#textAreaInput").val().trim()
    // console.log(inString)

    $.ajax({
        method: "POST",
        url: "/validate",
        data: {initialString: inString}
    })
    
    $("#textAreaInput").val("");

});