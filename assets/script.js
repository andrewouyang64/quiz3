var startEl=document.getElementById('start-btn');
var questionsEl=document.getElementById('questions');
var questionDisplayEl=document.getElementById('questionDisplay');
var timerEl=document.getElementById("timer");


var resultEl=document.getElementById('result');
var q1 = "Commonly used data types DO NOT include_____";
var q2 = "The condition in an if/else statment is enclosed within_____";
var q3 = "Arrays in Java Script can be used to store_____";
var q4 = "String values must be enclosed with_______when being assigned to variable";
var q5 = "A very useful tool used during development and debugging for printing content to the debugger is";

var answerOptionQ1 = ["1 strings","2 booleans","3 alerts", "4 numbers"];
var answerOptionQ2 = ["1 quotes","2 curly brackets","3 parentheses", "4 square brackets"];
var answerOptionQ3 = ["1 numbers and strings","2 other arrays","3 booleans", "4 all of the above"];
var answerOptionQ4 = ["1 commars","2 curly brackets","3 quotes", "4 parentheses"];
var answerOptionQ5 = ["1 java script","2 teminal/bash","3 for loop", "4 console.log"];
var a=0;
var penalties = [a];
var timeCount=100;
var answer = [];
var score = [];
var c="Correct!(previous quiz)";
var w="Incorrect!(previous quiz)";
var highestScore=[];
var finalScore=[];

//var viewHiScore=document.getElementById("hightscore");
//viewHiScore.onclick=function () {
//viewHiScore.innerHTML="The highest score: "+ localStorageGetItem("hiSC");
//}

startEl.addEventListener('click', startFunc);
function startFunc() { 
    //event.preventDault();
    
    setTime();
    a=0;
    penalties.unshift(a);
    q=q1;
    startEl.remove();
    document.getElementById('questionDisplay').innerText=q;

    var button1=document.createElement("button");
    button1.innerHTML= answerOptionQ1[0];
    document.getElementById('answers').appendChild(button1);


    var button2=document.createElement("button");
    button2.innerHTML= answerOptionQ1[1];
    document.getElementById('answers').appendChild(button2);

    var button3=document.createElement("button");
    button3.innerHTML= answerOptionQ1[2];
    document.getElementById('answers').appendChild(button3);

    var button4=document.createElement("button");
    button4.innerHTML= answerOptionQ1[3];
    document.getElementById('answers').appendChild(button4);


    button3.onclick=function()
    //button3.addEventListener('click', functionA)
    //function functionA(event)
    {
        document.getElementById('result').innerText=c;
        nextPage1();
    }
        
    button1.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=a+5; penalties.unshift(a);
        nextPage1();
    }

    button2.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=a+5; penalties.unshift(a);
        nextPage1();
    }

    button4.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=a+5; penalties.unshift(a);
        nextPage1();
    }


    function nextPage1() {
        q=q2;
        document.getElementById('questionDisplay').innerText=q;
        button1.innerHTML= answerOptionQ2[0];
        button2.innerHTML= answerOptionQ2[1];
        button3.innerHTML= answerOptionQ2[2];
        button4.innerHTML= answerOptionQ2[3];

    button3.onclick=function()
    { document.getElementById('result').innerText=c;
        nextPage2();
    }
        
    button1.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=penalties[0]+5; penalties.unshift(a);
        nextPage2();
    }

    button2.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=penalties[0]+5; penalties.unshift(a);
        nextPage2();
    }

    button4.onclick=function() {
        document.getElementById('result').innerText=w; 
        a=penalties[0]+5; penalties.unshift(a);
        nextPage2();

    
    }}

    function nextPage2() {
        
        q=q3;
        document.getElementById('questionDisplay').innerText=q;
        button1.innerHTML= answerOptionQ3[0];
        button2.innerHTML= answerOptionQ3[1];
        button3.innerHTML= answerOptionQ3[2];
        button4.innerHTML= answerOptionQ3[3];
        
        button4.onclick=function()
        { document.getElementById('result').innerText=c;
            nextPage3();
        }
            
        button1.onclick=function() {
            document.getElementById('result').innerText=w; 
            a=penalties[0]+5; penalties.unshift(a);
            nextPage3();
        }
    
        button2.onclick=function() {
            document.getElementById('result').innerText=w; 
            a=penalties[0]+5; penalties.unshift(a);
            nextPage3();
        }
    
        button3.onclick=function() {
            document.getElementById('result').innerText=w; 
            a=penalties[0]+5; penalties.unshift(a);
            nextPage3();
        }}
    
        function nextPage3() {
            
            q=q4;
            document.getElementById('questionDisplay').innerText=q;
            button1.innerHTML= answerOptionQ4[0];
            button2.innerHTML= answerOptionQ4[1];
            button3.innerHTML= answerOptionQ4[2];
            button4.innerHTML= answerOptionQ4[3];
        
            button3.onclick=function()
            { document.getElementById('result').innerText=c;
                nextPage4();
            }
                
            button1.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a);
                nextPage4();
            }
        
            button2.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a);
                nextPage4();
            }
        
            button4.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a);
                nextPage4();
            }}
        
            function nextPage4() {
                
                q=q5;
                document.getElementById('questionDisplay').innerText=q;
                button1.innerHTML= answerOptionQ5[0];
                button2.innerHTML= answerOptionQ5[1];
                button3.innerHTML= answerOptionQ5[2];
                button4.innerHTML= answerOptionQ5[3];
            

            button4.onclick=function()
            { document.getElementById('result').innerText=c;
                answer.unshift(5);
                allDone();
            }
                
            button1.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a); answer.unshift(5);
                allDone();
            }
        
            button2.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a); answer.unshift(5);
                allDone();
            }
        
            button3.onclick=function() {
                document.getElementById('result').innerText=w; 
                a=penalties[0]+5; penalties.unshift(a); answer.unshift(5);
                allDone();

            }}

        function allDone () {
            document.getElementById('questionDisplay').innerText="All done!"
            var yourScore=document.createElement("p");
           
            //function final() {
            
            var fScore=timeCount.valueOf()-penalties[0].valueOf();
            yourScore.innerHTML= "YOUR SCORE FOR THIS TIME:  "+fScore;
            finalScore.unshift(fScore);
            document.getElementById('questions').appendChild(yourScore);
            //}
            //final();

            document.getElementById('answers').removeChild(button1);
            document.getElementById('answers').removeChild(button2);
            document.getElementById('answers').removeChild(button3);
            document.getElementById('answers').removeChild(button4);

            var enterInit=document.createElement("label");
            enterInit. setAttribute("for","text");
            enterInit.innerHTML="Enter your name";
            document.getElementById('questions').appendChild(enterInit);

            var newInput = document.createElement("input");
            document.getElementById("questions").appendChild(newInput);

            var subButton=document.createElement("button");
            subButton.innerHTML= "Confirm";
            document.getElementById('submit-btn').appendChild(subButton);
        

            subButton.onclick=function lastPage() 
            {
                  
            //lastPage();
            //}

            //function lastPage()
            //{
            document.getElementById('questionDisplay').innerText="YOUR HIGHEST SCORE";
                
                storeScore();
                function storeScore() {
                var y=finalScore[0].valueOf();
                var z=localStorage.getItem("hiSc").valueOf();
                if(y>z) {
                    localStorage.setItem("hiSc", y);
                    yourScore.innerHTML=newInput.value+" :   "+y;}
                    else {
                    yourScore.innerHTML=newInput.value+" :   "+z;
                    
                    }} 

                document.getElementById('result').innerText="";
                document.getElementById('questions').removeChild(enterInit);
                document.getElementById('questions').removeChild(newInput);
                
                
                subButton.innerHTML="Try again";
                clearBtn=document.createElement("button");
                clearBtn.innerHTML="Clear high score";
                document.getElementById('questions').appendChild(clearBtn);
            

                subButton.onclick=function() {

                document.getElementById('questionDisplay').innerText="";
                yourScore.innerHTML="";
                document.getElementById('questions').removeChild(clearBtn);
                document.getElementById('submit-btn').removeChild(subButton);
                timeCount=100;
                answer.unshift(1);
                    startFunc();
                }

                clearBtn.onclick=function() {
                    yourScore.innerHTML="The highest score has been cleared!"
                    localStorage.setItem("hiSc", 0);
                }    
    }   }       }               
        

function setTime() {
   var timerInterval = setInterval(function() {
      timeCount--;
      timerEl.textContent = "Timer : " +timeCount;

      if(answer[0]==5) { 
        clearInterval(timerInterval);
        score.unshift(timeCount);}
        
      if(timeCount === 0) {
        clearInterval(timerInterval);
        document.getElementById('result').innerText="Time out! Please try again"
        }
  }, 1000);
  }

  

