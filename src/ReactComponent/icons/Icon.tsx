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
  Github Icon Component
  ------------------
*/
export function GithubIcon({
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
        d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
      ></path>
    </svg>
  );
}

/*
  ------------------
  CLI Icon Component
  ------------------
*/
export function CliIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 12 12"
    >
      <path
        fill={color}
        d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M9.5 9h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5m-7 .12a.62.62 0 0 1-.44-.18a.63.63 0 0 1 0-.88L4.12 6L2.06 3.94a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0L5.09 5.2c.44.44.44 1.15 0 1.59L2.94 8.94a.62.62 0 0 1-.44.18"
      ></path>
    </svg>
  );
}

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
        d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26"
      ></path>
    </svg>
  );
}

/*
  ------------------
  Smile Icon Component
  ------------------
*/
export function SmileIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 496 512"
    >
      <path
        fill={color}
        d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32"
      ></path>
    </svg>
  );
}

/* 
------------------
Smile Beam Icon
------------------
*/
export function SmileBeamIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-91.9-186.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6c-22.3 25.6-61 53.5-116.1 53.5s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6m53.5-96.7l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3.4-.6.7-.7.9l-.2.2c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8m160 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3.4-.6.7-.7.9l-.2.2c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8"
      ></path>
    </svg>
  );
}

/* 
------------------
Wink Face Icon
------------------
*/
export function WinkFaceIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-91.9-186.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6c-22.3 25.6-61 53.5-116.1 53.5s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6M144.4 208a32 32 0 1 1 64 0a32 32 0 1 1-64 0m156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2"
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
Home Icon
------------------
*/
export function HomeIcon({
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
        d="M17 16h-2v6h-3v-5H8v5H5v-6H3l7-6zM6 2l4 4H9v3H7V6H5v3H3V6H2zm12 1l5 5h-1v4h-3V9h-2v3h-1.66L14 10.87V8h-1z"
      ></path>
    </svg>
  );
}

/* 
------------------
Home Icon
------------------
*/
export function HomeIcon2({
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
        d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
      ></path>
    </svg>
  );
}

/* 
------------------
Update Icon
------------------
*/
export function UpdateIcon({
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
        d="M4.503 9.071L3.65 7.594a.75.75 0 0 0-1.3.75l1.75 3.03a.75.75 0 0 0 1.025.275L8.156 9.9a.75.75 0 1 0-.75-1.299l-1.438.83a7.25 7.25 0 1 1 1.517 7.554a.75.75 0 1 0-1.089 1.032A8.75 8.75 0 1 0 4.502 9.07"
      ></path>
      <path
        fill={color}
        d="M12.75 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2A.75.75 0 0 1 12 12V8a.75.75 0 0 1 .75-.75"
      ></path>
    </svg>
  );
}

/* 
------------------
Dictionary Icon
------------------
*/
export function DictionaryIcon({
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
        d="m6.006 11.823l1.123-3.06h.05l1.123 3.06zm6.494 5.496q1.216-.678 2.453-.98t2.547-.3q.9 0 1.618.111t1.267.296q.23.096.423-.029t.192-.394V7.008q0-.173-.096-.308q-.096-.134-.327-.23q-.825-.293-1.501-.4T17.5 5.961q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-6.78-4.763h2.869l.474 1.306q.05.111.137.17t.204.059q.198 0 .303-.158t.043-.35L7.739 8.24q-.05-.131-.169-.212t-.255-.081h-.323q-.136 0-.254.08t-.169.213l-2.011 5.361q-.062.173.043.33t.303.159q.117 0 .206-.06q.09-.058.14-.175zm6.28 5.9q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902T6.5 17.04q-.78 0-1.534.13q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689t.547-.442q.887-.383 1.836-.56T6.5 4.962q1.47 0 2.866.423q1.398.423 2.634 1.23q1.237-.807 2.634-1.23t2.866-.423q.973 0 1.922.178q.95.177 1.836.56q.352.125.547.442t.195.689v9.665q0 .614-.516.943q-.517.328-1.1.111q-.693-.27-1.418-.39q-.724-.121-1.466-.121q-1.24 0-2.421.306t-2.271.901q-.18.093-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222t.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053t.886.153q.129.03.224.135q.096.104.096.257q0 .252-.15.366t-.402.052q-.37-.075-.757-.103q-.388-.028-.807-.028q-.804 0-1.573.154q-.77.154-1.46.43q-.257.099-.42-.005t-.162-.362m0 5.423q0-.11.076-.231q.076-.123.18-.178q.725-.346 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053t.886.153q.129.03.224.135q.096.104.096.257q0 .252-.15.366t-.402.052q-.37-.075-.757-.103q-.388-.028-.807-.028q-.784 0-1.544.16q-.76.161-1.45.457q-.258.118-.44-.003t-.181-.397m0-2.692q0-.11.076-.222t.18-.168q.763-.347 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053t.886.153q.129.03.224.134q.096.104.096.258q0 .252-.15.366t-.402.051q-.37-.075-.757-.102q-.388-.028-.807-.028q-.804 0-1.573.154q-.77.153-1.46.43q-.257.098-.42-.005q-.162-.105-.162-.362"
      ></path>
    </svg>
  );
}

/* 
------------------
About Icon
------------------
*/
export function AboutIcon({
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
        d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

/*
------------------
Web Icon
------------------
*/
export function WebIcon({
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
      <g fill="none">
        <rect
          width={40}
          height={32}
          x={4}
          y={8}
          stroke={color}
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
        ></rect>
        <path
          stroke={color}
          strokeWidth={4}
          d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"
        ></path>
        <circle r={2} fill={color} transform="matrix(0 -1 -1 0 10 14)"></circle>
        <circle r={2} fill={color} transform="matrix(0 -1 -1 0 16 14)"></circle>
      </g>
    </svg>
  );
}

/*
------------------
Code Icon
------------------
*/
export function CodeIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 256 256"
    >
      <path
        fill={color}
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8"
      ></path>
    </svg>
  );
}

/*
------------------
Database Icon
------------------
*/
export function DatabaseIcon({
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
        fill={color}
        fillRule="evenodd"
        d="M39 9.75v6.429c0 2.07-6.716 3.75-15 3.75s-15-1.68-15-3.75V9.75C9 7.679 15.716 6 24 6s15 1.679 15 3.75M9.621 19.714c1.844 1.55 7.584 2.679 14.379 2.679s12.535-1.13 14.379-2.679c.404.34.621.7.621 1.072v6.428c0 2.071-6.716 3.75-15 3.75s-15-1.679-15-3.75v-6.428c0-.373.217-.732.621-1.072M24 33.68c-6.795 0-12.535-1.13-14.379-2.679c-.404.34-.621.7-.621 1.071V38.5c0 2.071 6.716 3.75 15 3.75s15-1.679 15-3.75v-6.429c0-.372-.217-.731-.621-1.071c-1.844 1.549-7.584 2.679-14.379 2.679m8.333 3.654a1.167 1.167 0 1 1-2.333 0a1.167 1.167 0 0 1 2.333 0m3.5 0a1.167 1.167 0 1 0 0-2.333a1.167 1.167 0 0 0 0 2.333"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

/*
------------------
Git Icon
------------------
*/
export function GitIcon({
  dimension = defaultProps.dimension,
  color = "#f34f29",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 128 128"
    >
      <path
        fill={color}
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
      ></path>
    </svg>
  );
}

/*
  ------------------
  Operating System Icon
  ------------------
*/
export function OSIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M448 64v298.667H277.333v64h85.334v42.666H149.333v-42.666h85.334v-64H64V64zm-42.667 42.667H106.667V320h298.666zm-203.565 37.937q31.312 0 48 19.875Q265.8 183.51 265.8 213.417q0 32.718-18.938 52.031q-16.312 16.688-45.094 16.688q-31.313 0-48-19.875q-16.03-19.031-16.031-49.688q0-32.062 18.938-51.375q16.405-16.594 45.093-16.594m128.344 0q19.5 0 42.375 7.219l-6 24.375q-13.5-4.968-20.297-6.562q-6.796-1.594-14.203-1.594q-8.437 0-12.844 3.75q-4.593 4.031-4.593 10.219q0 5.343 3.89 8.39q3.405 2.667 15.171 7.665l3.532 1.476q14.72 6.094 19.5 8.484a57.7 57.7 0 0 1 9 5.578q11.532 8.812 11.532 26.907q0 21.375-14.532 32.343q-12.375 9.282-34.687 9.282q-23.25 0-44.531-7.5l4.312-25.5q22.782 9.562 38.625 9.562q10.313 0 15.188-5.062q4.218-4.407 4.218-10.782q0-5.718-4.125-8.906q-4.125-3.187-20.343-9.844q-12-4.968-16.922-7.406t-9.047-5.531q-11.72-8.72-11.719-25.125q0-14.157 7.688-24.844q11.812-16.594 38.812-16.594m-128.437 23.438q-16.22 0-25.032 13.5q-7.968 12.187-7.968 31.312q0 22.125 9.468 34.313q8.907 11.53 23.625 11.531q16.125 0 25.125-13.594q7.97-12 7.969-31.687q0-21.657-9.469-33.844q-8.905-11.53-23.718-11.531"
      ></path>
    </svg>
  );
}

/*
  ------------------
  Developer Tools Icon
  ------------------
*/
export function DevToolsIcon({
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
      <g fill={color}>
        <path d="M21 28h-2v-8.49l.6-.26A9 9 0 0 0 21 3.52V11H11V3.52a9 9 0 0 0 1.4 15.73l.6.26V28h-2v-7.21A11 11 0 0 1 11.6.92L13 .31V9h6V.31l1.4.61a11 11 0 0 1 .6 19.87z"></path>
        <path d="M11 30h10v2H11z" className="ouiIcon__fillSecondary"></path>
      </g>
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
  Discord Icon
  ------------------
*/
export function DiscordIcon({
  dimension = defaultProps.dimension,
  color = "#fff",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#5865f2" rx={60}></rect>
        <g clipPath="url(#skillIconsDiscord0)">
          <path
            fill={color}
            d="M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsDiscord0">
            <path fill={color} d="M28 51h200v154.93H28z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

/* 
  ------------------
  JavaScript Icon
  ------------------
*/
export function JsIcon({ dimension = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 128 128"
    >
      <path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
      ></path>
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
  File Code Icon Component
  ------------------
*/
export function FileCodeIcon({ dimension = 32, color = "#6364f1" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 384 512"
    >
      <path
        fill={color}
        d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24 24 0 0 1 384 121.941M248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747zm51.295 50.479l-27.453-7.97a5.4 5.4 0 0 1-3.681-6.692l61.44-211.626a5.4 5.4 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681m160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879"
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
Status Icon Component
------------------
*/
export function StatusIcon({
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
        fillRule="evenodd"
        d="M7.999 1a.75.75 0 0 1 .715.521L12 11.79l1.286-4.018A.75.75 0 0 1 14 7.25h1.25a.75.75 0 0 1 0 1.5h-.703l-1.833 5.729a.75.75 0 0 1-1.428 0L8.005 4.226l-2.29 7.25a.75.75 0 0 1-1.42.03L3.031 8.03l-.07.208a.75.75 0 0 1-.711.513H.75a.75.75 0 0 1 0-1.5h.96l.578-1.737a.75.75 0 0 1 1.417-.02L4.95 8.919l2.335-7.394A.75.75 0 0 1 7.999 1"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

/*
------------------
Right Arrow Icon Component
------------------
*/
export function RightArrow({
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
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 17l5-5l-5-5"
        strokeWidth={1}
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
Alert Icon Component
------------------
*/
export function AlertIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 22 22"
      className="inline-block"
    >
      <path
        fill={color}
        d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-6-8V6h-2v6Zm0 4v-2h-2v2Z"
      ></path>
    </svg>
  );
}

/* 
------------------
Warning Icon Component
------------------
*/
export function WarningIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      className="inline"
    >
      <path
        fill={color}
        d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0M11 16v2h2v-2zm0-7v5h2V9z"
      ></path>
    </svg>
  );
}

/* 
------------------
Error Icon Component
------------------
*/
export function ErrorIcon({
  dimension = defaultProps.dimension,
  color = defaultProps.color,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 512 512"
      className="inline-block"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m48.918 134.25L256 225.836l-48.917-48.917l-30.165 30.165L225.835 256l-48.917 48.918l30.165 30.165L256 286.166l48.918 48.917l30.165-30.165L286.166 256l48.917-48.917z"
      ></path>
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

export function CheckedIcon({
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"
      ></path>
    </svg>
  );
}

export function UncheckIcon({
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
        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      ></path>
    </svg>
  );
}

export function DownArrow({
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
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 10l5 5l5-5"
        strokeWidth={1}
      ></path>
    </svg>
  );
}

export function TaskIcon({
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
      <g fill="none" fillRule="evenodd">
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill={color}
          d="M7.416 3A5 5 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a3 3 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"
        ></path>
      </g>
    </svg>
  );
}

export function ProgressIcon({
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
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223"
      ></path>
    </svg>
  );
}

export function TaskStarIcon({
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
        fill={color}
        d="m23 17l2.23 4.32L30 22l-3.5 3.167L28 30l-5-2.792L18 30l1.5-4.833L16 22l4.9-.68z"
      ></path>
      <path
        fill={color}
        d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v7h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
      ></path>
    </svg>
  );
}

export function TaskCheckedIcon({
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
        d="M7 1h10v2h4v11h-2V5h-2v2H7V5H5v16h6v2H3V3h4zm2 4h6V3H9zm14.657 11.586l-7.07 7.07l-4.243-4.242L13.758 18l2.828 2.828l5.657-5.656z"
      ></path>
    </svg>
  );
}

export function TaskErrorIcon({
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
        d="M7 1h10v2h4v9h-2V5h-2v2H7V5H5v16h7v2H3V3h4zm2 4h6V3H9zm7.172 9.757L19 17.586l2.828-2.829l1.415 1.415L20.414 19l2.829 2.828l-1.415 1.415L19 20.414l-2.828 2.829l-1.415-1.415L17.586 19l-2.829-2.828z"
      ></path>
    </svg>
  );
}
