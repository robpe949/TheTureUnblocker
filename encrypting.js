function handleButtonClick() {
    // Retrieve the text from the input field
    var inputText = document.getElementById("textInput").value;
    
    // Call another function to process the text
    Scramble(inputText);
}



async function Scramble(input, code) {
    let output = "";
    try {
        // Generate a key asynchronously
        let key = await crypto.subtle.generateKey(code, false, ['encrypt', 'decrypt']);
        
        // Encrypt the input using the generated key
        let encrypted = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, key.publicKey, new TextEncoder().encode(input));

        // Convert the encrypted data to a string representation
        output = new Uint8Array(encrypted).toString();
        
        console.log(output);
    } catch (error) {
        console.error(error);
    }
}


function convert(input) {
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
}