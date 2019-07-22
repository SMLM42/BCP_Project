var detachments = [
    { Name: "Patrol", CP: 0 },
    { Name: "Battalion", CP: 5 },
    { Name: "Brigade", CP: 12 },
    { Name: "Vanguard", CP: 1 },
    { Name: "Spearhead", CP: 1 },
    { Name: "Outride", CP: 1 },
    { Name: "Supreme Command", CP: 1 },
    { Name: "Super-Heavy", CP: 3 },
    { Name: "Air Wing", CP: 1 },
    { Name: "Super-Heavy Auxiliary", CP: 0 },
    { Name: "Fortification Network", CP: 0 },
    { Name: "Auxiliary Support", CP: -1 }
]

$("#submit").on("click", function () {
    // Takes in the SIXTH ROW ONLY (ie the actual army list)
    var initialString = JSON.stringify($("#textbox").val().trim())
    var faction
    // This is for battlescribe notation with ++, there are multiple variations of this that will need to be accounted for
    var armyList = initialString.split("++")
    // This function will check that the types of detachments are legal, and that their cp values are correct. The array returned by the ++ split is an odd length with the odd numbers being Detachment headers and the even being the actual body of the list
    for (var i = 1; i < armyList.length; (i = (i + 2))) {
        var detachmentTest = (armyList[i]).trim()
        console.log(detachmentTest)
        var detachmentType = detachmentTest.split(" ")
        var typeTest = detachments.filter(function (type) { return type.Name === detachmentType[0] })
        // This if statement checks if its a valid type
        if (typeTest != "") {
            console.log("Detachment " + i + " Valid Type")
        }
        else { console.log("Detachment " + i + " Invalid Type") }

        // This will test if the cp value is correct
        var cpTest = detachmentTest.trim().split("CP")
        cpTest = (cpTest[0].substring((cpTest[0].length - 3), (cpTest[0].length))).trim()
        cpTest = cpTest.replace("+", "")

        // This part not done
        if (cpTest == detachmentType.CP) {
            console.log("yup")
        }
        else { console.log("nope") }

    }

})