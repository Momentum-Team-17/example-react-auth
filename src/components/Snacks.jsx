const Snacks = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <section className="snacks">
      <h1 className="text-3xl font-bold">🐇 Rabbit Snacks 🥕</h1>
      <div className="grid grid-cols-4 gap-4 my-8">
        {nums.map((n) => (
          <div className="p-4 bg-teal-500 rounded-lg shadow-lg">{n}</div>
        ))}
      </div>
    </section>
  )
}

export default Snacks
