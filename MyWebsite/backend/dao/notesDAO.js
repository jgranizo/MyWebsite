/**Access notes objects */

let notes

export default class NotesDAO{
    static async injectDB(conn){
        if(notes){return}
        try{    /**Connects to collection */
            notes = await conn.db(process.env.MYBLOG_NS) 
            .collection('notes')
        }
        catch(e){
            console.error(`unable to connect in NotesDAO: ${e}`)
        }
    }

static async getNotes({
    filters = null,
    page = 0,
    notesPerPage = 20,
} = {}){
let query
if(filters){
    if('title' in filters){
        query = {title:filters['title']}
    }else if("topic" in filters){
        query= {topic:filters['topic']}
    }
}
let cursor
try{
    cursor = await notes
                .find(query)
                .limit(notesPerPage)
                .skip(notesPerPage*page)
                totalNumNotes = await notes.countDocuments(query)
                return {notesList, totalNumNotes}
}
catch(e){
    console.error(`unable to issue find command, ${e}`)
    return {moviesList: [], totalNumNotes:0}
}
}
}




