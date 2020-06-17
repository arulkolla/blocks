var problems1 = [
    {
        problem: ["blank", " + ", "blank", " = 10"],
        ans: [[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]]
    },
    {
        problem: ["blank", " is greater than ", "blank"],
        ans: [[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[5,0],[5,1],[5,2],[5,3],[5,4],[4,0],[4,1],[4,2],[4,3],[3,0],[3,1],[3,2],[2,0],[2,1],[1,0]]
    },
    {
        problem: ["blank", " - ", "5 = ", "blank"],
        ans: [[5,0],[6,1],[7,2],[8,3],[9,4]]
    },
    {
        problem: ["blank", " and ", "blank", " make 9"],
        ans: [[0,9],[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1],[9,0]]
    },
    {
        problem: ["blank", " - ", "blank", " = 1"],
        ans: [[1,0],[2,1],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7],[9,8]]
    },
    {
        problem: ["blank", " + ", "blank", " is even"],
        ans: [[0,0],[0,2],[0,4],[0,6],[0,8],[1,1],[1,3],[1,5],[1,7],[1,9],[2,0],[2,2],[2,4],[2,6],[2,8],[3,1],[3,3],[3,5],[3,7],[3,9],[4,0],[4,2],[4,4],[4,6],[4,8],[5,1],[5,3],[5,5],[5,7],[5,9],[6,0],[6,2],[6,4],[6,6],[6,8],[7,1],[7,3],[7,5],[7,7],[7,9],[8,0],[8,2],[8,4],[8,6],[8,8],[9,1],[9,3],[9,5],[9,7],[9,9]]
    },
    {
        problem: ["blank", " is even and ", "blank", " is odd"],
        ans: [[0,1],[0,3],[0,5],[0,7],[0,9],[2,1],[2,3],[2,5],[2,7],[2,9],[4,1],[4,3],[4,5],[4,7],[4,9],[6,1],[6,3],[6,5],[6,7],[6,9],[8,1],[8,3],[8,5],[8,7],[8,9]]
    },
    {
        problem: ["blank", "blank", " is greater than 55"],
        ans: [[5,6],[5,7],[5,8],[5,9],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
    },
    {
        problem: ["blank", " = ", "blank", " + 2"],
        ans: [[2,0],[3,1],[4,2],[5,3],[6,4],[7,5],[8,6],[9,7]]
    },
    {
        problem: ["blank", " + ", "blank", " = 17"],
        ans: [[8,9],[9,8]]
    },
    {
        problem: ["Both ", "blank", " and ", "blank", " are even"],
        ans: [[0,0],[0,2],[0,4],[0,6],[0,8],[2,0],[2,2],[2,4],[2,6],[2,8],[4,0],[4,2],[4,4],[4,6],[4,8],[6,0],[6,2],[6,4],[6,6],[6,8],[8,0],[8,2],[8,4],[8,6],[8,8]]
    },
    {
        problem: ["blank", " is not equal to ", "blank"],
        ans: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,0],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,0],[2,1],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,0],[3,1],[3,2],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[4,0],[4,1],[4,2],[4,3],[4,5],[4,6],[4,7],[4,8],[4,9],[5,0],[5,1],[5,2],[5,3],[5,4],[5,6],[5,7],[5,8],[5,9],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,7],[6,8],[6,9],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,8],[7,9],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,9],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8]]
    },
    {
        problem: ["blank", " + ", "blank", " + 5 = 12"],
        ans: [[0,7],[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]]
    },
    {
        problem: ["blank", " + ", "blank", " is less than 11"],
        ans: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[6,0],[6,1],[6,2],[6,3],[6,4],[7,0],[7,1],[7,2],[7,3],[8,0],[8,1],[8,2],[9,0],[9,1]]
    },
    {
        problem: ["blank", " - ", "8 = ", "blank"],
        ans: [[8,0],[9,1]]
    },
    {
        problem: ["blank", "blank", " is between 90 and 180"],
        ans: [[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
    },
    {
        problem: ["An apple costs ", "blank", " cents and a pear costs ", "blank", " cents. Together they cost 14 cents."],
        ans: [[5,9],[6,8],[7,7],[8,6],[9,5]]
    },
    {
        problem: ["There are ", "blank", " red cars and ", "blank", " blue cars, for a total of 9 cars."],
        ans: [[0,9],[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1],[9,0]]
    },
    {
        problem: ["Ten people came to a party. ", "blank", " of them were girls, and ", "blank", " of them were boys."],
        ans: [[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]]
    },
    {
        problem: ["blank", "blank", " tables have less than 50 legs"],
        ans: [[1,0],[1,1],[1,2]]
    },
    {
        problem: ["There are 8 slices of pizza. You take ", "blank", " of them, leaving ", "blank", " slices."],
        ans: [[0,8],[1,7],[2,6],[3,5],[4,4],[5,3],[6,2],[7,1],[8,0]]
    },
    {
        problem: ["blank", " and ", "blank", " are both odd"],
        ans: [[1,1],[1,3],[1,5],[1,7],[1,9],[3,1],[3,3],[3,5],[3,7],[3,9],[5,1],[5,3],[5,5],[5,7],[5,9],[7,1],[7,3],[7,5],[7,7],[7,9],[9,1],[9,3],[9,5],[9,7],[9,9]]
    },
    {
        problem: ["blank", " is larger than 6, and ", "blank", " is smaller than 6"],
        ans: [[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5]]
    },
    {
        problem: ["16 - ", "blank", " = ", "blank"],
        ans: [[7,9],[8,8],[9,7]]
    },
    {
        problem: ["blank", "triangles have ", "blank", " sides"],
        ans: [[1,3],[2,6],[3,9]]
    },
    {
        problem: ["blank", "blank", " is more than 50 with two even digits."],
        ans: [[6,0],[6,2],[6,4],[6,6],[6,8],[8,0],[8,2],[8,4],[8,6],[8,8]]
    },
    {
        problem: ["96 is less than ", "blank", "blank"],
        ans: [[9,7],[9,8],[9,9]]
    },
    {
        problem: ["blank", " dimes is ", "blank", "0 cents"],
        ans: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]
    },
    {
        problem: ["blank", " minus ", "blank", " is seven"],
        ans: [[7,0],[8,1],[9,2]]
    }
];
var problems1e = [
    {  
        problem: ["10, 20, 30, 40, 50, ", "blank", "blank"],
        ans: [[6,0]]
    },
    {
        problem: ["There are ", "blank", "blank", " legs on 10 birds"],
        ans: [[2,0]]
    },
    {
        problem: ["2, 4, ", "blank", ", ", "blank", ", 10, 12, 14, 16, 18, 20"],
        ans: [[6,8]]
    },
    {
        problem: ["There are ", "blank", "blank", " noses on 19 kangaroos"],
        ans: [[1,9]]
    },
    {
        problem: ["There are ", "blank", "blank", " fingers on 3 people"],
        ans: [[3,0]]
    },
    {
        problem: ["There are ", "blank", "blank", " days in May"],
        ans: [[3,1]]
    },
    {
        problem: ["blank", " + ", "blank", " = 18"],
        ans: [[9,9]]
    },
    {
        problem: ["Three dogs have ", "blank", "blank", " legs"],
        ans: [[1,2]]
    },
    {
        problem: ["There are ", "blank", "blank", " months in a year"],
        ans: [[1,2]]
    },
    {
        problem: ["In two weeks, there are ", "blank", "blank", " days"],
        ans: [[1,4]]
    },
    {
        problem: ["blank", "blank", " is right after 37"],
        ans: [[3,8]]
    }
]

var problems2 = [
    {
        problem: ["blank", " × 4 = 2", "blank"],
        ans: [[5,0],[6,4],[7,8]]
    },
    {
        problem: ["3", "blank", " ÷ ", "blank", " = 6"],
        ans: [[6,6],[0,5]]
    },
    {
        problem: ["blank", " × ", "blank", " = 24"],
        ans: [[3,8],[4,6],[6,4],[8,3]]
    },
    {
        problem: ["4 × 2", "blank", " = 8", "blank"],
        ans: [[0,0],[1,4],[2,8]]
    },
    {
        problem: ["blank", " < 5 < ", "blank"],
        ans: [[0,6],[0,7],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,6],[2,7],[2,8],[2,9],[3,6],[3,7],[3,8],[3,9],[4,6],[4,7],[4,8],[4,9]]
    },
    {
        problem: ["blank", " × ", "blank", " = 12"],
        ans: [[2,6],[3,4],[4,3],[6,2]]
    },
    {
        problem: ["blank", " ÷ ", "blank", " = 2"],
        ans: [[2,1],[4,2],[6,3],[8,4]]
    },
    {
        problem: ["blank", " is half of ", "blank"],
        ans: [[0,0],[1,2],[2,4],[3,6],[4,8]]
    },
    {
        problem: ["blank", "6 = 4 × ", "blank"],
        ans: [[1,4],[3,9]]
    },
    {
        problem: ["blank", " × ", "blank", " is less than 10"],
        ans: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,0],[2,1],[2,2],[2,3],[2,4],[3,0],[3,1],[3,2],[3,3],[4,0],[4,1],[4,2],[5,0],[5,1],[6,0],[6,1],[7,0],[7,1],[8,0],[8,1],[9,0],[9,1]]
    },
    {
        problem: ["blank", " is more than half of ", "blank"],
        ans: [[1,0],[1,1],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
    },
    {
        problem: ["blank", "blank", " is a multiple of 4"],
        ans: [[1,2],[1,6],[2,0],[2,4],[2,8],[3,2],[3,6],[4,0],[4,4],[4,8],[5,2],[5,6],[6,0],[6,4],[6,8],[7,2],[7,6],[8,0],[8,4],[8,8],[9,2],[9,6]]
    },
    {
        problem: ["blank", " > ", "blank", " × 3"],
        ans: [[1,0],[2,0],[3,0],[4,0],[4,1],[5,0],[5,1],[6,0],[6,1],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2],[9,0],[9,1],[9,2]]
    },
    {
        problem: ["blank", " = 1", "blank", " ÷ 3"],
        ans: [[4,2],[5,5],[6,8]]
    },
    {
        problem: ["blank", " is a multiple of 3, but ", "blank", " is not"],
        ans: [[0,1],[0,2],[0,4],[0,5],[0,7],[0,8],[3,1],[3,2],[3,4],[3,5],[3,7],[3,8],[6,1],[6,2],[6,4],[6,5],[6,7],[6,8],[9,1],[9,2],[9,4],[9,5],[9,7],[9,8]]
    },
    {
        problem: ["blank", " is larger than 7 × ", "blank"],
        ans: [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[8,1],[9,0],[9,1]]
    },
    {
        problem: ["blank", " ÷ ", "blank", " > 3"],
        ans: [[4,1],[5,1],[6,1],[7,1],[7,2],[8,1],[8,2],[9,1],[9,2]]
    },
    {
        problem: ["blank", " × ", "blank", " = 0"],
        ans: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]
    },
    {
        problem: ["blank", " × ", "blank", " is not 0"],
        ans: [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
    },
    {
        problem: ["blank", " × ", "blank", " + 5 = 23"],
        ans: [[2,9],[3,6],[6,3],[9,2]]
    },
    {
        problem: ["There are 10 people in a single-file line, including you. ", "blank", " are in front of you and ", "blank", " are behind you."],
        ans: [[0,9],[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1],[9,0]]
    },
    {
        problem: ["blank", " nickels are worth ", "blank", "5 cents"],
        ans: [[1,0],[3,1],[5,2],[7,3],[9,4]]
    },
    {
        problem: ["blank", " times itself equals ", "blank", "6"],
        ans: [[4,1], [6,3]]
    },
    {
        problem: ["The remainder of the division 16 ÷ ", "blank", " is ", "blank"],
        ans: [[1,0],[2,0],[3,1],[4,0],[5,1],[6,4],[7,2],[8,0],[9,7]]
    },
    {
        problem: ["20 ÷ ", "blank", " = ", "blank", " remainder 5"],
        ans: [[3,6],[6,3],[9,2]]
    },
    {
        problem: ["blank", " × 2 = 1", "blank"],
        ans: [[5,0],[6,2],[7,4],[8,6],[9,8]]
    },
    {
        problem: ["blank", " is more than twice ", "blank"],
        ans: [[1,0],[2,0],[3,0],[3,1],[4,0],[4,1],[5,0],[5,1],[5,2],[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[7,3],[8,0],[8,1],[8,2],[8,3],[9,0],[9,1],[9,2],[9,3],[9,4]]
    },
    {
        problem: ["blank", " ÷ " ,"blank", " = 1"],
        ans: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]
    },
    {
        problem: ["12 × ", "blank", " = ", "blank", "4"],
        ans: [[2,2],[7,4]]
    },
    {
        problem: ["10 × ", "blank", " = ", "blank", "0"],
        ans: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]
    }
];
var problems2e = [
    {
        problem: ["blank", "0 ÷ 4 = ", "blank"],
        ans: [[2,5]]
    },
    {
        problem: ["6", "blank", " ÷ ", "blank", " = 7"],
        ans: [[3,9]]
    },
    {
        problem: ["blank", " × 3 = ", "blank", "4"],
        ans: [[8,2]]
    },
    {
        problem: ["blank", " × ", "blank", " = 81"],
        ans: [[9,9]]
    },
    {
        problem: ["blank", "blank", " ÷ 8 = 8"],
        ans: [[6,4]]
    },
    {
        problem: ["Twelve weeks have ", "blank", "blank", " days"],
        ans: [[8,4]]
    },
    {
        problem: ["Nine dice have a total of ", "blank", "blank", " faces"],
        ans: [[5,4]]
    },
    {
        problem: ["blank", "blank", " minutes after 12:34 is 1:15"],
        ans: [[4,1]]
    },
    {
        problem: ["2, 4, 8, 16, 32, ", "blank", "blank", ", 128, 256"],
        ans: [[6,4]]
    },
    {
        problem: ["1, 3, 9, 27, ", "blank", "blank", ", 243, 729"],
        ans: [[8,1]]
    }
];

var problems3 = [
    {
        problem: ["blank", " ÷ ", "blank", " < 1"],
        ans: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[4,5],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9]]
    },
    {
        problem: ["blank", " × ", "blank", " is a nonzero perfect square"],
        ans: [[1,1],[1,4],[1,9],[2,2],[2,8],[3,3],[4,1],[4,4],[4,9],[5,5],[6,6],[7,7],[8,2],[8,8],[9,1],[9,4],[9,9]]
    },
    {
        problem: ["blank", "blank", " is prime"],
        ans: [[1,1],[1,3],[1,7],[1,9],[2,3],[2,9],[3,1],[3,7],[4,1],[4,3],[4,7],[5,3],[5,9],[6,1],[6,7],[7,1],[7,3],[7,9],[8,3],[8,9],[9,7]]
    },
    {
        problem: ["blank", " ÷ ", "blank", "= 0.5"],
        ans: [[1,2],[2,4],[3,6],[4,8]]
    },
    {
        problem: ["blank", " × ", "blank", " is prime"],
        ans: [[1,2],[1,3],[1,5],[1,7],[2,1],[3,1],[5,1],[7,1]]
    },
    {
        problem: ["blank", " is prime, but ", "blank", " is composite"],
        ans: [[2,4],[2,6],[2,8],[2,9],[3,4],[3,6],[3,8],[3,9],[5,4],[5,6],[5,8],[5,9],[7,4],[7,6],[7,8],[7,9]]
    },
    {
        problem: ["blank", " squared is ", "blank"],
        ans: [[0,0],[1,1],[2,4],[3,9]]
    },
    {
        problem: ["25% of ", "blank", " is ", "blank"],
        ans: [[0,0],[4,1],[8,2]]
    },
    {
        problem: ["blank", "% of 50 is ", "blank"],
        ans: [[0,0],[2,1],[4,2],[6,3],[8,4]]
    },

    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    },
    {
        problem: [],
        ans: []
    }    
];
var problems3e = [
    {
        problem: ["(", "blank", " × 6) × 2 = ", "blank", "0"],
        ans: [[5,6]]
    },
    {
        problem: ["blank", "blank", "% of 20 is 9"],
        ans: [[4,5]]
    },
    {
        problem: ["blank", "blank", " is both a perfect square and a perfect cube"],
        ans: [[6,4]]
    }
]

var problems4 = [
    {
        problem: ["sin(", "blank", "blank", "°) is a rational number"],
        ans: [[6,0],[9,0]]
    }
];
var problems4e = [
    {
        problem: ["blank", "! = 403", "blank", "0"],
        ans: [[8,2]]
    }
]

var problems = [];
var problemsE = [];
var picked = [[], [], [], [], []];
var possibleAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var copy = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var submission = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var used = [];
var verdict = "";
var ids = ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
var ansIds = ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
var points = 0;
var pickedKeys;
var pickedKeysE;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

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

function start() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("problems").style.display = "block";

    var diffSelect = document.getElementById("difficulty").value

    if (diffSelect == "easy") {
        problems = problems1;
        problemsE = problems1e;
    }
    else if (diffSelect == "medium") {
        problems = problems2.concat(problems1);
        problemsE = problems2e.concat(problems1e);
    }
    else if (diffSelect == "hard") {
        problems = problems3.concat(problems2);
        problemsE = problems3e.concat(problems2e);
    }
    else {
        problems = problems4.concat(problems3);
        problemsE = problems4e.concat(problems3e);
    }

    pickedKeys = new Array(problems.length);
    for (let i = 0; i < problems.length; i++) {
        pickedKeys[i] = i;
    }
    pickedKeysE = new Array(problemsE.length);
    for (let i = 0; i < problemsE.length; i++) {
        pickedKeysE[i] = i;
    }

    generateProblems();
}

function revert() {
    document.getElementById("intro").style.display = "block";
    document.getElementById("problems").style.display = "none";
}

function generateProblems() {
    setScore(points);
    shuffle(pickedKeys);
    shuffle(pickedKeysE);
    used = [];
    for (let i = 0; i < 4; i++) {
        var selected = problems[pickedKeys[i]];   
        var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
        picked[i] = selected.problem;
        possibleAnswers[i*2] = ansSelected[0]; copy[i*2] = ansSelected[0];
        possibleAnswers[i*2+1] = ansSelected[1]; copy[i*2+1] = ansSelected[1];
    }
    let counting = 0;
    for (let i = 4; i < 5; i++) {
        var selected = problemsE[pickedKeysE[counting]];
        var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
        picked[i] = selected.problem;
        possibleAnswers[i*2] = ansSelected[0]; copy[i*2] = ansSelected[0];
        possibleAnswers[i*2+1] = ansSelected[1]; copy[i*2+1] = ansSelected[1];
        counter++;
    }
    //console.log(copy);
    //shuffle(possibleAnswers);
    //TODO: Shuffle the questions so 'E' is not always at the bottom.
    possibleAnswers.sort();
    var ansPush = [];
    var possibles = document.getElementById("possible-answers");
    for (let i = 0; i < 10; i++) {
        ansPush.push("<span class=\"answers\" id=\"");
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
                pickedTemp.push("<input class=\"boxes\" id=\"");
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
        document.getElementById(ids[i]).addEventListener('keyup', function(e) {
            if (event.keyCode === 8 || event.keyCode === 46) {
                document.getElementById(ids[i]).value = "";
            }
            else if (event.keyCode === 39 || event.keyCode === 13 || document.getElementById(ids[i]).value.length == 1) {
                if (i == 9) {
                    document.getElementById(ids[0]).focus();
                }
                else {
                    document.getElementById(ids[i+1]).focus();
                }
            }
            else if (event.keyCode === 37) {
                if (i == 0) {
                    document.getElementById(ids[9]).focus();
                }
                else {
                    document.getElementById(ids[i-1]).focus();
                }
            }
        })
        document.getElementById(ids[i]).addEventListener('keyup', update);
        document.getElementById(ids[i]).addEventListener('keyup', changeValue);
    }
}

function checkInput() {
    retreiveSubmission();
    if (arraysEqual((Array.prototype.slice.call(submission).sort()), (Array.prototype.slice.call(possibleAnswers).sort())) == false) { 
        Swal.fire("Uh oh!", "The numbers you've given do not match the numbers allowed!", "warning");
        return;
    }
    submissionPair = [-1, -1];
    var success = 0;
    for (let i = 0; i < 4; i++) {
        submissionPair[0] = submission[i*2];
        submissionPair[1] = submission[i*2+1];
        var currAns = problems[pickedKeys[i]].ans;
        for (let j = 0; j < currAns.length; j++) {
            if (arraysEqual(submissionPair, currAns[j])) {
                success++;
            }
        }
    }
    let counting = 0;
    for (let i = 4; i < 5; i++) {
        submissionPair[0] = submission[i*2];
        submissionPair[1] = submission[i*2+1];
        var currAns = problemsE[pickedKeysE[counting]].ans;
        for (let j = 0; j < currAns.length; j++) {
            if (arraysEqual(submissionPair, currAns[j])) {
                success++;
            }
        }
        counting++;
    }
    if (success == 5) {
        Swal.fire("Good job!", "Your answer is correct!", "success");
        points++;
        generateProblems();
    }
    else {
        Swal.fire("Try again!", "You're almost there. Keep going at it!", "error");
        document.getElementById(ids[0]).focus();
    }
    document.getElementById("points").innerHTML = "Your current score is: " + points;
}

function resetInput() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(ids[i]).value = '';
        document.getElementById(ids[i]).oldValue = '';
        document.getElementById(ansIds[i]).classList.remove("used");
        document.getElementById(ids[i]).update;
    }
    used = [];
    document.getElementById(ids[0]).focus();
}

function changeValue() {
    this.oldValue = this.value;
}

function update() {
    if (isNaN(this.value)) {
        //invalid input
        this.value = "";
        Swal.fire("Uh oh!", "You've entered something that's not a number.", "warning");
        this.focus();
    }
    else if (this.value == '') {
        //from input to blank
        // console.log(this.value);
        // console.log(this.oldValue);
        for (let i = 0; i < used.length; i++) {
            if (possibleAnswers[used[i]] == this.oldValue) {
                document.getElementById(ansIds[used[i]]).classList.remove("used");
                used.splice(i, 1);
                return;
            }
        }
    }
    else if (isNumeric(this.value) && isNumeric(this.oldValue)) {
        //from input to input 
        //just a combination of above and below
        // console.log(this.value);
        // console.log(this.oldValue);
        for (let i = 0; i < used.length; i++) {
            if (possibleAnswers[used[i]] == this.oldValue) {
                document.getElementById(ansIds[used[i]]).classList.remove("used");
                used.splice(i, 1);
                break;
            }
        }
        var newInt = parseInt(this.value);
        for (let i = 0; i < 10; i++) {
            if (possibleAnswers[i] == newInt && !(used.includes(i))) {
                document.getElementById(ansIds[i]).classList.add("used");
                this.classList.remove("bad");
                used.push(i);
                return;
            }
        }

        var count = 0;
        for (let i = 0; i < 10; i++) {
            if (possibleAnswers[i] == this.value) {
                count++;
            }
        }
        if (count >= 2) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + " a total of " + (count + 1) + " times, but you are only allowed to use it " + count + " times.", "warning");
        }
        else if (count == 1) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + " a total of " + (count + 1) + " times, but you are only allowed to use it " + count + " time.", "warning");
        }
        else if (count == 0) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + ", which is not in the list of available numbers.", "warning");
        }
        var prevInputs = [];
        for (let i = 0; i < 10; i++) {
            if (document.getElementById(ids[i]).value == this.value && document.getElementById(ids[i]) != this) {
                document.getElementById(ids[i]).classList.add("bad");
                prevInputs.push(i);
            }
        }
        this.focus();
        window.setTimeout(clearBadStatus, 2000, prevInputs);
        this.value = "";
        // console.log("timeout");
    }
    else {
        //from blank to input
        var newInt = parseInt(this.value);
        for (let i = 0; i < 10; i++) {
            if (possibleAnswers[i] == newInt && !(used.includes(i))) {
                document.getElementById(ansIds[i]).classList.add("used");
                this.classList.remove("bad");
                used.push(i);
                return;
            }
        }

        var count = 0;
        for (let i = 0; i < 10; i++) {
            if (possibleAnswers[i] == this.value) {
                count++;
            }
        }
        if (count >= 2) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + " a total of " + (count + 1) + " times, but you are only allowed to use it " + count + " times.", "warning");
        }
        else if (count == 1) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + " a total of " + (count + 1) + " times, but you are only allowed to use it " + count + " time.", "warning");
        }
        else if (count == 0) {
            Swal.fire("Uh oh!", "You've entered the number " + this.value + ", which is not in the list of available numbers.", "warning");
        }
        var prevInputs = [];
        for (let i = 0; i < 10; i++) {
            if (document.getElementById(ids[i]).value == this.value && document.getElementById(ids[i]) != this) {
                document.getElementById(ids[i]).classList.add("bad");
                prevInputs.push(i);
            }
        }
        this.focus();
        window.setTimeout(clearBadStatus, 2000, prevInputs);
        this.value = "";
        // console.log("timeout");
    }
}

function clearBadStatus(prevInputs) {
    for (let i = 0; i < prevInputs.length; i++) {
        document.getElementById(ids[prevInputs[i]]).classList.remove("bad");
    }
    // console.log("timeout over")
}