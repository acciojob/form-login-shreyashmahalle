   function getFormValue(e) {
      if (e) e.preventDefault();

      const form = document.forms[0];
      let first = (form.fname.value || '').trim().replace(/\s+/g, ' ');
      let last  = (form.lname.value || '').trim().replace(/\s+/g, ' ');

      // Join only the parts that exist, ensuring single spaces
      const fullName = [first, last].filter(Boolean).join(' ');

      alert(fullName);   // e.g., "John Doe" or "John Mark Doe"
      return false;      // prevent navigation
    }
