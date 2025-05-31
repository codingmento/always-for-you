const messages = [
  "كله خير حتى البعد فيه خيره نحن ما منعرفها بس بالمستقبل حا نعرف انها خيره ونحمد ربنا ",
  
];


function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

document.getElementById("message").innerText = getRandomMessage();
