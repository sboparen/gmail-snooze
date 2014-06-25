// Gmail Snooze
// Install this as a Google Apps script.

// It's kind of slow with this many days but whatever, I need them.
MAX_DAYS = 60

function getLabelName(i) {
  return Utilities.formatString("Snooze/%03d days", i)
}

function setup() {
  // Create the labels we'll need for snoozing.
  GmailApp.createLabel("Snooze");
  for (var i = 1; i <= MAX_DAYS; ++i) {
    GmailApp.createLabel(getLabelName(i));
  }
}

function moveSnoozes() {
  var oldLabel, newLabel, page;
  for (var i = 1; i <= MAX_DAYS; ++i) {
    newLabel = oldLabel;
    oldLabel = GmailApp.getUserLabelByName(getLabelName(i));
    page = null;
    // Get threads in pages of 100 at a time.
    while(!page || page.length == 100) {
      page = oldLabel.getThreads(0, 100);
      if(page.length == 0) { break; }
      if(newLabel) {
        // Move the threads into today's label.
        newLabel.addToThreads(page);
      } else {
        // Move back to the inbox.
        GmailApp.moveThreadsToInbox(page);
      }
      // Move the threads out of yesterday's label.
      oldLabel.removeFromThreads(page);
    }
  }
}

// vim:syntax=javascript
