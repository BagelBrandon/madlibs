function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var place = document.getElementById('place').value;
    var color = document.getElementById('color').value;
    var adjective1 = document.getElementById('adjective1').value;
    var number = document.getElementById('number').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;





    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "story";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "I took a " + color + " " + noun1 + " to " + place +
    " that " + adjective1 + " " + noun1 + " got her throat " + verb1 +
    " I like to rock out, I'm misfit " +
    "my emo " + " " +noun1 + " like her " + noun3 + " slit "
    + adjective1 + " hair " + noun1 + " like I'm corbin " +
    "got like " + number + " " + noun1 + ", I'm mormon, "
    + verb2 + " on your main " + noun1 + " forehead " +
    "don't want your " + noun2 + " just want " + verb2;



    // Display story by putting title & paragraphs into appropriate divs. (3 points)

    document.getElementById('one').innerHTML = paragraph1;



}
