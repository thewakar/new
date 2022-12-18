function loadContent () {
  // (A) FETCH "DUMMY.HTML"
  fetch("https://thewakar.github.io/new/wish.html")
 
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
