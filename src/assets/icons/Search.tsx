function Search({ size = 25, color = "black", className = "", }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    
      role="img"
      aria-label="Search icon"
    >
      <path
        d="M23.5 23.5L18.2663 18.257M21.1666 11.25C21.1666 13.88 20.1219 16.4024 18.2621 18.2621C16.4024 20.1219 13.88 21.1666 11.25 21.1666C8.61992 21.1666 6.09757 20.1219 4.23784 18.2621C2.3781 16.4024 1.33331 13.88 1.33331 11.25C1.33331 8.61992 2.3781 6.09757 4.23784 4.23784C6.09757 2.3781 8.61992 1.33331 11.25 1.33331C13.88 1.33331 16.4024 2.3781 18.2621 4.23784C20.1219 6.09757 21.1666 8.61992 21.1666 11.25V11.25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Search;
