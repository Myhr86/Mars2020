
function formValitation() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var name = document.forms["marsForm"]["Name"].value;
  var email = document.forms["marsForm"]["email"].value;
  var number = document.forms["marsForm"]["Number"].value;
  var text = document.forms["marsForm"]["text"].value;
  if (name == "") {
    alert("Please enter your first name");
    return false;
  } else if (email == "") {
    alert("Please enter your email");
    return false;
  } else if (mailformat.test(email) == false) {
    alert("Invalid email address");
    return false;
  } else if (number == "") {
    alert("Please enter your phone number");
    return false;
  } else if (phoneformat.test(number) == false) {
    alert("Invalid phone number");
    return false;
  } else if (text == "") {
    alert("Please type in your message in the text field");
    return false;
  } else {
    alert("You have successfully submitted the form!");
  }
}
