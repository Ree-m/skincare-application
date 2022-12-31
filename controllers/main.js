module.exports = {
    getIndex: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');

      res.send(
        "main get request working "
      );

      console.log("main controller on!!!")
      
    }
  };
    