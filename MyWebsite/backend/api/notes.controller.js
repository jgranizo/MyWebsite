import NotesDAO from "../dao/notesDAO.js";
export default class NotesController{
    
    static async apiGetNotes(res,req,next){
        const notesPerPage = req.query.notesPerPage?
        parseInt(req.query.notesPerPage):20
        const page = req.query.page? parseInt(req.query.page): 0

        let filters = {}
        if(req.query.title){
            filters.title=req.query.title
        }
        else if(req.query.topic) {filters.topic= req.query.topic}
    
    const { notesList, totalNumNotes} = await
    NotesDAO.getNotes({filters,page,notesPerPage})

    let response = {
        notes: notesList,
        page:page,
        filters:filters,
        entries_per_page: notesPerPage,
        total_results: totalNumNotes,
    }
    res.json(response)
}
}