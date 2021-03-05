const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...!'
}

const addNote = (title,body) =>{
    const notes=loadNotes()

    
    //const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title)

    //if(duplicateNotes.length === 0){

    if(!duplicateNote){
 
        notes.push({
            title : title,
            body : body
        })

        saveNotes(notes)
        console.log('new node added')
    }
    else{
        console.log('note title was taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Allnotes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const databuffer = fs.readFileSyncync('Allnotes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return[]
    }
    
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const noteToKeep = notes.filter( (note) => note.title !== title)
    if(notes.length < noteToKeep.length)
    {
        console.log(chalk.green.inverse('note removed'))
        saveNotes(noteToKeep)
    }
    
}

const listNote =() =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach ((note) => {
          console.log(note.title)
    })

    
}

const readNote =(title)=>{

    const notes = loadNotes()
    const FindNote = notes.find((note) => note.title === title)
    
    if(FindNote){
        console.log(chalk.inverse(FindNote.title))
        console.log(FindNote.body)
    }else{
        console.log(chalk.red.inverse('Title Not Found'))
    }
}

module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNote : loadNotes,
    readNote : readNote
}