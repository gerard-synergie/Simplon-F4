
//You can filter the input values of a text <input> with the following setInputFilter function (supports Copy+Paste, Drag+Drop, keyboard shortcuts, context menu operations, non-typeable keys, the caret position, different keyboard layouts, validity error message, and all browsers since IE 9):
// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}