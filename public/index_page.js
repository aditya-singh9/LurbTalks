// Invite Link Input
function getInputValue() {
  var url = document.getElementById("invite-link-input").value;
  var code = url.split("/");
  window.open(code[3]);
}
