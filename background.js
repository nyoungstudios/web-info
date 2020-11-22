// saves JSON file of urls mapped to the web info
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get(null, function(items) {
    console.log(items);
    const blob = new Blob([JSON.stringify(items, null, 4)], {type : 'application/json'});
    var downloadUrl = URL.createObjectURL(blob);
    chrome.downloads.download({url: downloadUrl}, function(downloadId) {
      console.log(`The download id is: ${downloadId}`);
      chrome.storage.local.clear(function() {
        console.log('Cleared storage.');
      });
    })
  });
});
