//ART
const fs = require('fs');
const imagemagick = require('imagemagick');
const path = require('path');
const dir = './public/img'
let results = [];
function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function(file){
      file = path.resolve(dir, file);

      fs.stat(file, function(err, stat){
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          //results.push(file);

          filewalker(file, function(err, res){
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);

          if (!--pending) done(null, results);
        }
      });
    });
  });
};
filewalker(dir, function(err, data){
  if(err){
    console.log('err', err);
    throw err;
  }

  // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
  console.log(data);
  let counter = 0;
 data.forEach( image => {
  console.log(image);
  counter++;
  let filename = 'image_' + counter + '.jpg';
  // convert image to base64 encoded string
  // var base64str = base64_encode(image);
  // var buf = Buffer.from(base64str, 'base64');
  // resizeImage(buf, filename ,305, 0.6);
  resizeImage(image, filename, 640, 0.75);
  // resizeImage(buf, filename, 1024, 0.75);
  // console.log(base64str);
// convert base64 string back to image
   });
});
console.log('results async', results)

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  var bitmap = new Buffer(base64str, 'base64');
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log('******** File created from base64 encoded string ********');
}

function resizeImage(binaryData, filename, size, quality) {
  console.log('results buf', binaryData)
  imagemagick.resize({
    // srcData: binaryData,
    // width:   size,
    // quality: quality
    srcPath: binaryData,
    dstPath: filename,
    width: size,
	quality: quality
  }, function(err, stdout, stderr){
    console.log('results before')
    if (err) {
      console.log('err', err)
      return reject(err);
    }
    console.log('results before base64')
    //var base64str = new Buffer(stdout, 'binary').toString('base64');
    //console.log('results base64')
    //base64_decode(base64str, filename);
  });
};
