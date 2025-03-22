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
  