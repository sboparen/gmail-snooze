Gmail Snooze
============

This script lets you snooze emails in your Gmail;
the email is archived, but will reappear in a set number of days.
If you use Inbox Zero, you might like this a lot.

Based on
http://gmailblog.blogspot.ca/2011/07/gmail-snooze-with-apps-script.html

To install:
* Go into Google Drive and make a new spreadsheet.
(This step seems kind of silly, is it really necessary?)
* Tools > Script editor...
* Select "Blank Project"
* Paste the code into `Code.gs`
* Save and name the project "Gmail Snooze"
* Run > `setup`.
This will create the labels and requires authorization.
It does take a minute or two if you go up to 60 days like I do.
* Resources > Current project's triggers
* Add a trigger for `moveSnoozes` that is "Time-driven"
with a "Day timer", and pick a time range you're likely to
be asleep for.

Now just move an email to one of the Snooze labels and archive it.
It will reappear in your Inbox later.
