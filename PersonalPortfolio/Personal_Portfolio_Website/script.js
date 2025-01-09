document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');
    const terminalText = document.getElementById('terminal-text');
    const terminalOutput = document.getElementById('terminal-output');
    const correctInput = 'Enter';
    let currentInput = '';
    let outputQueue = []; 

    const hiddenInput = document.getElementById('hidden-input'); 
    
    
    hiddenInput.focus();

    
    hiddenInput.addEventListener('input', function(event) {
        currentInput = hiddenInput.value;
        typedTextElement.textContent = currentInput;
    });

   
    hiddenInput.addEventListener('keydown', function(event) {
       
        if (event.key === 'Backspace') {
            
            currentInput = currentInput.slice(0, -1);
            typedTextElement.textContent = currentInput;
        } 
        
        else if (event.key === 'Enter') {
            if (currentInput === correctInput) {
                terminalText.textContent = 'Access granted. Initiating loading process...';
                simulateTerminalLoading();
            } else {
                terminalText.textContent = 'Incorrect input. Try again.';
                currentInput = ''; 
                typedTextElement.textContent = ''; 
                hiddenInput.value = ''; 
            }
        }
    });

    function simulateTerminalLoading() {
        const simulatedMessages = [
            'Loading system files...',
            'Connecting to server...',
            'Verifying credentials...',
            'Access granted.',
            'Initializing portfolio...',
            'Fetching assets...',
            'Preparing user data...',
            'Redirecting to portfolio...'
        ];

        
        simulatedMessages.forEach((message, index) => {
            setTimeout(() => {
                outputQueue.push(message);
                terminalOutput.textContent = outputQueue.join('\n'); 
            }, 1000 * (index + 1)); 
        });

        
        setTimeout(() => {
            window.location.href = 'Portfolio_Website/index.html'; 
        }, 1000 * (simulatedMessages.length + 1)); 
}});