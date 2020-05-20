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
var verdict = "";
var ids = ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
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
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function generateProblems() {
    document.getElementById("points").innerHTML = "Your current score is: " + points;
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
    document.getElementById("possible-answers").innerHTML = possibleAnswers;

    var pickedTemp = [];
    var list = document.getElementById("list");
    var counter = 0;
    picked.forEach(function(element) {
        pickedTemp.push("<li>");
        element.forEach(function(elementPart) {
            if (elementPart == "blank") {
                pickedTemp.push("<input id=\"");
                pickedTemp.push(ids[counter]);
                counter++;
                pickedTemp.push("\" maxlength=\"1\">");
            }
            else {
                pickedTemp.push(elementPart);
            }
        })
        pickedTemp.push("</li>");
    });
    list.innerHTML = pickedTemp.join('');

}

function checkInput() {
    for (let i = 0; i < 10; i++) {
        submission[i] = +document.getElementById(ids[i]).value;
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
        points++;
        document.getElementById("verdict").innerHTML = "";
        generateProblems();
    }
    else {
        //wrong answer
        document.getElementById("verdict").innerHTML = "Try again!";
    }
    document.getElementById("points").innerHTML = "Your current score is: " + points;
}


//TODO: Implement.
/*
function checkInput() {
    var subAr = this.submission.split(',').map(function(i){
        return parseInt(i, 10);
    })
    var wrong = false;
    for (let i = 0; i < 10; i++) {
        if (subAr[i] != this.copy[i]) {wrong = true;}
    }
    if (wrong) {
        this.verdict = subAr[0];
    }
    else {
        this.verdict = subAr[0];
    }
}
*/