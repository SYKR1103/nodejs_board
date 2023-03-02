

const express = require("express");
var router = express.Router();
const Comment = require("../schemas/comment");
const Post = require("../schemas/post");



//생성: "/:post_id" :
router.post("/posts/:post_id/comments", async(req, res) => {


    try {

        const data = await Post.findOne({ _id: req.params.post_id })
        console.log(data)
        console.log('0') 
        const newComment = new Comment ({
    
            post: data._id,
            commenter: req.body.commenter,
            content : req.body.content

        });
        console.log(newComment)             
        await newComment.save();
        res.status(200).json(newComment)

        } catch (err) {
          res.status(500).json(err);
        }
      });

// 조회
router.get("/posts/:post_id/comments", async(req, res) => {

    try {
        const commentList = await Comment.find({}).sort("-createdAt")
        res.status(200).json(commentList)

    } catch(err) {
        res.status(500).json(err);
    }

});


// 내용 업데이트 
router.put("/posts/:post_id/comments/:comment_id", async(req, res) => {

  
  try{
          data = await Comment.findOneAndUpdate({ _id: req.params.comment_id }, req.body);
          res.status(200).json(data);
          }

  catch(err) {
  res.status(500).json(err)
 }

})



// 내용 삭제

router.delete("/posts/:post_id/comments/:comment_id", async(req, res) => {


  try {

      {const data = await Comment.deleteOne({_id: req.params.comment_id });
      res.status(200).json(data);}


  } catch(err) {
      res.status(500).json(err)
  }

});






module.exports = router;