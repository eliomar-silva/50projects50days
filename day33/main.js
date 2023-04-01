const addNoteBtn = document.querySelector('.btn');


addNoteBtn.addEventListener('click', () => addNewNote());

const addNewNote = (text) => {
  const note = document.createElement('div');  
  const notesEl = document.querySelector('.notes');

  note.innerHTML = `
  <div class="note">
      <div class="header-note">
        <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
        <div class="trash"><i class="fa-sharp fa-solid fa-trash-can"></i></div>
      </div>
      <div class="main ${text? '' : 'hidden'}"></div>
      <textarea name="textarea" id="body-note" class="body-note ${text? 'hidden': ''}" cols="10" rows="10"></textarea>
    </div> 
  `;
  
  editText(note,text);

  notesEl.appendChild(note);
}

const editText = (note, text) => {
  const editBtn = note.querySelector('.edit'); 
  const trashEl = note.querySelector('.trash')
  const textareaEl = note.querySelector('.body-note'); 
  const mainEl = note.querySelector('.main'); 
      
  textareaEl.value = text? text: '';
  mainEl.innerHTML = `<p>${text? text: ''}</p>`

  trashEl.addEventListener('click', () => {
    note.remove();

    saveNotes();
  })

  editBtn.addEventListener('click', () => {
    textareaEl.classList.toggle('hidden');
    mainEl.classList.toggle('hidden');

    textareaEl.focus();  
  })

  textareaEl.addEventListener('input', (e) => {
    const value = e.target.value;

    mainEl.innerHTML = `<p>${value}</p>`;

    saveNotes();
  })
}
const saveNotes = () => {
  const notesText = document.querySelectorAll('.body-note');
  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  })

  localStorage.setItem('notes', JSON.stringify(notes))
} 

const callNotesStore = () => {
  const storeNotes = JSON.parse(localStorage.getItem('notes'));

  if(storeNotes) {
  storeNotes.forEach((note) => addNewNote(note))
  }

}

callNotesStore();