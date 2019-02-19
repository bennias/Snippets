var currentUser = {
      gender: '',
      age: ''
};

var activeClass = "highlighted";
var selectedValues = document.forms["email-form"];
    
for (var i = 0, max = selectedValues.length; i < max; i++) {
    selectedValues[i].onclick = function() {
        currentUser[this.name] = this.value;
        clearState(this.name);
        changeView(currentUser[this.name], this.name);

        // Test Output
        // console.log(currentUser);
    }
}

function changeView(currentUserProp, selectorName){
    var addHighlight = document.querySelectorAll('div.' + selectorName);
    for (var i = 0, max = addHighlight.length; i < max; i++) {
        if (addHighlight[i].title === currentUserProp){
            addHighlight[i].classList.add(activeClass);
        }
    }
}

function clearState(selectorName){
    var removeHighlight = document.querySelectorAll('div.' + selectorName);
    for (var i = 0, max = removeHighlight.length; i < max; i++) {
        if (removeHighlight[i].classList.contains(activeClass)){
            removeHighlight[i].classList.remove(activeClass);
        }
    }
}
