const x=require("express"); const y=x(); y.use(x.static('./build'));

y.listen(process.env.port||4000,()=>{console.log("listening to port ...");});