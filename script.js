function loadContent () {
  // (A) FETCH "DUMMY.HTML"
  fetch("https://script.google.com/macros/s/AKfycbw0N43-yCGvdihQs3JCM8OVDjUC9YqhQ9Le7Y-ctPhGNV9tOyuUpKzQkNouYaw--rpD6A/exec")
 
  // (B) RETURN THE RESULT AS TEXT
  .then((result) => {
    if (result.status != 200) { throw new Error("Bad Server Response"); }
    return result.text();
  })
 
  // (C) PUT LOADED CONTENT INTO <DIV>
  .then((content) => {
    document.getElementById("demoShow").innerHTML = content;
  })
 
  // (D) HANDLE ERRORS - OPTIONAL
  .catch((error) => { console.log(error); });
}
