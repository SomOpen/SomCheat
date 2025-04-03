/* 
  ------------------
  Default values
  ------------------
*/
const defaultProps = {
  dimension: 24,
  color: "currentColor",
};

/*
  ------------------
  Fire Icon Component
  ------------------
*/
export function FireIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
      ></path>
    </svg>
  );
}

/* 
------------------
Search Icon
------------------
*/
export function SearchIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#cad3f5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 6.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6m3 9L11 11"
        strokeWidth={1}
      ></path>
    </svg>
  );
}

/*
  ------------------
  Sheet Icon
  ------------------
*/
export function SheetIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2z"></path>
        <path d="M19 7h-4l-.001-4.001z"></path>
      </g>
    </svg>
  );
}

/*
  ------------------
  Date Icon Component
  ------------------
*/
export function DateIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"
      ></path>
      <path
        fill={color}
        d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"
      ></path>
    </svg>
  );
}

/*
  ------------------
  Menu Icon Component
  ------------------
*/
export function MenuIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
      ></path>
    </svg>
  );
}

/*
------------------
Docs Icon Component
------------------
*/
export function DocsIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M7.732 0a59 59 0 0 0-4.977.218V24a63 63 0 0 1 3.619-.687q.255-.041.509-.078q.323-.05.644-.096l.205-.03zm1.18.003V22.96a61 61 0 0 1 12.333-.213V1.485A61 61 0 0 0 8.912.003m1.707 1.81h.015c3.06.088 6.125.404 9.167.95a.59.59 0 0 1 .476.686a.59.59 0 0 1-.569.484a.6.6 0 0 1-.116-.009a60.6 60.6 0 0 0-8.992-.931a.59.59 0 0 1-.573-.607a.59.59 0 0 1 .592-.572zm-4.212.028a.59.59 0 0 1 .578.565a.59.59 0 0 1-.564.614a60 60 0 0 0-2.355.144l-.04.002a.59.59 0 0 1-.595-.542a.59.59 0 0 1 .54-.635q1.2-.097 2.401-.148zm4.202 2.834h.015a61.6 61.6 0 0 1 9.167.8a.59.59 0 0 1 .488.677a.59.59 0 0 1-.602.494l-.076-.006a60.4 60.4 0 0 0-8.99-.786a.59.59 0 0 1-.584-.596a.59.59 0 0 1 .582-.583m-4.211.097a.59.59 0 0 1 .587.555a.59.59 0 0 1-.554.622q-1.18.069-2.356.184l-.04.003a.59.59 0 0 1-.603-.533a.59.59 0 0 1 .53-.644q1.2-.117 2.4-.187zM10.6 7.535h.015c3.06-.013 6.125.204 9.167.65a.59.59 0 0 1 .498.67a.59.59 0 0 1-.593.504l-.076-.006a60 60 0 0 0-8.992-.638a.59.59 0 0 1-.592-.588a.59.59 0 0 1 .573-.592m1.153 2.846a61 61 0 0 1 8.02.515a.59.59 0 0 1 .509.66a.59.59 0 0 1-.586.514l-.076-.005a60 60 0 0 0-8.99-.492a.59.59 0 0 1-.603-.577a.59.59 0 0 1 .578-.603q.573-.012 1.148-.012m1.139 2.832a61 61 0 0 1 6.871.394a.59.59 0 0 1 .52.652a.59.59 0 0 1-.577.523l-.076-.004a60 60 0 0 0-8.991-.344a.59.59 0 0 1-.61-.568a.59.59 0 0 1 .567-.611q1.147-.042 2.296-.042"
      ></path>
    </svg>
  );
}
/* 
------------------
Copy Icon Component
------------------
*/
export function CopyIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill={color}
          d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2zm-9 13H8a1 1 0 0 0-.117 1.993L8 17h2a1 1 0 0 0 .117-1.993zm9-11H9v2h6a2 2 0 0 1 2 2v8h2zm-7 7H8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2"
        ></path>
      </g>
    </svg>
  );
}
/* 
------------------
Tick Icon Component
------------------
*/
export function TickIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"></path>
        <path d="m5.75 7.75l2.5 2.5l6-6.5"></path>
      </g>
    </svg>
  );
}
/* 
------------------
Link Icon Component
------------------
*/
export function LinkIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.707 9.565L9.858 24.415a9 9 0 0 0 0 12.727v0a9 9 0 0 0 12.728 0l17.678-17.677a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.486 0L14.101 28.657a3 3 0 0 0 0 4.243v0a3 3 0 0 0 4.242 0l14.85-14.85"
      ></path>
    </svg>
  );
}

export function BookIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M4 3h2v18H4zm14 0H7v18h11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 6h-6V8h6zm0-2h-6V6h6z"
      ></path>
    </svg>
  );
}
export function ContentsIcon({ dimension = defaultProps.dimension }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
    >
      <g fill="none">
        <path
          fill="url(#fluentColorContentView160)"
          d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5z"
        ></path>
        <path
          fill="url(#fluentColorContentView161)"
          d="M4 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorContentView160"
            x1={6.286}
            x2={10.883}
            y1={2}
            y2={13.353}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b3e0ff"></stop>
            <stop offset={1} stopColor="#8cd0ff"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorContentView161"
            x1={4}
            x2={13.609}
            y1={4}
            y2={7.266}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0094f0"></stop>
            <stop offset={1} stopColor="#2764e7"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
export function ListIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 8h15m-15 8h9m-9 8h15M7 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      ></path>
    </svg>
  );
}
