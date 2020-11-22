// sets web page info

let data = {
  [document.URL]: {
    "referrer": document.referrer,
    "cookie": document.cookie
  }
}

// saves current url's web info
chrome.storage.local.set(data, function() {
  if(chrome.runtime.lastError) {
    alert('Failed to add to storage, please download the json data by clicking the Chrome Extension icon.');
  } else {
    console.log(`Adds ${document.URL} to storage.`);
  }
});


// prints to console the number of urls in storage
chrome.storage.local.get(null, function(items) {
  console.log(`There are ${Object.keys(items).length} items in the json data.`);
});
