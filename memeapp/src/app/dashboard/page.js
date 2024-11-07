import Link from "next/link";
import Detail from "../detail/[id]/page";

export default async function Dashboard () {

const ress = await fetch('https://api.imgflip.com/get_memes');
const data = await ress.json();
const memes = data.data.memes; 

    console.log(memes, "got memes");

return (
<>
    <h2 className="mb-3 text-2xl font-semibold font-mono text-center mt-6">Memes generator</h2>
<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ml-32">
    {memes.map((item) => {
return (
<Link className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    key={item.id} 
    href={`detail/${item.id}`}>
    <h2 className="mb-3 text-2xl font-semibold">
<img src={item.url} alt={item.name}  />
</h2>
<button>generate meme</button>
</Link>
)})}
</div>
</>
);
}
