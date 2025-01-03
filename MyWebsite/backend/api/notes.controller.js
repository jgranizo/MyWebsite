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
}