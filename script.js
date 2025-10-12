 function getFormValue(event) {
      event.preventDefault(); // stop form from reloading page

      // get and clean values
      const first = document.querySelector('[name="fname"]').value.trim();
      const last = document.querySelector('[name="lname"]').value.trim();

      // handle empty fields
      if (!first && !last) {
        alert("Please enter your name.");
        return;
      }

      // concatenate with space
      const fullName = ${first} ${last}.trim();

      // show in alert
      alert(fullName);
    }