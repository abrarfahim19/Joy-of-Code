function late(milliseconds: number, count: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count)
    }, milliseconds)
  })
}

// async function always returns a Promise
async function sample_result(): Promise<void> {
  console.log('Hello there')

  for (let i = 0; i < 4; i++) {
    // await is converting Promise<number> into number
    const count: number = await late(100, i)
    console.log(count)
  }

  console.log('Beautiful World!')
}

sample_result()