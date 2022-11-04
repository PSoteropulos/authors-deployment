const Author = require('../models/author.model')

module.exports = {
    getAllAuthors: (req,res)=>{
        Author.find().sort({name:1, createdAt:1}).collation({ locale: "en", strength:1 }) 
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneAuthor: (req,res)=>{
        Author.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    addAuthor: (req,res)=> {
        Author.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    
    updateAuthor:(req,res)=>{
        Author.updateOne({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteAuthor:(req,res)=>{
        Author.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}