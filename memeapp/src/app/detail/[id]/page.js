import Detailpage from "./detail";

export default async function Detail ({params}) {

const { id } = params
console.log(id , "id");

//fetching

const ress = await fetch('https://api.imgflip.com/get_memes')
const product = await ress.json()
const meme = product.data.memes.find((memes) => memes.id === id); 


return <>
    <Detailpage meme = {meme} />
</>
}