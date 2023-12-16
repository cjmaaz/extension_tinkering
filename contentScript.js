chrome.runtime.sendMessage({ message: "getSfHost", url: location.href }, cookie => {
  if (cookie) {
    console.log(JSON.parse(cookie));
  }
});