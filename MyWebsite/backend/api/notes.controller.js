import NotesDAO from "../dao/notesDAO.js";
export default class NotesController{
    
    static async apiGetNotes(req,res,next){
        req.query.notesPerPage;
        const notesPerPage = req.query.notesPerPage?
        parseInt(req.query.notesPerPage):5
        const pageNumber = req.query.pageNumber? parseInt(req.query.pageNumber): 0

        let filters = {}
        if(req.query.title){
            filters.title=req.query.title
        }
        else if(req.query.topic) {filters.topic= req.query.topic}
    
    const { noteList, totalNumNotes} = await
    NotesDAO.getNotes({filters,pageNumber,notesPerPage})

    let response = {
        notes: noteList,
        page:pageNumber,
        filters:filters,
        notes_per_page: notesPerPage,
        total_results: totalNumNotes,
    }
    res.json(response)
}


static async apiGetNoteById(req,res,next){
    try{
        let id = req.params.id || {}
        let note = await NotesDAO.getNoteById(id)
  
        if(!note){
            res.status(404).json({error:"not found"})
            return
        }
        res.json(note)
    }
    catch(e){
        console.log(`api, ${e}`)
        res.status(500).json({error:e})
    }
}

static async apiGetTopic(req,res,next){
try{
    let propertyTypes = await NotesDAO.getTopics()
    res.json(propertyTypes)
}
catch(e){
    console.log(`api,${e}`)
    res.status(500).json({error:e})
        }
    }

}