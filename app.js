let randomNumber = (Math.floor(Math.random() * 5) + 1);
let clickCount = 0;

function clickAction() {

    console.log("Click!");
    clickCount++;

    let lblH1 = document.getElementById("h1Lbl");
    let inputText = document.getElementById("txtInput").value;


    console.log(randomNumber);

    if (randomNumber == inputText) {
        document.getElementById("imgBox").innerHTML = '<img width="300" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ3emw3Z2s5OTMydnRyM3lwbmM0YjVhd2ZwajdqM3FrZjJwcHJvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2afdli2NFvmq1KsIeS/giphy.gif" alt="">';
        document.getElementById("txtDisplay").innerText = "You Win!";
    } else if (randomNumber > inputText) {
        document.getElementById("imgBox").innerHTML = '<img width="300" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2loZnVxNTZ3cjA5eHZoMzIzbnQ3OHZkbGg4YjRnNHBzOHRqNW9oayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeuOet1BmYQiTcc/giphy.gif" alt="">';
        document.getElementById("txtDisplay").innerText = "Too low! Try again.";
    } else if (randomNumber < inputText) {
        document.getElementById("imgBox").innerHTML = '<img width="300" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2loZnVxNTZ3cjA5eHZoMzIzbnQ3OHZkbGg4YjRnNHBzOHRqNW9oayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeuOet1BmYQiTcc/giphy.gif" alt="">';
        document.getElementById("txtDisplay").innerText = "Too high! Try again.";
    }

    if (clickCount == 1) {
        document.getElementById("countDisplay").innerText = "You have 2 Chances left.";
    } else if (clickCount == 2) {
        document.getElementById("countDisplay").innerText = "You have 1 Chance left.";
    } else if (clickCount == 3) {
        document.getElementById("countDisplay").innerText = "You have 0 Chances left.";
    } else if (clickCount > 3) {
        clickActionReset();
    }

}

function clickActionReset() {
    clickCount = 0;
    randomNumber = (Math.floor(Math.random() * 5) + 1);
    document.getElementById("countDisplay").innerText = "You have 3 Chances";
    document.getElementById("txtDisplay").innerText = "";
    document.getElementById("txtInput").value = "";
    document.getElementById("imgBox").innerHTML = "";
}


