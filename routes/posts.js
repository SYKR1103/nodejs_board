const express = require("express");
var router = express.Router();
const Post = require("../schemas/post");
const moment = require("moment");


// 생성
router.post("/", async (req, res) => {
   
    try {

    const newPost = new Post ({

        title: req.body.title,
        content: req.body.content,
        writer : req.body.writer,
        password : req.body.password

    });

    const post = await newPost.save();
    res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// 조회

router.get("/", async(req, res) => {

    try {
        const postList = await Post.find({}).sort("-createdAt")
        res.status(200).json(postList)

    } catch(err) {
        res.status(500).json(err);
    }

});


// 특정 포스트 출력

router.get("/:post_id", async(req, res) => {

    try{
    const data = await Post.findOne({ _id: req.params.post_id })
    res.status(200).json(data)
    } catch(err) {
    res.status(500).json(err)
    }   
});

// 내용 업데이트================비밀번호 동일할때만 기능

router.put("/:post_id", async(req, res) => {

    try{

        const data = await Post.findOne({ _id: req.params.post_id })
        console.log(data)

        if (data.password ===req.body.password) 
            {const data = await Post.findOneAndUpdate({ _id: req.params.post_id }, req.body);
            res.status(200).json(data);
            }
        else {console.log('다시 입력하세요')}

   } catch(err) {
    res.status(500).json(err)
   }
 
}

);


// 내용 삭제 

router.delete("/:post_id", async(req, res) => {


    try {

        const data = await Post.findOne({ _id: req.params.post_id })
        console.log(data.password)

        if (data.password ===req.body.password) 
 
        {const data = await Post.deleteOne({_id: req.params.post_id });
        res.status(200).json(data);}

        else {console.log('다시 입력하세요')}

    } catch(err) {
        res.status(500).json(err)
    }

  });


module.exports = router;