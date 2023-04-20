chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status == 'complete') changeTheme(tab);
});


function changeTheme(tab) {
    chrome.scripting.insertCSS({
            target: {tabId: tab.id},
            css: "h1 { color: #212121; }"
        })
}