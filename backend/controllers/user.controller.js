

 const signin = (req,res) => {

     console.log (req.body)
      console.log ("this is signin ") ;
      res.status(200) . json ("sign up successfully") ; 
 } 

  const login = (req,res) => {
    console.log(req.body) ;
     console.log ("this is login ")
     res.status(200).json(req.body);
   }

  export {signin , login } 