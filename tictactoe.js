let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function gameCheck() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `${board[a]} wins!`;
            gameOver = true;
            return;
        }
    }

    if (board.every(cell => cell !== "")) {
        document.getElementById('status').innerText = "It's a tie!";
        gameOver = true;
    }
}

function makeMove(index) {
    if (gameOver || board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    gameCheck();

    if (board.every(cell => cell !== "" && !gameOver)) {
        document.getElementById('status').innerText = "It's a tie!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restart(){
 location.reload();   
}