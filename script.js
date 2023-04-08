function manipulateNumbers(numbers) {
            const promise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(numbers);
                }, 2000);
            });

            return promise
                .then((numbers) => {
                    const filteredNumbers = numbers.filter((n) => n % 2 === 0);
                    const outputElement = document.getElementById("output");
                    setTimeout(() => {
                        outputElement.textContent = filteredNumbers;
                    }, 1000);
                    return filteredNumbers;
                })
                .then((filteredNumbers) => {
                    const doubledNumbers = filteredNumbers.map((n) => n * 2);
                    const outputElement = document.getElementById("output");
                    setTimeout(() => {
                        outputElement.textContent = doubledNumbers;
                    }, 3000);
                    return doubledNumbers;
                })
        }

        manipulateNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
        
