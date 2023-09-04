export default function Arrow({ direction, onClick, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`text-black-100 cursor-pointer ${size}`}
      onClick={onClick}>
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  )
}