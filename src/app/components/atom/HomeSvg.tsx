export const HomeSvg = () => {
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
          d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10v9Zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20H5Zm7-7.77Z"
        />
      </svg>
      <p className="ml-1">Home</p>
    </div>
  );
};
