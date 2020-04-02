var TIME_INT = 180;
var TIME_STR = "three minutes";
var secondsLeft = TIME_INT;
var NUM_GEN = 10;

let currRound = 0;



var problems = new Vue({
    el: `#problems`,
    data: {
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
                problem: "⎵0 / 4 = ⎵",
                ans: [[2,5]]
            },
        ],
        problems3: [
            {
                problem: "⎵ squared = ⎵⎵",
                ans: [[4,1,6],[7,4,9],[8,6,4],[9,8,1]]
            },
            {
                problem: "⎵9 / ⎵ = 8 remainder ⎵",
                ans: [[6,8,5],[5,7,3],[4,6,1]]
            }
        ],
        picked: ["", "", "", "", ""],
        correctAnswers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    },
    methods: {
        generateProblems() {
            for (let i = 0; i < 5; i++) {
                var selected = this.problems2[Math.floor(Math.random() * this.problems2.length)];
                var ansSelected = selected.ans[Math.floor(Math.random() * selected.ans.length)];
                Vue.set(this.picked, i, selected.problem);
                Vue.set(this.correctAnswers, i * 2, ansSelected[0]);
                Vue.set(this.correctAnswers, i * 2 + 1, ansSelected[1]);
            }
            this.correctAnswers.sort(() => Math.random() - 0.5);
        }
    }
})