// Write your code here!
main = document.getElementById('main');
main.remove()

// The following 2 codes also work for task 1
// document.getElementById('main').remove();
// document.querySelector("#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"

// The nect line can also work for task 2
// newHeader.setAttribute('id', 'victory')


newHeader.textContent = "Dennis Mburu is the champion"


document.body.append(newHeader);



