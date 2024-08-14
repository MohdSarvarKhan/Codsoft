window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
            buttonClick(e.target.id);
        }
    });

    function buttonClick(buttonId) {
        if (buttonId !== "ButtonC" && buttonId !== "Button=") {
            var button = document.getElementById(buttonId);
            var value = button.value === 'x' ? '*' : button.value;
            entries(value);
        }
    }

    function entries(value) {
        input.value += value;
    }

    document.getElementById("Button=").addEventListener("click", function() {
        try {
            input.value = eval(input.value);
        } catch {
            alert("Invalid input");
            input.value = "";
        }
    });

    document.getElementById("ButtonC").addEventListener("click", function() {
        input.value = "";
    });
};
