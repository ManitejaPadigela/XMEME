const fs = require('fs');

const path = require('path');

const p = path.join(path.dirname(require.main.filename),
'data',
'memes.json'
); // path to the JSON file

const getMemesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb( JSON.parse(fileContent) );  //Json.parse will return error when we try parse an empty string
      }
    });
  };

module.exports = class Meme {
    constructor(uname,caption,iurl){
        this.uname = uname;
        this.caption = caption;
        this.iurl = iurl;
    }
    save() {
      const promise = new Promise((resolve,reject)=>{
        resolve(getMemesFromFile( memes => {
          console.log(typeof(memes))
          memes.push(this);
          fs.writeFile(p, JSON.stringify(memes), err => {
            console.log(err);
          });
        }));
        
        return promise;

      })
        
      }
    
    static fetchAll(cb) {    //Static since we dont all the items in that class not for the instance class
        getMemesFromFile(cb);
      }

    static findByName(name, cb){
      getMemesFromFile(memes => {
        const meme = memes.filter(meme => meme.uname == name);
        cb(meme);
      });
    }

};

