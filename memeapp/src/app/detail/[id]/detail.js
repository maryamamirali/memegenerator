'use client'
import { useState } from "react";

export default function Detailpage({ meme }) {

const [text0, setText0] = useState('');
const [text1, setText1] = useState('');
const [generatedMemeUrl, setGeneratedMemeUrl] = useState(null);
const { id, url, name } = meme;


  // Function to generate meme
const generateMeme = async () => {

const response = await fetch(
//https://api.imgflip.com/caption_image?template_id=${meme.id}&username=shehbaz&password=Baltoro@1122&text0=${firstText}&text1=${secondText}
`https://api.imgflip.com/caption_image?template_id=${id}&username=imaryvmamir&password=m070905a&text0=${text0}&text1=${text1}`,
{ method: 'POST' }
);

const data = await response.json();
    console.log(data , "data");


if (data.success) {
    setGeneratedMemeUrl(data.data.url);
} else{
    alert('Failed to generate meme: ' + data.error_message);
}
};


return (<>
    <h3 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-3 text-2xl font-semibold font-sans text-center mt-6">Generator</h3>
<div className="ml-96">
    <img src={url} width="50%" className="" alt={name} />
    <h1 className="text-gray-500 font-serif top-0 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:p-4">{name}</h1>
<br />
<input
    className="text-center mt-1 text-sm text-gray-500"
    placeholder="enter text 1"
    value={text0}
    onChange={(e) => setText0(e.target.value)}/>
<br />
<br />
<input
    className="text-center mt-1 text-sm text-gray-500"
    placeholder="enter text 2"
    value={text1}
    onChange={(e) => setText1(e.target.value)}/>
<br />
<br />
    <button className="generatebtn" onClick={generateMeme}>Generate Meme</button>
<br />
<br />
{generatedMemeUrl && (
    <img src={generatedMemeUrl} alt="Generated Meme" width="50%" />
)}
</div>
</>
);
}
