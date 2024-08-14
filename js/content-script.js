function copyHandle(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
 
    navigator.clipboard.writeText(text)
        .then(() => {
            $.toast('数据已经上传到剪切板，请进行下一步操作！')
        })
        .catch(err => {
            const input = document.createElement('input')
            document.body.appendChild(input)
            input.setAttribute('value', text)
            input.select()
            if (document.execCommand('copy')) {
              document.execCommand('copy')
            }
            document.body.removeChild(input)
            $.toast('数据已经上传到剪切板，请进行下一步操作！')
        })
        .catch(err => {
            $.toast('无法复制此文本，异常信息如下', err)
        });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    copyHandle(document.cookie);
    sendResponse({ cookie: document.cookie });
});
