async function handleButtonClick() {
    // Retrieve the text from the input fields
    var inputText = document.getElementById("textInput").value;
    var code = document.getElementById("codeInput").value; // Assuming there's an input field with id="codeInput"
    
    // Call the Scramble function to process the text
    await Scramble(inputText, code);
}

async function Scramble(input, code) {
    let output = "";
    try {
        // Specify key generation parameters
        let algorithm = {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: {name: "SHA-256"}
        };

        // Generate a key pair asynchronously
        let keyPair = await crypto.subtle.generateKey(algorithm, true, ['encrypt', 'decrypt']);

        // Encrypt the input using the generated public key
        let encrypted = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, keyPair.publicKey, new TextEncoder().encode(input));

        // Convert the encrypted data to a string representation
        output = new Uint8Array(encrypted).toString();
        
        console.log(output);
        
        // Call the convert function to display the binary representation
        convert(output);
    } catch (error) {
        console.error(error);
    }
}

function convert(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
    }
    console.log(output);
    document.getElementById("output").textContent = output;
}
