export function ColorRunway({ label, color }) {
  return (
    <>
      <p className="text-2xl">{label}</p>
      <div className="sm:grid-cols-10 grid">
        {Object.keys(color).map((value) => (
          <div
            className="md:p-6 grid items-center p-2"
            style={{
              background: color[value].toString(),
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  )
}
