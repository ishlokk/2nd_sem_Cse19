function reverseNumber() {
        let num = document.getElementById("numberInput").value;
        let reversed = 0;

        // Convert to integer
        num = parseInt(num);

        while (num !== 0) {
            let digit = num % 10;
            reversed = reversed * 10 + digit;
            num = Math.floor(num / 10);
        }

        document.getElementById("result").innerText = 
            "Reversed Number: " + reversed;
    }