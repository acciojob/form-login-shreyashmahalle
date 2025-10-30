function getFormvalue(event) {
  event.preventDefault(); // prevent form submission reload

  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  const fullName = `${fname} ${lname}`.trim();

  if (fullName) {
    alert(fullName);
  } else {
    alert("Please enter your name.");
  }
}
