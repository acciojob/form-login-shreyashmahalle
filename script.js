function getFormValue() {
      // get form inputs
      var first = document.querySelector('[name="fname"]').value.trim();
      var last = document.querySelector('[name="lname"]').value.trim();

      // join them and alert
      var fullName = (first + " " + last).trim();
      alert(fullName);
    }

    // ensure function runs when form is submitted
    document.getElementById("myForm").addEventListener("submit", function(e) {
      e.preventDefault();
      getFormValue();
    });