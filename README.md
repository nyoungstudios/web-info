# Web Info
Saves helpful web info to a JSON file using the Chrome Local Storage API.

## Use Case
I was working on a web scraping project where I needed to quickly collect a lot of cookie and referrer data associated with its respective url so I could feed my web scraper with valid data. Instead of opening up the Chrome developer console every time, I built this simple Chrome extension.

## How to use?
1. Clone this repo to your local machine.
2. Change the url matches under content_scripts in the [manifest.json](./manifest.json) file to the url patterns you would like to gather data from.
3. Load the unpacked extension in [Google Chrome](chrome://extensions)
4. Every time you visit a web site that is included in the url patterns, it will print to console the number of urls that are in storage.
5. Then, click the Chrome extension icon to download the JSON file containing all the data.
6. After clicking the extension, all previously stored data will be erased (so please do not cancel the download - unless you don't want the data).
