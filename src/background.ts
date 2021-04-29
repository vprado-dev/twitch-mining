chrome.runtime.onMessage.addListener(request => {
  console.log('Message received in background.js!', request);
});
