import { useNavigate } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");

  return (
    <svg
      width="136"
      height="16"
      viewBox="0 0 136 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={css.icon}
    >
      <path
        d="M135.393 7.18744H131.785C131.766 6.96491 131.688 6.77314 131.55 6.61216C131.413 6.45117 131.235 6.32807 131.018 6.24284C130.804 6.15288 130.568 6.1079 130.307 6.1079C129.971 6.1079 129.682 6.16945 129.441 6.29256C129.199 6.41566 129.081 6.59085 129.086 6.81813C129.081 6.97911 129.15 7.12826 129.292 7.26557C129.438 7.40288 129.72 7.50941 130.137 7.58517L132.353 7.9829C133.47 8.1865 134.301 8.52977 134.846 9.01273C135.395 9.49095 135.672 10.1325 135.677 10.9374C135.672 11.714 135.44 12.3887 134.981 12.9616C134.526 13.5298 133.903 13.9701 133.113 14.2826C132.327 14.5904 131.429 14.7443 130.421 14.7443C128.754 14.7443 127.45 14.4034 126.508 13.7215C125.57 13.0397 125.047 12.1401 124.938 11.0227H128.83C128.882 11.3683 129.053 11.6358 129.341 11.8252C129.635 12.0099 130.004 12.1022 130.449 12.1022C130.809 12.1022 131.105 12.0407 131.337 11.9176C131.574 11.7945 131.695 11.6193 131.699 11.392C131.695 11.1837 131.59 11.0179 131.387 10.8948C131.188 10.7717 130.875 10.6723 130.449 10.5965L128.518 10.2556C127.405 10.0615 126.572 9.69218 126.018 9.14767C125.464 8.60316 125.189 7.90241 125.194 7.0454C125.189 6.28782 125.388 5.64625 125.79 5.12068C126.197 4.59038 126.777 4.18792 127.53 3.9133C128.288 3.63394 129.185 3.49426 130.222 3.49426C131.799 3.49426 133.042 3.82097 133.951 4.47438C134.865 5.12778 135.345 6.03214 135.393 7.18744Z"
        fill="#475467"
      />
      <path
        d="M116.415 11.9602L116.443 7.30114H116.955L119.597 3.63636H124L119.568 9.34659H118.46L116.415 11.9602ZM112.892 14.5455V0H116.813V14.5455H112.892ZM119.625 14.5455L117.125 10.2273L119.682 7.44318L124.114 14.5455H119.625Z"
        fill="#475467"
      />
      <path
        d="M105.619 14.7443C104.435 14.7443 103.422 14.5099 102.579 14.0411C101.736 13.5677 101.09 12.9095 100.64 12.0667C100.19 11.2192 99.9654 10.2367 99.9654 9.11926C99.9654 8.00184 100.19 7.02172 100.64 6.17892C101.09 5.33138 101.736 4.67324 102.579 4.20449C103.422 3.731 104.435 3.49426 105.619 3.49426C106.689 3.49426 107.615 3.68839 108.396 4.07665C109.182 4.46017 109.79 5.00468 110.221 5.71017C110.652 6.41093 110.87 7.23479 110.875 8.18176H107.238C107.186 7.60885 107.02 7.17324 106.741 6.87494C106.466 6.57191 106.111 6.4204 105.676 6.4204C105.335 6.4204 105.036 6.51983 104.781 6.71869C104.525 6.91282 104.326 7.20875 104.184 7.60648C104.042 7.99947 103.971 8.49426 103.971 9.09085C103.971 9.68744 104.042 10.1846 104.184 10.5823C104.326 10.9753 104.525 11.2713 104.781 11.4701C105.036 11.6642 105.335 11.7613 105.676 11.7613C105.964 11.7613 106.22 11.695 106.443 11.5624C106.665 11.4251 106.845 11.2263 106.982 10.9659C107.125 10.7007 107.21 10.3787 107.238 9.99994H110.875C110.86 10.9611 110.64 11.7992 110.214 12.5141C109.788 13.2244 109.184 13.7736 108.403 14.1619C107.626 14.5501 106.698 14.7443 105.619 14.7443Z"
        fill="#475467"
      />
      <path
        d="M94.0487 9.77272V3.63635H97.9692V14.5454H94.2476V12.4716H94.1339C93.8972 13.1676 93.4829 13.7121 92.8911 14.1051C92.2992 14.4934 91.5961 14.6875 90.7817 14.6875C90.0194 14.6875 89.3517 14.5123 88.7788 14.1619C88.2106 13.8115 87.7679 13.3286 87.4507 12.7131C87.1382 12.0975 86.9796 11.392 86.9749 10.5966V3.63635H90.8953V9.77272C90.9 10.3125 91.0374 10.7363 91.3072 11.044C91.5819 11.3518 91.9654 11.5057 92.4578 11.5057C92.7845 11.5057 93.0662 11.437 93.303 11.2997C93.5445 11.1577 93.7291 10.9588 93.857 10.7031C93.9895 10.4427 94.0535 10.1326 94.0487 9.77272Z"
        fill="#475467"
      />
      <path
        d="M77.903 14.5454V3.63631H81.7098V5.71017H81.8234C82.0223 4.94313 82.3372 4.38205 82.768 4.02693C83.2036 3.67182 83.7126 3.49426 84.295 3.49426C84.4655 3.49426 84.6336 3.50847 84.7993 3.53688C84.9697 3.56055 85.1331 3.59606 85.2894 3.64341V6.98858C85.0952 6.92229 84.8561 6.87258 84.572 6.83943C84.2879 6.80629 84.0441 6.78972 83.8405 6.78972C83.457 6.78972 83.1113 6.87731 82.8036 7.0525C82.5005 7.22296 82.2614 7.46443 82.0862 7.77693C81.911 8.0847 81.8234 8.44691 81.8234 8.86358V14.5454H77.903Z"
        fill="#475467"
      />
      <path
        d="M64.4508 3.18182V0H77.0928V3.18182H72.7178V14.5455H68.8258V3.18182H64.4508Z"
        fill="#475467"
      />
      <path d="M62.5078 0V14.5455H58.5874V0H62.5078Z" fill="#101828" />
      <path
        d="M51.2467 14.7443C50.0819 14.7443 49.0781 14.5217 48.2353 14.0766C47.3972 13.6268 46.7509 12.9829 46.2964 12.1448C45.8466 11.302 45.6217 10.2935 45.6217 9.11926C45.6217 7.99237 45.8489 7.00752 46.3035 6.16472C46.758 5.32191 47.3996 4.66614 48.2282 4.19739C49.0568 3.72864 50.0346 3.49426 51.1614 3.49426C51.9853 3.49426 52.731 3.6221 53.3987 3.87778C54.0663 4.13347 54.6368 4.50515 55.1103 4.99284C55.5838 5.4758 55.9484 6.06292 56.2041 6.75421C56.4597 7.44549 56.5876 8.22438 56.5876 9.09085V9.99994H46.8433V7.84085H52.9796C52.9749 7.52835 52.8944 7.25373 52.7382 7.01699C52.5866 6.77551 52.3807 6.58849 52.1203 6.45591C51.8646 6.3186 51.5734 6.24994 51.2467 6.24994C50.9294 6.24994 50.6382 6.3186 50.3731 6.45591C50.1079 6.58849 49.8949 6.77314 49.7339 7.00989C49.5776 7.24663 49.4948 7.52362 49.4853 7.84085V10.1704C49.4853 10.5208 49.5587 10.8333 49.7055 11.1079C49.8523 11.3825 50.063 11.598 50.3376 11.7542C50.6122 11.9105 50.9436 11.9886 51.3319 11.9886C51.6018 11.9886 51.848 11.9507 52.0705 11.8749C52.2978 11.7992 52.4919 11.6903 52.6529 11.5482C52.8139 11.4015 52.9323 11.2263 53.008 11.0227H56.5876C56.4645 11.7802 56.1733 12.4384 55.714 12.9971C55.2547 13.5511 54.6463 13.982 53.8887 14.2897C53.1359 14.5927 52.2552 14.7443 51.2467 14.7443Z"
        fill="#101828"
      />
      <path
        d="M44.8364 3.63635L41.1716 14.5454H36.6261L32.9614 3.63635H37.0807L38.842 10.8523H38.9557L40.717 3.63635H44.8364Z"
        fill="#101828"
      />
      <path
        d="M25.056 14.7159C24.36 14.7159 23.7445 14.6022 23.2094 14.3749C22.6791 14.1429 22.2625 13.7926 21.9594 13.3238C21.6564 12.8551 21.5049 12.2585 21.5049 11.534C21.5049 10.9374 21.6067 10.4284 21.8103 10.007C22.0139 9.58091 22.298 9.2329 22.6626 8.96301C23.0271 8.69313 23.4509 8.48716 23.9339 8.34511C24.4216 8.20307 24.9471 8.11074 25.5106 8.06813C26.1214 8.02078 26.6114 7.96396 26.9807 7.89767C27.3548 7.82665 27.6247 7.72958 27.7904 7.60648C27.9561 7.47864 28.039 7.31055 28.039 7.10222V7.07381C28.039 6.78972 27.9301 6.57191 27.7123 6.4204C27.4945 6.26888 27.2151 6.19313 26.8742 6.19313C26.5001 6.19313 26.1948 6.27599 25.958 6.44171C25.726 6.60269 25.5863 6.85127 25.539 7.18744H21.931C21.9784 6.52456 22.1891 5.91377 22.5631 5.35506C22.9419 4.79161 23.4935 4.3418 24.218 4.00563C24.9424 3.66472 25.8467 3.49426 26.931 3.49426C27.7123 3.49426 28.413 3.58659 29.0333 3.77125C29.6536 3.95118 30.1815 4.20449 30.6171 4.53119C31.0527 4.85316 31.3841 5.23195 31.6114 5.66756C31.8434 6.09843 31.9594 6.56718 31.9594 7.07381V14.5454H28.2947V13.0113H28.2094C27.9916 13.4185 27.7265 13.7476 27.414 13.9985C27.1062 14.2495 26.7535 14.4318 26.3557 14.5454C25.9627 14.659 25.5295 14.7159 25.056 14.7159ZM26.3344 12.2443C26.6327 12.2443 26.9121 12.1827 27.1725 12.0596C27.4376 11.9365 27.6531 11.7589 27.8188 11.5269C27.9845 11.2949 28.0674 11.0132 28.0674 10.6818V9.77267C27.9632 9.81528 27.8519 9.85553 27.7336 9.89341C27.6199 9.93129 27.4968 9.9668 27.3643 9.99994C27.2364 10.0331 27.0991 10.0639 26.9523 10.0923C26.8103 10.1207 26.6611 10.1467 26.5049 10.1704C26.2019 10.2177 25.9533 10.2959 25.7591 10.4048C25.5697 10.5089 25.4277 10.6391 25.333 10.7954C25.243 10.9469 25.1981 11.1174 25.1981 11.3068C25.1981 11.6098 25.3046 11.8418 25.5177 12.0028C25.7307 12.1638 26.003 12.2443 26.3344 12.2443Z"
        fill="#101828"
      />
      <path
        d="M13.4522 14.5454V3.63631H17.259V5.71017H17.3727C17.5715 4.94313 17.8864 4.38205 18.3173 4.02693C18.7529 3.67182 19.2619 3.49426 19.8443 3.49426C20.0147 3.49426 20.1828 3.50847 20.3485 3.53688C20.519 3.56055 20.6823 3.59606 20.8386 3.64341V6.98858C20.6444 6.92229 20.4053 6.87258 20.1212 6.83943C19.8372 6.80629 19.5933 6.78972 19.3897 6.78972C19.0062 6.78972 18.6605 6.87731 18.3528 7.0525C18.0497 7.22296 17.8106 7.46443 17.6354 7.77693C17.4603 8.0847 17.3727 8.44691 17.3727 8.86358V14.5454H13.4522Z"
        fill="#101828"
      />
      <path
        d="M0 3.18182V0H12.642V3.18182H8.26705V14.5455H4.375V3.18182H0Z"
        fill="#101828"
      />
    </svg>
  );
};

export default Logo;
