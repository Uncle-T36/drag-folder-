function enterChat() {
    const name=document.getElementById("username") .value.trim();
    if(name 1==""){
        document.querySelector(".login-screen").classList.add("hidden");
        document.querySelector(".chat-screen").classList.remove("hidden");
        document.getElementById("user-welcome").innerText='Welcome,${name}';
    }
    
}

function sendMessage() {
    const input=document.getElementById("message-input");
    const chatbox=document.getElementById("chat-box")

    const message=input.value.trim();
    if (message !=="") {
        const yourMessage=document.createElement("div");
        yourMessage.innerText='🌙You: ${message}';
        chatbox.appendChild(yourMessage);
        input.value="";

        // Simulated echo
        setTimeout(() => {
            const reply =document.createElement("div");
            reply.innerText='🔥Them:message received in the void ...';
            chatbox.appendChild(reply);
        },1000);
    }
}