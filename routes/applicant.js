var express = require('express');
var router = express.Router();
const applicantModal = require('../modals/applicantModal')

router.post('/add',async function(req, res) {
  try {
    const applicant = await new applicantModal(req.body);
    applicant.save((err,post)=>{
    if(post) {
        res.status(201).send({
            post,
            message:"Sent successfully"
        })
    }
    else {
        if(err.name === 'ValidationError') {
            let errors = Object.values(err.errors).map(el => el.message);
            let fields = Object.values(err.errors).map(el => el.path);
            let code = 400;
            if(errors.length > 1) {
                const formattedErrors = errors.join(' ');
                res.status(code).send({messages: formattedErrors, fields: fields});
            } else {
                res.status(code).send({messages: errors, fields: fields})
            }
        }
    }
    })
  }
  catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
