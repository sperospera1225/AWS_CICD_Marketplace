const { exec } = require('node:child_process');

let response;
 
exports.handler = async (event, context) => {
  try {
    exec("ls -al", (err, stdout, stderr) => {
        if (err) {
            throw Error(`error: ${err.message}`);
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
        
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: "Hello Marketplace!",
        }),
      };
    });
  } catch (err) {
    console.log(err);
    return err;
  }
 
  return response;
};