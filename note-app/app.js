const chalk = require('chalk')
const yargs = require('yargs')
const notesUtility = require('./notes.js')

//adding a note
yargs.command({
    command:'add',
    describe:'add a new node',
    builder:{
        title:{
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body:{
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv){
        notesUtility.addNote(argv.title,argv.body)
        console.log(argv.title)
        console.log(argv.body)
    }
})

//remove a node
yargs.command({
    command : 'remove',
    describe : 'remove a node',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        } 
    },
    handler (argv){
        notesUtility.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'List your command',
    handler(){
        notesUtility.listNote()
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'read your command',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notesUtility.readNote(argv.title)
    }
})