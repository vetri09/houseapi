var express = require('express');
var router = express.Router();
const housesModel = require('../modals/housesModel')

router.post('/add',async function(req, res) {
  try {
    const house = await new housesModel(req.body);
    house.save((err,post)=>{
    if(post) {
        res.status(201).send({
            post,
            message:"Created successfully"
        })
    }
    })
  }
  catch (error) {
    res.status(500).send(error);
  }
});
router.get('/', async (req, res) => {
    try {
        let { page } = req.query;
        if(!page) {
            page = 1;
        }

        const size = 3;
        const skip = (page - 1) * size;

        const list = await housesModel.find().limit(size).skip(skip);

        res.status(200).send({page, size, data: list});

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
