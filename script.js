const handleGetFormData = () => ({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  });

  function isNumber(zipCode) {
    if (!isNaN(zipCode)) {
      return true;
    }
    return false;
  }

  function checkboxIsChecked(status) {
    return document.getElementById("status").checked;
  }

  

  function validateFormData(obj) {
    return handleGetFormData !== null && !isNaN(obj.zipCode) && document.getElementById("status").checked;
  }

  function submit() {

    let data = validateFormData(handleGetFormData());
  
    let warning = document.getElementById("warning");
  
    if (data == false){
  
      warning.innerHTML = "<div style='color:#FF0000'>Periksa form anda sekali lagi</div>";
  
    }else{
  
      warning.innerHTML = "";
  
    }
  }document.getElementById("myForm").addEventListener("submit-form", submit);
