import Image from "next/image";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function About() {
  await sleep(2000);
  return (
    <div>
      <h1>About</h1>
      <Image
        src="/marco_aurelio.jpeg"
        width={500}
        height={500}
        alt="Emperador Romano Marco Aurelio"
      />
    </div>
  );
}
