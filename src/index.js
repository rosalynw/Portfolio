//ssend email
document.getElementById('email-Form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const senderEmail = document.getElementById('sender-email').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value;

    const mailToLink = 'mailto:rosalynwimberly@gmail.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(message) +
      '%0D%0A%0D%0ASender\'s Email: ' + encodeURIComponent(senderEmail);

    window.location.href = mailToLink;
}

function displayEmail() {
    const emailLayout = document.getElementById('email-layout')
    if (emailLayout.style.display === 'none') {
        emailLayout.style.display = 'block'
    } else {
        emailLayout.style.display = 'none'
    }
}