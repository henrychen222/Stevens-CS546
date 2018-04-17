(function() {

    let palindromeMethods = {
        isPalindrome: function(text) {
            text = text.toLowerCase();
            text = text.replace(/[.,\/#!$%\^&’\*;:{}=\?-_`~()]/g,"").replace(/\s+/g,'');
            textArray = text.split('');
            textArrayReversed = text.split('').reverse()

            if(textArray.join() == textArrayReversed.join()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    
    //get the form
    var staticForm = document.getElementById("static-form");

    if(staticForm) {
        //get the attempts <ul> 
        AttemptsList = document.getElementById("attempts");
    }

    staticForm.addEventListener("submit", function(event) {
        event.preventDefault();
        //Lowercase the text, Strip all non alphanumeric text including spaces
        var isPalindrome = palindromeMethods['isPalindrome'];
        //get the error container for rendering out the error if textarea is empty
        var errorTextElement = document.getElementById("error-container");
        try {
            //Get the value of the textarea
            var textArea = document.getElementById("palindrome").value;
            
            //If textarea is empty,stop palindrome checking and inform an error
            if(textArea === "") {
                errorTextElement.classList.remove('hidden');
                throw new Error("A value must be provided in the text area");
            }
            else {
                errorTextElement.classList.add('hidden');
            }

            var li = document.createElement("li");
            //Determine whether or not the text is a palindrome
            var result = isPalindrome(textArea);
            
            //if it is palindrome, add it to the list with is-palindrome css style, otherwise not-palindrome
            if(result) {
                li.classList.add('is-palindrome');
            }
            else {
                li.classList.add('not-palindrome')
            }
            //Create a text node to show the textarea input
            var textnode = document.createTextNode(textArea);
            //Append the text to <li>
            li.appendChild(textnode);
            //Append <li> to AttemptsList <ul>
            AttemptsList.appendChild(li);

        } catch(e) {
            var message = typeof e === "string" ? e : e.message;
            errorTextElement.textContent = e;
        }  
    });
})();