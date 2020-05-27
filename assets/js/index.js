var problems2 = [
    {
        problem: ["blank", " * 4 = 2", "blank"],
        ans: [[5,0],[6,4],[7,8]]
    },
    {  
        problem: ["10, 20, 30, 40, 50, ", "blank", "blank"],
        ans: [[6,0]]
    },
    {
        problem: ["blank", "blank", " is between 90 and 180"],
        ans: [[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
    },
    {
        problem: ["There are ", "blank", "blank", " legs on 40 birds"],
        ans: [[8,0]]
    },
    {
        problem: ["6", "blank", " / ", "blank", " = 7"],
        ans: [[3,9]]
    },
    {
        problem: ["3", "blank", " / ", "blank", " = 6"],
        ans: [[6,6],[0,5]]
    },
    {
        problem: ["blank", "blank", "3 is a palindrome"],
        ans: [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9]]
    },
    {
        problem: ["blank", "blank", " is prime"],
        ans: [[1,1],[1,3],[1,7],[1,9],[2,3],[2,9],[3,1],[3,7],[4,1],[4,3],[4,7],[5,3],[5,9],[6,1],[6,7],[7,1],[7,3],[7,9],[8,3],[8,9],[9,7]]
    },
    {
        problem: ["blank", " * ", "blank", " is prime"],
        ans: [[1,2],[1,3],[1,5],[1,7],[2,1],[3,1],[5,1],[7,1]]
    },
    {
        problem: ["blank", "0 / 4 = ", "blank"],
        ans: [[2,5]]
    }
];
var picked = [[], [], [], [], []];
var possibleAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var copy = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var submission = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var used = [];
var verdict = "";
var ids = ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
var ansIds = ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
var pickedKeys = new Array(problems2.length);
for (let i = 0; i < problems2.length; i++) {
    pickedKeys[i] = i;
}

var points = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function arraysEqual(a, b) {
    if (a === b) {return true;}
    if (a == null || b == null) {return false;}
    if (a.length != b.length) {return false;}
    
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {return false;}
    }
    return true;
}

function setScore(value) {
    document.getElementById("points").innerHTML = "Your current score is: " + value;
}

function retreiveSubmission() {
    for (let i = 0; i < 10; i++) {
        submission[i] = +document.getElementById(ids[i]).value; //retreive value of textboxes as integers
    }
}

function generateProblems() {
    setScore(points);
    shuffle(pickedKeys);
    for (let i = 0; i < 5; i++) {
        var selected = problems2[pickedKeys[i]];
        var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
        picked[i] = selected.problem;
        possibleAnswers[i*2] = ansSelected[0]; copy[i*2] = ansSelected[0];
        possibleAnswers[i*2+1] = ansSelected[1]; copy[i*2+1] = ansSelected[1];
    }
    console.log(copy);
    shuffle(possibleAnswers);
    var ansPush = [];
    var possibles = document.getElementById("possible-answers");
    for (let i = 0; i < 10; i++) {
        ansPush.push("<span id=\"");
        ansPush.push(ansIds[i]);
        ansPush.push("\">")
        ansPush.push(possibleAnswers[i]);
        ansPush.push("</span>");
    }
    possibles.innerHTML = ansPush.join('');

    var pickedTemp = [];
    var list = document.getElementById("list");
    var counter = 0;
    picked.forEach(function(element) {
        pickedTemp.push("<li>");
        element.forEach(function(elementPart) {
            if (elementPart == "blank") {
                pickedTemp.push("<input id=\"");
                pickedTemp.push(ids[counter]);
                pickedTemp.push("\" maxlength=\"1\" value=\"\" oldValue=\"\">");
                counter++;
            }
            else {
                pickedTemp.push(elementPart);
            }
        })
        pickedTemp.push("</li>");
    });
    list.innerHTML = pickedTemp.join('');
    for (let i = 0; i < 10; i++) {
        document.getElementById(ids[i]).addEventListener('change', update);
        document.getElementById(ids[i]).addEventListener('change', changeValue);
    }
}

function checkInput() {
    retreiveSubmission();
    if (arraysEqual((Array.prototype.slice.call(submission).sort()), (Array.prototype.slice.call(possibleAnswers).sort())) == false) { 
        //check if the submission and the possible answers are the same
        alert("The numbers you've given do not match the numbers allowed!");
        return;
    }
    submissionPair = [-1, -1];
    var success = 0;
    for (let i = 0; i < 5; i++) {
        submissionPair[0] = submission[i*2];
        submissionPair[1] = submission[i*2+1];
        var currAns = problems2[pickedKeys[i]].ans;
        for (let j = 0; j < currAns.length; j++) {
            if (arraysEqual(submissionPair, currAns[j])) {
                success++;
            }
        }
    }
    if (success == 5) {
        //correct answer
        alert("Correct!");
        points++;
        generateProblems();
    }
    else {
        //wrong answer
        alert("Try again!");
    }
    document.getElementById("points").innerHTML = "Your current score is: " + points;
}

function changeValue() {
    this.oldValue = this.value;
}

function update() {
    if (isNaN(this.value)) {
        alert("It looks like you've entered something that's not a number. Please fix this to continue.");
        this.classList.add("bad");
        return;
    }
    else if (this.value == '') {
        for (let i = 0; i < used.length; i++) {
            if (possibleAnswers[used[i]] == this.oldValue) {
                document.getElementById(ansIds[used[i]]).classList.remove("used");
                used.splice(i, 1);
                return;
            }
        }
    }
    else {
        var newInt = parseInt(this.value);
        for (let i = 0; i < 10; i++) {
            if (possibleAnswers[i] == newInt && !(used.includes(i))) {
                document.getElementById(ansIds[i]).classList.add("used");
                this.classList.remove("bad");
                used.push(i);
                return;
            }
        }
        alert("It looks like you've entered a number that's not available. Please fix this to continue.");
        this.classList.add("bad");
    }
}