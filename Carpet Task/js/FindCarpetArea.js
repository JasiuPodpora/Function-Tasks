var length = prompt("Enter a whole number for the length of your carpet.");
        var width = prompt("Enter a whole number for the width of your carpet.");
        function area(length, width) {
            return length * width;
        }
        
        document.write('The area of your carpet is ' + area(length, width) + 'm(2)');         
