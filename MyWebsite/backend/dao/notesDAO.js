/**Access notes objects */
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
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
    pageNumber = 0,
    notesPerPage = 5,
} = {}){
let query;
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
                .skip(notesPerPage*pageNumber)

                const noteList = await cursor.toArray()
                const totalNumNotes = await notes.countDocuments(query)
                return {noteList, totalNumNotes}
}
catch(e){
    console.error(`unable to issue find command, ${e}`)
    return {noteList: [], totalNumNotes:0}
}
}



static async getTopics(){
    let topics = []
    try{topics = await notes.distinct("topic")
        return topics
    }

    catch(e){
        console.log(`unable to get topics, ${e}`)
        return topics
    }


}
static async getNoteById(id){
    try{
       let numberID= Number(id)
        return await notes.findOne({blogID:numberID})
    }
    catch(e){
        console.error(`something went wrong in getNoteById: ${e}`)
        throw e
    }
}
}




