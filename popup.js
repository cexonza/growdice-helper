function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content_script.js']});
    });
  }
injectTheScript();

function stopLoop(){
  running = false;
}


  document.getElementById('authenticateBtn').addEventListener('click', autoLimbo);
  document.getElementById('stopBtn').addEventListener('click', stopLoop);