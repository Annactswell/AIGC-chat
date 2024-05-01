var chatBox = document.getElementById('chatBox');
var toggleChat = document.getElementById('toggleChat');
var messagesDiv = document.getElementById('messages');
var input = document.querySelector('#chatInput input');

toggleChat.onclick = function() {
    chatBox.classList.toggle('active');
    input.focus(); // 聚焦到输入框
};

function sendMessage() {
    var message = input.value.trim();
    if (message) {
        displayMessage(message, 'own-message');
        input.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到最新消息
        setTimeout(getRobotResponse, 1000); // 模拟机器人思考后回复
    }
}

function getRobotResponse() {
    var responses = [
        "你好！我在这里帮助你。",
        "我不太明白你的意思，能详细说明吗？",
        "谢谢你的消息，有什么我可以帮助的？",
        "接收到了，有继续的问题吗？"
    ];
    var response = responses[Math.floor(Math.random() * responses.length)]; // 随机选择一个回答
    displayMessage(response, 'robot-message');
}

// function displayMessage(message, className) {
//     var messageElement = document.createElement('div');
//     messageElement.classList.add('message', className);
//     messageElement.textContent = message;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到最新消息
// }

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function displayMessage(message, className, isOwnMessage) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    
    var imgElement = document.createElement('img');
    imgElement.src = isOwnMessage ? '1.jpg' : '2.jpg'; // 替换为实际头像路径
    imgElement.classList.add('avatar');

    var textElement = document.createElement('div');
    textElement.textContent = message;
    textElement.classList.add('text');

    if (isOwnMessage) {
        messageElement.appendChild(textElement); // 先添加文本
        messageElement.appendChild(imgElement); // 然后添加头像
    } else {
        messageElement.appendChild(imgElement); // 先添加头像
        messageElement.appendChild(textElement); // 然后添加文本
    }

    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到最新消息
}

