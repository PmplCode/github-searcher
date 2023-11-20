export const ArrowBackSvg = () => {
  return (
    <div className="flex flex-row items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m4 10l-.707.707L2.586 10l.707-.707L4 10Zm17 8a1 1 0 1 1-2 0h2ZM8.293 15.707l-5-5l1.414-1.414l5 5l-1.414 1.414Zm-5-6.414l5-5l1.414 1.414l-5 5l-1.414-1.414ZM4 9h10v2H4V9Zm17 7v2h-2v-2h2Zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V9Z"
        />
      </svg>
      <p className="ml-1">Back</p>
    </div>
  );
};
