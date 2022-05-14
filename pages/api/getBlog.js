// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getBlog?slug=how-to-learn-next-js   
import * as fs from "fs"


export default function handler(req, res) {
fs.readFile(`blogData/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if (err) {
        res.status(500).json({errr:"No Such Blogs Found"})
    }
    console.log(req.query.slug)
  res.status(200).json(JSON.parse(data))
})

}
