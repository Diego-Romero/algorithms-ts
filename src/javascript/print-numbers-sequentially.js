const sleep = (i, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(i), ms));

async function print() {
  for (let i = 0; i < 11; i++) {
    const n = await sleep(i, Math.random() * 500)
    console.log(n)
  }
}

print()