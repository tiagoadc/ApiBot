
const dao = require('../config/index')




const get_absence = (date1, date2) => {
    const values = [date1, date2]

    const query = `SELECT TO_JSONB(JSONB_AGG(t)) bank
    FROM (
        select wo.*, u.fullname, b.fullname as user_beneficiary, a.fullname as user_approver 
        from hr_absences_report wo 
        left join fnd_user u on wo.id_user = u.id 
        left join fnd_user b on wo.id_user_beneficiary = b.id 
        left join fnd_workflow wf on wo.number_ref = wf.number_ref 
        left join fnd_user a on wf.id_user = a.id 
        where wf.id_process = 22 and wf.id_task = 97 and wo.doc_date BETWEEN $1 AND $2
    ) T`

    return new Promise((resolve, reject) => {

        dao.pool.query(query, values, async (error, results) => {
            if (error) return reject(error)
            else
                return resolve(results['rows'][0]['bank'])
        })
    })
}









module.exports = {  get_absence }