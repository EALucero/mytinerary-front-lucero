export default function Arrow({ direction, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="text-black w-[50px] h-[50px] cursor-pointer
      lg:w-[150px] lg:h-[150px]"
      onClick={onClick}>
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  )
}