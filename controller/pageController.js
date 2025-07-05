
const Commentmodel = require('../model/commentModel');
const Postmodel = require('../model/postModel');

const HomePage = (req, res)=>{
    
    Postmodel.find()
    .populate({
        path: 'commentId',
        options: { sort: { createdAt: 1 } } 
    })
    .then(Data => {
        res.render('Home', { posts: Data });
    })
    .catch(err => console.log(err));

}


const savePost = (req,res )=>{
    const newpost = new Postmodel(req.body)
    newpost.save()
    .then(()=> {res.redirect('/')})
    .catch(err => console.log(err))
}

const saveComment = (req,res )=>{
    
    const Id=req.params.postid
    const newComment = new Commentmodel(req.body)
    newComment.save()
    .then((comment) =>{
        Postmodel.findById(Id)
        .then(post =>{
            post.commentId.push(comment._id)
            post.save()
            .then(()=> res.redirect('/'))
        })
    } )
    .catch(err => console.log(err))
}


module.exports ={
    HomePage,
    savePost,
    saveComment
}