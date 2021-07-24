const Meme = require('../models/memedata'); //Import Meme class 

exports.getHomePage = (req,res,next) => {
    res.render("home");
};

// const memes = [];

exports.postAddMeme = (req,res,next) => {
    const name = req.body.uname;
    const caption = req.body.caption;
    const iurl = req.body.mmlink ; 
    const meme = new Meme(name,caption,iurl);
    meme.save();
    // memes.push({uname:name,caption:caption,iurl:iurl});
    
};

exports.getFormPage = (req,res,next) => {
    res.render("top");
};

exports.getMemes = (req,res,next) => {
    Meme.fetchAll(memes => {   
        res.render('bottom', {
          memes:memes
        });
      });
    // res.render('bottom',{
    //   memes:memes
    // })
    };

// exports.getMemes = (req,res,next) => {
//   Meme.fetchAll(memes =>{
//     if (memes.uname = req.param.uname){
//       res.render('top');
//     }
//     else {
//       res.render("bottom");
//     }
//   });
// }