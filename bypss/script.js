document.addEventListener("DOMContentLoaded", function() {
  var phoneButton = document.getElementById("phoneButton");
  phoneButton.addEventListener("click", makePhoneCall);

  function makePhoneCall() {
    var phoneNumber = "812#";
    var encodedPhoneNumber = encodeURIComponent(phoneNumber);
    var phoneCallUrl = "tel:" + encodedPhoneNumber;
    window.location.href = phoneCallUrl;
  }
});

