
async function main() {

  let resp = await fetch(getAbsURL('revert-theme.css'));
  resp = await resp.text();

  chrome.devtools.panels.applyStyleSheet(resp);

}

function getAbsURL(url) {

  return chrome.runtime.getURL(url);

}

main();
