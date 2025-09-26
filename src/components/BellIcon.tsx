function BellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      {/* Bell body */}
      <path
        d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
        fill="black"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bell clapper (small circle at bottom) */}
      <path
        d="M10 21h4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Notification dot */}
      <circle cx="18" cy="6" r="3" className="fill-primary" />
    </svg>
  );
}

export default BellIcon;
