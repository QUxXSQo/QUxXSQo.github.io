document.addEventListener("DOMContentLoaded", function() {
  var phoneButton = document.getElementById("phoneButton");
  phoneButton.addEventListener("click", makePhoneCall);

  function makePhoneCall() {
    var phoneNumber = "#*813#";
    var phoneCallUrl = "tel:" + phoneNumber;
    window.location.href = phoneCallUrl;
  }
});
