chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      function: modifyPage,
    });
  });
  
  function modifyPage() {
    // The content of your Tampermonkey script goes here
  }
  