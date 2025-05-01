import Image from "next/image";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function About() {
  await sleep(2000);
  return (
    <div>
      <h1>About</h1>
      <input type="checkbox" defaultChecked className="toggle" />
      <Image 
        src='https://imgs.search.brave.com/cf8hA6yesNsXurBZ-8DBvPxh_mfn5I_iKL9LbDyA3XE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ1LzcwLzcw/LzM2MF9GXzI0NTcw/NzA1MV9uQWxrb3BW/OERDcUlVSk1MbmF1/dEcycEJDUWk2bGt3/Ty5qcGc' 
        width={500} 
        height={500}
        alt="Paris"
      />
      <Image
        src="/marco_aurelio.jpeg"
        width={500}
        height={500}
        alt="Emperador Romano Marco Aurelio"
      />
    </div>
  );
}
