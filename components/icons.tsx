import * as React from "react";
import { IconSvgProps } from "@/types";
import { SVGProps } from "react";
import {
  MdPerson,
  MdPersonOutline,
  MdKeyboard,
  MdComputer,
  MdOutlineKeyboard,
  MdOutlineKeyboardAlt,
  MdOutlineDesktopMac,
  MdDesktopMac,
  MdAccountCircle,
  MdAccountBox,
  MdOutlineScreenSearchDesktop,
  MdScreenSearchDesktop,
  MdKeyboardAlt,
  MdOutlinePersonOutline,
  MdOutlinePerson4,
} from "react-icons/md";

export const ArticleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <MdOutlineKeyboardAlt
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  ></MdOutlineKeyboardAlt>
);

export const ProjectIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <MdComputer
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  ></MdComputer>
);

export const AboutIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <MdOutlinePerson4
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  ></MdOutlinePerson4>
);

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // fill="#717D79"
    // stroke="#717D79"
    aria-hidden="true"
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      d="M10 14h4v11h-4V14zm8 11h4V14h-4v11zM2.083 6L2 25h4V10h20.083L26 25h4V6H2.083z"
      // fill="currentColor"
    />
  </svg>
);

export const Cover: React.FC<IconSvgProps> = ({
  size = 625,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
    height={size || height}
    viewBox="0 0 500 500"
    width={size || width}
    {...props}
  >
    <path
      d="M2455 4733c9-21 23-46 33-57 25-28 91-56 135-56 72 0 27-43-57-54-59-7-122-42-165-91-17-20-31-33-31-30 0 14 42 86 76 130l36 48-93-6c-119-7-289-51-478-123-359-138-569-291-674-493-60-114-71-168-73-341-1-126-5-168-23-225-36-119-31-146 44-250 110-154 148-241 281-643 105-320 159-440 289-642 152-237 195-341 215-517 10-93 1-297-17-358-24-84-212-149-428-148-169 2-343 49-492 134l-54 31 17 27c113 177 259 313 429 399 56 28 190 71 244 78 53 7 162-11 204-33 51-26 41-6-35 69-165 163-408 231-646 182-80-16-246-75-322-114-313-160-573-415-745-733-26-48-45-90-43-93 3-2 36 0 74 6 98 14 178 12 279-5 119-21 218-61 370-151 72-42 162-94 201-115 195-107 439-106 647 3 108 56 237 183 290 283 21 39 46 81 57 95 31 39 50 156 50 302 0 155-27 302-91 502-39 125-49 182-34 206 5 8 23 9 55 5 60-8 122 10 161 46 23 21 29 36 29 69 0 50-10 69-71 140-68 79-72 94-73 265-1 130-4 155-21 185l-20 35-3-35c-10-128-65-233-148-289l-46-30 28-7c16-4 43-8 60-8 26 0 33-5 43-33 9-25 25-40 61-58 49-25 90-67 90-92 0-58-70-123-131-123-157 1-354 289-388 568-22 181 46 302 170 302 48 0 310-75 368-105 54-27 81-89 110-245 13-70 55-154 74-147 8 3 12 38 12 112l-1 107 23-28 23-29-1 165c0 145 2 172 21 222 43 116 106 170 326 282 111 56 209 129 198 147-3 5-18 9-35 9-25 0-29 4-29 28 0 58-30 130-75 180-25 27-45 54-45 59 0 23 44 47 102 55 49 6 69 15 93 38 49 48 93 59 307 80 112 11 249 27 305 36 115 17 127 14 167-39 30-40 280-541 290-581 11-45-11-94-56-122-73-47-84-123-31-229 33-66 166-267 189-285 16-14 17-13 10 10-17 57-18 215-2 299 34 178 27 202-199 665-146 300-156 356-70 392 45 18 94 70 119 124 32 68 29 196-5 270-40 85-110 172-201 249-89 76-170 121-258 142-59 14-434 16-682 3-111-5-128-8-128-23 0-10-6-25-13-35-13-17-18-16-95 28-45 25-84 46-87 46s2-17 10-37zm609-4c33-15 24-29-18-29-30 0-56 15-56 32 0 12 45 10 74-3zm-172-56c28-27 38-58 16-51-13 5-62 78-51 78 4 0 20-12 35-27zm594-34c27-18 77-45 112-60 34-16 62-33 62-39 0-14 4-15-116 35-122 51-157 72-149 85 11 18 40 11 91-21zm-360-49c80-40 152-110 112-110-27 0-211 118-203 130 10 16 28 12 91-20zm170 14c47-20 94-52 94-65 0-30-130 32-145 68-6 17 5 16 51-3zm-256-99c7-9 10-18 7-22-8-7-37 15-37 28 0 14 16 11 30-6zm-280-20c0-21-11-45-21-45-5 0-9 16-9 35 0 26 3 33 15 29 8-4 15-12 15-19zm-636-14c3-5-3-11-15-14-16-4-18-3-8 9 13 16 16 17 23 5zm1851-1481c-3-5-15-10-26-10-10 0-19 5-19 10 0 6 12 10 26 10s23-4 19-10z"
      transform="matrix(.1 0 0 -.1 0 500)"
    ></path>
    <path
      d="M3362 3134c-24-7-83-20-131-28-158-28-355-103-484-186-60-38-58-42 68-106 90-45 96-47 133-36s44 10 106-23c82-42 145-46 268-14 84 21 154 26 208 14 42-9 89 11 96 41 4 13-2 53-11 87-16 58-16 67-2 94 9 16 37 47 64 68 61 50 65 57 48 75-12 12-21 12-48 2-47-17-78-15-128 8-51 23-123 24-187 4zm-65-111c66-18 88-37 62-54-8-4-30-6-49-3-23 3-78-7-162-30-145-40-232-52-268-38l-25 10 25 11c67 29 317 120 333 120 10 1 48-7 84-16zm76-188c-2-14-119-44-174-45-25 0-54 6-65 14-18 14-18 15 6 21 88 21 236 28 233 10z"
      transform="matrix(.1 0 0 -.1 0 500)"
    ></path>
    <path
      d="M3635 2930c-10-16 4-30 31-30 26 0 31 9 12 28-15 15-35 16-43 2zM1672 2809c-23-12-47-29-51-38-17-32-33-146-26-191l7-45 33 38c18 20 38 59 45 85 26 98 55 113 113 62 58-50 108-36 93 26-5 18-21 32-59 50-79 36-106 38-155 13zM3362 2684c-27-18-29-34-4-34 21 0 62 27 62 41s-33 11-58-7zM3617 2600c-26-16-47-34-47-39s9-19 19-32l19-24 27 25c15 14 40 42 57 63l30 37h-29c-16 0-50-13-76-30zM1824 2581c-42-25-104-108-104-137 0-13 8-28 18-33 15-8 35 1 100 44 90 61 106 79 90 110-22 40-55 46-104 16zM2342 2461c-11-7-11-17 4-59 18-49 18-50 41-35 28 19 31 63 5 86-21 19-31 21-50 8zM3583 2404c-21-44-10-67 38-75 49-7 59-16 59-48 0-16 7-34 15-41s15-25 15-41c0-31-24-52-72-63-19-4-28-13-28-26 0-18 2-18 43-4 60 22 161 42 247 50 92 8 145-10 156-51 10-40-8-51-52-30-35 16-45 16-203 0-223-23-308-39-339-62-15-11-42-44-60-74-34-56-35-64-17-170 7-35 5-37-32-55-45-23-62-60-46-104 10-27 9-29-18-39-30-10-32-16-29-63 1-22-5-28-35-38-45-15-101-3-186 41-36 18-87 33-127 38-37 5-91 18-120 30s-71 21-93 21c-50 0-97 20-128 54-18 19-34 26-63 26-39 0-41 2-52 52-7 32-44 46-85 32-19-7-30-22-41-54-8-25-19-51-23-57-6-10 4-13 42-13 56 0 60-14 15-41l-26-16 74-40c100-56 179-117 268-209 98-101 131-115 269-118 59-1 116-8 128-14 30-17 45-46 37-77-5-20-1-26 19-34 24-9 221-31 280-31 37 0 77 40 77 79 0 44 15 46 46 6 40-53 60-47 67 22 10 99 51 131 201 158 103 18 185 55 226 101 30 35 63 158 96 359 32 195 14 563-32 632-19 29-53 29-90 1-32-26-57-27-234-13-58 4-117 14-132 21-36 19-36 19-55-22zm475-87c14-16 27-120 18-142-5-14-8-14-31 1-29 19-65 74-65 99 0 42 55 71 78 42zm-244-6c7-11-14-20-31-13-7 2-10 8-7 13 7 12 31 12 38 0zm181-345c41-17 65-52 72-103 6-47-22-214-42-254-14-27-18-28-59-23-36 5-51 2-88-20-25-14-54-26-65-26-45 0-79-21-106-67l-28-46-103 6c-57 4-111 9-120 13-22 8-20 34 2 34 10 0 27 6 37 14 18 13 16 15-24 35-52 27-57 40-35 82 9 18 17 50 17 71 0 34 2 37 22 32 35-9 39 12 11 62s-33 96-13 111c17 14 160 59 227 72 30 6 64 13 75 15 52 10 188 5 220-8zm-1105-476l25-20h-23c-30 0-64 18-57 31 9 14 27 11 55-11zm510-355c0-3-10-9-22-14-52-19-68-22-68-12 0 6 15 15 33 20 38 11 57 13 57 6z"
      transform="matrix(.1 0 0 -.1 0 500)"
    ></path>
    <path
      d="M3745 1897c-16-12-13-15 34-20 28-3 59-3 68 0 14 6 14 8-3 20-23 17-75 17-99 0zM3880 1859c-19-12-45-31-58-42-17-16-37-22-73-23-57-1-79-15-63-42 18-29 105-82 135-82 50 0 136 39 168 76 38 42 38 57 5 101-30 39-62 43-114 12zM2076 2376c-8-31 10-71 40-91 42-27 44 29 3 87-25 34-35 35-43 4zM1691 2321c40-71 63-94 87-87 42 14 18 59-58 109-43 29-54 21-29-22zM2290 2156c0-35 10-56 26-56 14 0 19 36 8 64-10 25-34 19-34-8zM2247 1734c-14-14-7-31 18-42 35-16 37-16 33 16-3 26-34 43-51 26zM3818 1061c-201-65-355-244-382-445l-6-48 46 51c61 67 111 96 214 121 154 36 326 23 478-38 71-28 70-22 17-118-73-129-236-273-375-330-65-26-184-33-237-13l-28 10 35-36c41-42 132-95 210-121 77-26 244-26 320 0 321 110 582 350 740 680 26 56 51 112 55 125 6 21 5 23-11 17-51-21-184-37-254-31-112 10-177 29-333 101-78 36-167 72-197 80-76 20-221 17-292-5z"
      transform="matrix(.1 0 0 -.1 0 500)"
    ></path>
  </svg>
);

export const LinkedInIcon: React.FC<IconSvgProps> = ({
  size = 64,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18.72 4H5.37A1.31 1.31 0 004 5.25v13.38A1.41 1.41 0 005.37 20h13.35A1.34 1.34 0 0020 18.63V5.25A1.23 1.23 0 0018.72 4zM9 17.34H6.67v-7.13H9v7.13zM7.89 9.13A1.18 1.18 0 016.67 7.9a1.18 1.18 0 011.24-1.23A1.18 1.18 0 019.13 7.9a1.18 1.18 0 01-1.24 1.23zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 00-1.17.84 1.431 1.431 0 00-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 012.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21z"></path>
    </svg>
  );
};

export const UpworkInIcon: React.FC<IconSvgProps> = ({
  size = 64,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="#64748b"
      stroke="#64748b"
      preserveAspectRatio="xMidYMid"
      viewBox="0 -179.5 512 512"
      {...props}
    >
      <g>
        <path
          fill="#6FDA44"
          d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353h0zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967h0z"
        ></path>
        <path d="M244.043 37.557l13.306 53.636 14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636 13.306-53.636h16.754v.038zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042 0 22.677 18.403 41.043 41.042 41.043 22.677 0 41.08-18.366 41.08-41.043 0-22.676-18.403-41.042-41.08-41.042zm0 65.218c-13.343 0-24.138-10.795-24.138-24.138 0-13.344 10.832-24.138 24.138-24.138 13.344 0 24.138 10.794 24.138 24.138 0 13.306-10.794 24.138-24.138 24.138zm90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392h-7.084zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578V115.03h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065l-30.697-41.754z"></path>
      </g>
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 64,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12c.09 0 .18.05.18.12zm-1-.15c0 .07 0 .15.14.17a.15.15 0 00.2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07zm1.42-.05c-.09 0-.15.08-.14.16.01.08.09.11.19.09.1-.02.15-.09.14-.16-.01-.07-.09-.1-.19-.09zM11.9 4A7.83 7.83 0 004 12.07 8.29 8.29 0 009.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21 0 0-.74-.52.05-.51a1.67 1.67 0 011.24.85 1.69 1.69 0 002.36.69 1.83 1.83 0 01.51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 017.7 9.7a3.21 3.21 0 01.08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 014.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 01.08 2.24 2.61 2.61 0 01.83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 01.5 1.5v2.77a.42.42 0 00.56.4A8.22 8.22 0 0020 12.07 8 8 0 0011.9 4zM7.14 15.41v.17a.119.119 0 00.131.026.119.119 0 00.039-.026v-.18c0-.07-.13-.03-.17.01zm-.35-.27s0 .1.07.13a.09.09 0 00.14 0s0-.1-.07-.13-.12-.03-.14 0zm1 1.18v.21c0 .07.17.08.21 0 .04-.08 0-.14 0-.21 0-.07-.13-.05-.17 0h-.04zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 000-.21c-.05-.08-.13-.11-.19-.07z"></path>
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
