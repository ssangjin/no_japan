// Saves options to chrome.storage
function save_options() {
  var showAlways = document.getElementById('showAlways').checked;
  var ignoreLink = document.getElementById('ignoreLink').checked;
  chrome.storage.sync.set({
    showAlways: showAlways,
    ignoreLink: ignoreLink
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = '저장되었습니다.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    showAlways: false,
    ignoreLink: false
  }, function(items) {
    document.getElementById('showAlways').checked = items.showAlways;
    document.getElementById('ignoreLink').checked = items.ignoreLink;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);