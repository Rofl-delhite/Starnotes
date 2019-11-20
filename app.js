showNotes();
// if user adds a note
let btn = document.getElementById('btn');
btn.addEventListener('click', fun);
function fun() {
    let txtarea = document.getElementById('txtarea');
    let titlearea = document.getElementById('titlearea');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let notesObj1 = {
        title: titlearea.value,
        text: txtarea.value
    }
    notesObj.push(notesObj1)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    txtarea.value = " ";
    titlearea.value = " ";

}
//show notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach((element, index) => {
        html = html + `
        <div id="notes" class="row">
            <div class="card mx-5 my-5" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <a href="index.html" id='${index}' class="btn btn-primary" onclick='delNote(this.id)'>Delete Note</a>
                </div>
                </div>`
    });
    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = 'Nothing to show Here.';
    }
}
function delNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
}
let search = document.getElementById('search');
search.addEventListener('input', () => {
    let inp = search.value.toLowerCase();
    let card = document.getElementsByClassName('card mx-5 my-5');
    Array.from(card).forEach((element) => {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inp)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})