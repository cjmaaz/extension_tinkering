chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.cookies.get({ url: request.url, name: "sid", storeId: sender.tab.cookieStoreId }, cookie => {
    if (!cookie) {
      sendResponse(null);
      return;
    }
    console.log(cookie);
    const stringifiedData = JSON.stringify(cookie);
    sendResponse(stringifiedData);
  })
})