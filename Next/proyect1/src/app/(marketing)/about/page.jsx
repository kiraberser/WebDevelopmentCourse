function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function About() {
  await sleep(2000);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
