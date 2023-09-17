console.log("JS is CONNECTED")


var arr = ["Chapter 1.1" , "Chapter 1.2" , "Chapter 1.3"
,"Chapter 2.1","Chapter 2.2","Chapter 2.3","Chapter 2.4",
"Chapter 2.5" , "Chapter 3.1", "Chapter 3.2" , "Chapter 3.3",
"Chapter 3.4","Chapter 4.1","Chapter 4.2" , "Chapter 4.3" , "Chapter 4.4" , "Chapter 4.5",
"Chapter 4.6","Chapter 4.7","Chapter 4.8","Chapter 5.1","Chapter 5.2","Chapter 5.3","Chapter 5.4","Chapter 5.5"
,"Chapter 5.6","Chapter 5.7","Chapter 5.8","Chapter 5.9","Chapter 6.1","Chapter 6.2"
,"Chapter 6.3","Chapter 6.4","Chapter 7.1","Chapter 7.2","Chapter 7.3","Chapter 7.4","Chapter 8.1",
"Chapter 8.2","Chapter 8.3","Chapter 8.4","Chapter 8.5","Chapter 9.1","Chapter 9.2","Chapter 9.3","Chapter 9.4","Chapter 9.5",
"Chapter 9.6","Chapter 9.7","Chapter 9.8","Chapter 9.9","Chapter 10.1","Chapter 10.2","Chapter 10.3",
"Chapter 10.4","Chapter 10.5","Chapter 10.6" , "Chapter 10.7" , "Chapter 11.1" , "Chapter 11.2" , 
"Chapter 11.3" , "Chapter 11.4" , "Chapter 11.5" , "Chapter 12.1" , "Chapter 12.2" , "Chapter 12.3"    ]

var ExerciseInput 
var QuestionNumberInput 

function getExerciseNumber()
{
    ExerciseInput = document.getElementById("exerciseSelectMenu").value
    ExerciseInput--
    console.log(ExerciseInput)
    console.log(arr[ExerciseInput])
}

function getQuestionNumber()
{
    QuestionNumberInput = document.getElementById("quesNo").value
    console.log(QuestionNumberInput)
}

var LocationToOpen 

function showNextQuestion()
{
    QuestionNumberInput++ 
    getSolution() 
}

function showPrevQuestion()
{
    if(QuestionNumberInput > 1)
        QuestionNumberInput-- ; 
    getSolution() 
}

function getSolution()
{
    var quesNoInt = parseInt(QuestionNumberInput)
    var tempstr 
    if(quesNoInt < 10 )
    {
        // THEN WE HAVE A NUMBER LESS THAN 10 
        tempstr = "00" + QuestionNumberInput
        console.log(tempstr)
    }else
    {
        tempstr = "0" + QuestionNumberInput 
        console.log(tempstr)
    }
    LocationToOpen = arr[ExerciseInput] + "\\" + tempstr + "_E" + ".html"
    console.log(LocationToOpen)
    // window.open(LocationToOpen)
    
var iFram =  document.getElementById("myFrame")
iFram.src = LocationToOpen
document.getElementById("ansDisp").style.display = "block"
iFram.onload = function()
{
 iFram.style.height = iFram.contentWindow.document.body.scrollHeight + 'px';
}
removeCookies()

}

function removeCookies() {
    var res = document.cookie;
    var multiple = res.split(";");
    for(var i = 0; i < multiple.length; i++) {
       var key = multiple[i].split("=");
       document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }

}
