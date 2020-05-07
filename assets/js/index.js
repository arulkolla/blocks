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
var possibleAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var copy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var submission = "";
var verdict = "";


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateProblems() {
    shuffle(problems2);
    for (let i = 0; i < 5; i++) {
        var selected = problems2[i];
        var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
        picked[i] = selected.problem;
        possibleAnswers[i*2] = ansSelected[0]; copy[i*2] = ansSelected[0];
        possibleAnswers[i*2+1] = ansSelected[1]; copy[i*2+1] = ansSelected[1];
    }
    console.log(copy);
    possibleAnswers.sort(() => Math.random() - 0.5);
    document.getElementById("possible-answers").innerHTML = possibleAnswers;
    var pickedTemp = [];
    var list = document.getElementById("list");
    picked.forEach(function(element) {
        pickedTemp.push("<li>");
        element.forEach(function(elementPart) {
            if (elementPart == "blank") {
                pickedTemp.push("<input>");
            }
            else {
                pickedTemp.push(elementPart);
            }
        })
        pickedTemp.push("</li>")
    });
    list.innerHTML = pickedTemp.join('');
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