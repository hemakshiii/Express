const express = require('express')
const router = express.Router()

const {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
}=require('../controller/people')
//GET METHOD
router.get('/',getPerson)
    
//POST METHOD
router.post('/',createPerson)
    
//POST
router.post('/postman',createPersonPostman)
    
//PUT
router.put('/:id', updatePerson)
    
//DELETE
router.delete('/:id',deletePerson)
    
//another same method
// router.route('/').get(getPerson).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports =router