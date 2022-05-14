// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"


export default async function handler(req, res) {
// fs.readFile("blogData/how-to-learn-next-js.json","utf-8",(err,data)=>{
//   res.status(200).json(JSON.parse(data))
// })

const data=await fs.promises.readdir("blogData")
console.log(data);

let myfile;
let allBlogs=[];

for (let index = 0; index < data.length; index++) {
  const item = data[index];
myfile=await fs.promises.readFile(("blogData/"+item),"utf-8")

allBlogs.push(JSON.parse(myfile))
}

res.status(200).json(allBlogs)

}
