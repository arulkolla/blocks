var TIME_INT = 180;
var TIME_STR = "three minutes";
var secondsLeft = TIME_INT;
var NUM_GEN = 10;

var currRound = 0;

var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

var problems = new Vue({
    el: `#problems`,
    data: {
        submission: "",
        verdict: "",
        problems2: [
            {
                problem: "⎵ * 4 = 2⎵",
                ans: [[5,0],[6,4],[7,8]]
            },
            {
                problem: "10, 20, 30, 40, 50, ⎵⎵",
                ans: [[6,0]]
            },
            {
                problem: "⎵⎵ is between 90 and 180",
                ans: [[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]]
            },
            {
                problem: "There are ⎵⎵ legs on 40 birds",
                ans: [[8,0]]
            },
            {
                problem: "6⎵ / ⎵ = 7",
                ans: [[3,9]]
            },
            {
                problem: "3⎵ / ⎵ = 6",
                ans: [[6,6],[0,5]]
            },
            // {
            //     problem: "⎵⎵3 is a palindrome",
            //     ans: [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9]]
            // },
            // {
            //     problem: "⎵⎵ is prime",
            //     ans: [[1,1],[1,3],[1,7],[1,9],[2,3],[2,9],[3,1],[3,7],[4,1],[4,3],[4,7],[5,3],[5,9],[6,1],[6,7],[7,1],[7,3],[7,9],[8,3],[8,9],[9,7]]
            // },
            // {
            //     problem: "⎵ * ⎵ is prime",
            //     ans: [[1,2],[1,3],[1,5],[1,7],[2,1],[3,1],[5,1],[7,1]]
            // },
            {
                problem: "⎵0 / 4 = ⎵",
                ans: [[2,5]]
            }
        ],
        // problems3: [
        //     {
        //         problem: "⎵ squared = ⎵⎵",
        //         ans: [[4,1,6],[7,4,9],[8,6,4],[9,8,1]]
        //     },
        //     {
        //         problem: "⎵9 / ⎵ = 8 remainder ⎵",
        //         ans: [[6,8,5],[5,7,3],[4,6,1]]
        //     }
        // ],
        picked: ["", "", "", "", ""],
        possibleAnswers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        copy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    methods: {
        generateProblems() {
            var shuffledList = shuffle(this.problems2);
            for (let i = 0; i < 5; i++) {
                var selected = shuffledList[i];
                var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
                Vue.set(this.picked, i, selected.problem);
                Vue.set(this.possibleAnswers, i * 2, ansSelected[0]);
                Vue.set(this.possibleAnswers, i * 2 + 1, ansSelected[1]);
                Vue.set(this.copy, i * 2, ansSelected[0]);
                Vue.set(this.copy, i * 2 + 1, ansSelected[1]);
            }
            this.possibleAnswers.sort(() => Math.random() - 0.5);
        },
        checkInput() {
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
    }
})
