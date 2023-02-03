export default function CloudUpload({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M9.76562 5.26562C9.61875 5.11875 9.38125 5.11875 9.23438 5.26562L6.1625 8.3375C6.01562 8.48437 6.01562 8.72187 6.1625 8.86875L6.34062 9.04688C6.4875 9.19375 6.725 9.19375 6.87187 9.04688L9.00313 6.91563V11.625C9.00313 11.8313 9.17188 12 9.37813 12H9.62813C9.83438 12 10.0031 11.8313 10.0031 11.625V6.91563L12.1344 9.04688C12.2812 9.19375 12.5187 9.19375 12.6656 9.04688L12.8438 8.86875C12.9906 8.72187 12.9906 8.48437 12.8438 8.3375L9.76562 5.26562ZM17.8656 7.4625C17.9531 7.15313 18 6.83125 18 6.5C18 4.56562 16.4344 3 14.5 3C13.9781 3 13.4719 3.1125 13 3.3375C12.0125 1.93125 10.3656 1 8.5 1C5.55 1 3.13437 3.32812 3.00625 6.25625C1.225 6.88125 0 8.57188 0 10.5C0 12.9875 2.0125 15 4.5 15H16C18.2094 15 20 13.2125 20 11C20 9.53125 19.1938 8.1625 17.8656 7.4625ZM16 14H4.5C2.56562 14 1 12.4344 1 10.5C1 8.725 2.31875 7.25938 4.03125 7.03125C4.00938 6.85625 4 6.67812 4 6.5C4 4.01562 6.01562 2 8.5 2C10.3844 2 11.9969 3.15625 12.6687 4.8C13.125 4.30938 13.775 4 14.5 4C15.8813 4 17 5.11875 17 6.5C17 7.07812 16.8031 7.6125 16.4719 8.0375C17.9062 8.2625 19 9.50313 19 11C19 12.6562 17.6562 14 16 14Z"
        fill={color}
      />
    </svg>
  );
}