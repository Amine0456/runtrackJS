var keylogger = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();
  
  if (/^[a-z]$/.test(key)) {
    if (document.activeElement === keylogger) {
      keylogger.value += key + key;
    } else {
      keylogger.value += key;
    }
  }
});
