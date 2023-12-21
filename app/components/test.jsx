"use client";
import Image from "next/image";
import React from "react";

import img1 from "@/app/images/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();
  let activeLink=path.slice(1)

  return (
    <div>
      <div className="flex flex-col items-center w-64  h-screen">
        <a className="flex items-center w-full px-5 mt-3" href="#">
          <Image src={img1} />
        </a>

        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300 text-[#265E73]">


            <Link
            
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73 `}
              href="/"
            >
              <div className="bg-[#4FD1C5] p-2 rounded-[12px] ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66289 3.46748C7.61927 3.42575 7.56124 3.40247 7.50088 3.40247C7.44052 3.40247 7.38248 3.42575 7.33887 3.46748L1.94531 8.61992C1.92241 8.64183 1.90418 8.66816 1.89175 8.69731C1.87931 8.72647 1.87291 8.75785 1.87295 8.78955L1.87207 13.6253C1.87207 13.8739 1.97084 14.1124 2.14666 14.2882C2.32247 14.464 2.56093 14.5628 2.80957 14.5628H5.625C5.74932 14.5628 5.86855 14.5134 5.95645 14.4255C6.04436 14.3376 6.09375 14.2184 6.09375 14.094V10.1097C6.09375 10.0475 6.11844 9.98789 6.1624 9.94393C6.20635 9.89998 6.26596 9.87529 6.32812 9.87529H8.67187C8.73403 9.87529 8.79365 9.89998 8.8376 9.94393C8.88155 9.98789 8.90625 10.0475 8.90625 10.1097V14.094C8.90625 14.2184 8.95563 14.3376 9.04354 14.4255C9.13145 14.5134 9.25068 14.5628 9.375 14.5628H12.1893C12.4379 14.5628 12.6764 14.464 12.8522 14.2882C13.028 14.1124 13.1268 13.8739 13.1268 13.6253V8.78955C13.1268 8.75785 13.1204 8.72647 13.108 8.69731C13.0955 8.66816 13.0773 8.64183 13.0544 8.61992L7.66289 3.46748Z"
                    fill="white"
                  />
                  <path
                    d="M14.3826 7.65369L12.1912 5.5572V2.37585C12.1912 2.25153 12.1418 2.13231 12.0539 2.0444C11.966 1.95649 11.8468 1.9071 11.7225 1.9071H10.3162C10.1919 1.9071 10.0727 1.95649 9.98476 2.0444C9.89685 2.13231 9.84747 2.25153 9.84747 2.37585V3.31335L8.15059 1.69089C7.9918 1.53035 7.75567 1.43835 7.5005 1.43835C7.2462 1.43835 7.01065 1.53035 6.85186 1.69119L0.620421 7.6531C0.438195 7.82888 0.415343 8.11804 0.581163 8.30847C0.622803 8.35654 0.673789 8.39563 0.731016 8.42337C0.788244 8.4511 0.850517 8.46691 0.914046 8.46981C0.977575 8.47272 1.04103 8.46266 1.10055 8.44026C1.16007 8.41787 1.21441 8.38359 1.26026 8.33953L7.33936 2.53054C7.38298 2.48882 7.44102 2.46553 7.50138 2.46553C7.56174 2.46553 7.61977 2.48882 7.66339 2.53054L13.7431 8.33953C13.8326 8.42541 13.9526 8.47228 14.0766 8.46986C14.2007 8.46745 14.3187 8.41594 14.4049 8.32663C14.5848 8.14031 14.5698 7.83269 14.3826 7.65369Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">
                Standort
                <br />
                <p className="text-xs">Berlin</p>
              </span>
            </Link>


            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Nachrichten" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Nachrichten"
            >
              <div className="bg-white p-2 rounded-[12px] ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00009 0.666687C13.6026 0.666687 17.3334 4.39752 17.3334 9.00002C17.3334 13.6025 13.6026 17.3334 9.00009 17.3334C7.65195 17.3351 6.32366 17.0085 5.13009 16.3817L1.55509 17.3125C1.43564 17.3436 1.31013 17.343 1.191 17.3106C1.07187 17.2783 0.963261 17.2154 0.875935 17.1282C0.788608 17.0409 0.725597 16.9324 0.693144 16.8133C0.660692 16.6942 0.659926 16.5687 0.690923 16.4492L1.62092 12.875C0.992422 11.6802 0.664898 10.3501 0.666756 9.00002C0.666756 4.39752 4.39759 0.666687 9.00009 0.666687ZM10.0434 9.83335H6.29176L6.20676 9.83919C6.05716 9.85977 5.92008 9.93382 5.82085 10.0476C5.72162 10.1615 5.66695 10.3074 5.66695 10.4584C5.66695 10.6094 5.72162 10.7553 5.82085 10.8691C5.92008 10.9829 6.05716 11.0569 6.20676 11.0775L6.29176 11.0834H10.0434L10.1276 11.0775C10.2772 11.0569 10.4143 10.9829 10.5135 10.8691C10.6127 10.7553 10.6674 10.6094 10.6674 10.4584C10.6674 10.3074 10.6127 10.1615 10.5135 10.0476C10.4143 9.93382 10.2772 9.85977 10.1276 9.83919L10.0434 9.83335ZM11.7084 6.91669H6.29176L6.20676 6.92252C6.05716 6.9431 5.92008 7.01715 5.82085 7.13097C5.72162 7.24479 5.66695 7.39068 5.66695 7.54169C5.66695 7.69269 5.72162 7.83859 5.82085 7.95241C5.92008 8.06623 6.05716 8.14027 6.20676 8.16085L6.29176 8.16669H11.7084L11.7934 8.16085C11.943 8.14027 12.0801 8.06623 12.1793 7.95241C12.2786 7.83859 12.3332 7.69269 12.3332 7.54169C12.3332 7.39068 12.2786 7.24479 12.1793 7.13097C12.0801 7.01715 11.943 6.9431 11.7934 6.92252L11.7084 6.91669Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Nachrichten</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                path.startsWith("/Nachricht-schreiben") // Check if pathname starts with '/Nachricht-schreiben'
                ? "bg-[#3AB3B3] text-white"
                : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Nachricht-schreiben/FINANZBUCHHALTUNG"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1803)">
                    <path
                      d="M0.5 1.15378V6.05762L9.15385 7.49993L0.5 8.94224V13.8461L15.5 7.49993L0.5 1.15378Z"
                      fill="#4FD1C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1803">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 -6.10352e-05)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">
                Nachricht schreiben
              </span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Fax-senden" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Fax-senden"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.16675 16.6667V3.33334H15.5001V7.50001H16.3334C17.0279 7.50001 17.6181 7.74307 18.1042 8.22918C18.5904 8.71529 18.8334 9.30557 18.8334 10V16.6667H7.16675ZM4.25008 17.5C4.83341 17.5 5.32647 17.2986 5.72925 16.8958C6.13203 16.4931 6.33341 16 6.33341 15.4167V8.75001C6.33341 8.16668 6.13203 7.67362 5.72925 7.27084C5.32647 6.86807 4.83341 6.66668 4.25008 6.66668C3.66675 6.66668 3.17369 6.86807 2.77091 7.27084C2.36814 7.67362 2.16675 8.16668 2.16675 8.75001V15.4167C2.16675 16 2.36814 16.4931 2.77091 16.8958C3.17369 17.2986 3.66675 17.5 4.25008 17.5ZM8.83341 7.50001H13.8334V5.00001H8.83341V7.50001ZM13.8334 11.6667C14.0695 11.6667 14.2676 11.5867 14.4276 11.4267C14.5876 11.2667 14.6673 11.0689 14.6667 10.8333C14.6667 10.5972 14.5867 10.3992 14.4267 10.2392C14.2667 10.0792 14.069 9.99945 13.8334 10C13.5973 10 13.3992 10.08 13.2392 10.24C13.0792 10.4 12.9995 10.5978 13.0001 10.8333C13.0001 11.0695 13.0801 11.2675 13.2401 11.4275C13.4001 11.5875 13.5979 11.6672 13.8334 11.6667ZM16.3334 11.6667C16.5695 11.6667 16.7676 11.5867 16.9276 11.4267C17.0876 11.2667 17.1673 11.0689 17.1667 10.8333C17.1667 10.5972 17.0867 10.3992 16.9267 10.2392C16.7667 10.0792 16.569 9.99945 16.3334 10C16.0973 10 15.8992 10.08 15.7392 10.24C15.5792 10.4 15.4995 10.5978 15.5001 10.8333C15.5001 11.0695 15.5801 11.2675 15.7401 11.4275C15.9001 11.5875 16.0979 11.6672 16.3334 11.6667ZM13.8334 14.1667C14.0695 14.1667 14.2676 14.0867 14.4276 13.9267C14.5876 13.7667 14.6673 13.5689 14.6667 13.3333C14.6667 13.0972 14.5867 12.8992 14.4267 12.7392C14.2667 12.5792 14.069 12.4995 13.8334 12.5C13.5973 12.5 13.3992 12.58 13.2392 12.74C13.0792 12.9 12.9995 13.0978 13.0001 13.3333C13.0001 13.5695 13.0801 13.7675 13.2401 13.9275C13.4001 14.0875 13.5979 14.1672 13.8334 14.1667ZM16.3334 14.1667C16.5695 14.1667 16.7676 14.0867 16.9276 13.9267C17.0876 13.7667 17.1673 13.5689 17.1667 13.3333C17.1667 13.0972 17.0867 12.8992 16.9267 12.7392C16.7667 12.5792 16.569 12.4995 16.3334 12.5C16.0973 12.5 15.8992 12.58 15.7392 12.74C15.5792 12.9 15.4995 13.0978 15.5001 13.3333C15.5001 13.5695 15.5801 13.7675 15.7401 13.9275C15.9001 14.0875 16.0979 14.1672 16.3334 14.1667ZM8.83341 14.1667H12.1667V10H8.83341V14.1667Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Fax senden</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Checklisten" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Checklisten"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.598 1.09794C0.5 2.19744 0.5 3.96444 0.5 7.49994C0.5 11.0354 0.5 12.8032 1.598 13.9012C2.6975 14.9999 4.4645 14.9999 8 14.9999C11.5355 14.9999 13.3033 14.9999 14.4012 13.9012C15.5 12.8039 15.5 11.0354 15.5 7.49994C15.5 3.96444 15.5 2.19669 14.4012 1.09794C13.304 -6.10352e-05 11.5355 -6.10352e-05 8 -6.10352e-05C4.4645 -6.10352e-05 2.69675 -6.10352e-05 1.598 1.09794ZM6.908 4.13769C6.95892 4.08416 6.9988 4.02112 7.02536 3.95218C7.05192 3.88324 7.06464 3.80974 7.06279 3.73589C7.06095 3.66203 7.04457 3.58926 7.0146 3.52173C6.98463 3.4542 6.94166 3.39323 6.88812 3.34231C6.83459 3.29139 6.77156 3.25152 6.70262 3.22496C6.63368 3.1984 6.56018 3.18568 6.48632 3.18752C6.41246 3.18937 6.33969 3.20574 6.27216 3.23571C6.20463 3.26568 6.14367 3.30866 6.09275 3.36219L4.35725 5.18469L3.90725 4.71219C3.85688 4.65653 3.79588 4.61151 3.72784 4.57979C3.6598 4.54807 3.5861 4.53029 3.51109 4.52749C3.43607 4.5247 3.36125 4.53695 3.29104 4.56353C3.22083 4.5901 3.15665 4.63046 3.10229 4.68222C3.04792 4.73399 3.00446 4.79611 2.97448 4.86493C2.94449 4.93375 2.92859 5.00788 2.9277 5.08295C2.92681 5.15801 2.94096 5.23249 2.9693 5.302C2.99765 5.37152 3.03962 5.43465 3.09275 5.48769L3.95 6.38769C4.00253 6.44283 4.06572 6.48672 4.13572 6.51672C4.20573 6.54671 4.28109 6.56218 4.35725 6.56218C4.43341 6.56218 4.50877 6.54671 4.57878 6.51672C4.64878 6.48672 4.71197 6.44283 4.7645 6.38769L6.908 4.13769ZM8.75 4.68744C8.60082 4.68744 8.45774 4.7467 8.35225 4.85219C8.24676 4.95768 8.1875 5.10075 8.1875 5.24994C8.1875 5.39912 8.24676 5.5422 8.35225 5.64769C8.45774 5.75318 8.60082 5.81244 8.75 5.81244H12.5C12.6492 5.81244 12.7923 5.75318 12.8977 5.64769C13.0032 5.5422 13.0625 5.39912 13.0625 5.24994C13.0625 5.10075 13.0032 4.95768 12.8977 4.85219C12.7923 4.7467 12.6492 4.68744 12.5 4.68744H8.75ZM6.90725 9.38769C6.96038 9.33465 7.00235 9.27152 7.0307 9.20201C7.05904 9.13249 7.07319 9.05801 7.0723 8.98295C7.07141 8.90788 7.05551 8.83375 7.02552 8.76493C6.99554 8.69611 6.95208 8.63399 6.89771 8.58222C6.84335 8.53046 6.77917 8.4901 6.70896 8.46353C6.63875 8.43695 6.56393 8.4247 6.48891 8.42749C6.4139 8.43029 6.3402 8.44807 6.27216 8.47979C6.20412 8.51151 6.14312 8.55653 6.09275 8.61219L4.35725 10.4347L3.90725 9.96219C3.85688 9.90653 3.79588 9.86151 3.72784 9.82979C3.6598 9.79807 3.5861 9.78029 3.51109 9.77749C3.43607 9.7747 3.36125 9.78695 3.29104 9.81353C3.22083 9.8401 3.15665 9.88046 3.10229 9.93222C3.04792 9.98399 3.00446 10.0461 2.97448 10.1149C2.94449 10.1838 2.92859 10.2579 2.9277 10.3329C2.92681 10.408 2.94096 10.4825 2.9693 10.552C2.99765 10.6215 3.03962 10.6847 3.09275 10.7377L3.95 11.6377C4.00253 11.6928 4.06572 11.7367 4.13572 11.7667C4.20573 11.7967 4.28109 11.8122 4.35725 11.8122C4.43341 11.8122 4.50877 11.7967 4.57878 11.7667C4.64878 11.7367 4.71197 11.6928 4.7645 11.6377L6.90725 9.38769ZM8.75 9.93744C8.60082 9.93744 8.45774 9.9967 8.35225 10.1022C8.24676 10.2077 8.1875 10.3508 8.1875 10.4999C8.1875 10.6491 8.24676 10.7922 8.35225 10.8977C8.45774 11.0032 8.60082 11.0624 8.75 11.0624H12.5C12.6492 11.0624 12.7923 11.0032 12.8977 10.8977C13.0032 10.7922 13.0625 10.6491 13.0625 10.4999C13.0625 10.3508 13.0032 10.2077 12.8977 10.1022C12.7923 9.9967 12.6492 9.93744 12.5 9.93744H8.75Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Checklisten</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Telefon" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Telefon"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.38547 0.510109C2.56045 0.335398 2.77055 0.199868 3.00187 0.112499C3.23318 0.025131 3.48043 -0.01208 3.72721 0.00333218C3.97399 0.0187444 4.21469 0.0864279 4.43333 0.201897C4.65198 0.317367 4.84359 0.477985 4.99547 0.673109L6.79047 2.97911C7.11947 3.40211 7.23547 3.95311 7.10547 4.47311L6.55847 6.66311C6.53019 6.77654 6.53172 6.89535 6.56291 7.00802C6.5941 7.12068 6.65388 7.22337 6.73647 7.30611L9.19347 9.76311C9.27631 9.84586 9.37916 9.90575 9.49202 9.93695C9.60488 9.96814 9.72389 9.96957 9.83747 9.94111L12.0265 9.39411C12.2831 9.32995 12.5509 9.32496 12.8098 9.37954C13.0686 9.43411 13.3116 9.5468 13.5205 9.70911L15.8265 11.5031C16.6555 12.1481 16.7315 13.3731 15.9895 14.1141L14.9555 15.1481C14.2155 15.8881 13.1095 16.2131 12.0785 15.8501C9.43965 14.9216 7.04374 13.4109 5.06847 11.4301C3.08776 9.45512 1.57708 7.05957 0.648471 4.42111C0.286471 3.39111 0.611471 2.28411 1.35147 1.54411L2.38547 0.510109Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Telefon</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Videokonferenz" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Videokonferenz"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.75 -6.10352e-05C2.15326 -6.10352e-05 1.58097 0.236992 1.15901 0.658949C0.737053 1.08091 0.5 1.6532 0.5 2.24994V8.24994C0.5 8.84668 0.737053 9.41897 1.15901 9.84093C1.58097 10.2629 2.15326 10.4999 2.75 10.4999H10.25C10.8467 10.4999 11.419 10.2629 11.841 9.84093C12.2629 9.41897 12.5 8.84668 12.5 8.24994V7.06044L14.2197 8.78019C14.3246 8.88505 14.4583 8.95645 14.6037 8.98538C14.7492 9.0143 14.9 8.99945 15.037 8.9427C15.174 8.88594 15.2911 8.78984 15.3736 8.66653C15.456 8.54323 15.5 8.39825 15.5 8.24994V2.24994C15.5 2.10163 15.456 1.95665 15.3736 1.83335C15.2911 1.71004 15.174 1.61393 15.037 1.55718C14.9 1.50043 14.7492 1.48558 14.6037 1.5145C14.4583 1.54343 14.3246 1.61483 14.2197 1.71969L12.5 3.43944V2.24994C12.5 1.6532 12.2629 1.08091 11.841 0.658949C11.419 0.236992 10.8467 -6.10352e-05 10.25 -6.10352e-05H2.75Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Videokonferenz</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Kalender" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Kalender"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5625 1.40322L10.8092 1.40324V0.468799C10.8092 0.209754 10.5995 -6.10352e-05 10.3405 -6.10352e-05C10.0815 -6.10352e-05 9.87172 0.209754 9.87172 0.468799V1.403H6.12172V0.468799C6.12172 0.209754 5.91195 -6.10352e-05 5.65297 -6.10352e-05C5.39398 -6.10352e-05 5.18422 0.209754 5.18422 0.468799V1.403H1.4375C0.919766 1.403 0.5 1.82287 0.5 2.34072V14.0622C0.5 14.5801 0.919766 14.9999 1.4375 14.9999H14.5625C15.0802 14.9999 15.5 14.5801 15.5 14.0622V2.34072C15.5 1.82309 15.0802 1.40322 14.5625 1.40322ZM14.5625 14.0622H1.4375V2.34072H5.18422V2.8131C5.18422 3.07213 5.39398 3.28196 5.65297 3.28196C5.91195 3.28196 6.12172 3.07213 6.12172 2.8131V2.34096H9.87172V2.81333C9.87172 3.07238 10.0815 3.28219 10.3405 3.28219C10.5995 3.28219 10.8092 3.07238 10.8092 2.81333V2.34096H14.5625V14.0622ZM11.2812 7.4984H12.2188C12.4775 7.4984 12.6875 7.28835 12.6875 7.02954V6.09182C12.6875 5.83301 12.4775 5.62296 12.2188 5.62296H11.2812C11.0225 5.62296 10.8125 5.83301 10.8125 6.09182V7.02954C10.8125 7.28835 11.0225 7.4984 11.2812 7.4984ZM11.2812 11.249H12.2188C12.4775 11.249 12.6875 11.0392 12.6875 10.7802V9.84247C12.6875 9.58366 12.4775 9.37361 12.2188 9.37361H11.2812C11.0225 9.37361 10.8125 9.58366 10.8125 9.84247V10.7802C10.8125 11.0395 11.0225 11.249 11.2812 11.249ZM8.46875 9.37361H7.53125C7.2725 9.37361 7.0625 9.58366 7.0625 9.84247V10.7802C7.0625 11.0392 7.2725 11.249 7.53125 11.249H8.46875C8.7275 11.249 8.9375 11.0392 8.9375 10.7802V9.84247C8.9375 9.58389 8.7275 9.37361 8.46875 9.37361ZM8.46875 5.62296H7.53125C7.2725 5.62296 7.0625 5.83301 7.0625 6.09182V7.02954C7.0625 7.28835 7.2725 7.4984 7.53125 7.4984H8.46875C8.7275 7.4984 8.9375 7.28835 8.9375 7.02954V6.09182C8.9375 5.83278 8.7275 5.62296 8.46875 5.62296ZM4.71875 5.62296H3.78125C3.5225 5.62296 3.3125 5.83301 3.3125 6.09182V7.02954C3.3125 7.28835 3.5225 7.4984 3.78125 7.4984H4.71875C4.9775 7.4984 5.1875 7.28835 5.1875 7.02954V6.09182C5.1875 5.83278 4.9775 5.62296 4.71875 5.62296ZM4.71875 9.37361H3.78125C3.5225 9.37361 3.3125 9.58366 3.3125 9.84247V10.7802C3.3125 11.0392 3.5225 11.249 3.78125 11.249H4.71875C4.9775 11.249 5.1875 11.0392 5.1875 10.7802V9.84247C5.1875 9.58389 4.9775 9.37361 4.71875 9.37361Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Kalender</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Aufrtage" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Aufrtage"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3.99994C4.5 3.46951 4.71071 2.9608 5.08579 2.58573C5.46086 2.21065 5.96957 1.99994 6.5 1.99994H14.5C15.0304 1.99994 15.5391 2.21065 15.9142 2.58573C16.2893 2.9608 16.5 3.46951 16.5 3.99994V13.8829L14.005 16.4029L13.071 15.4499C12.9339 15.306 12.7695 15.1908 12.5875 15.1109C12.4054 15.0311 12.2093 14.9882 12.0106 14.9849C11.8118 14.9815 11.6144 15.0176 11.4297 15.0912C11.245 15.1648 11.0768 15.2744 10.9349 15.4135C10.7929 15.5527 10.6801 15.7187 10.6028 15.9019C10.5256 16.085 10.4856 16.2817 10.485 16.4805C10.4845 16.6793 10.5234 16.8762 10.5996 17.0598C10.6759 17.2434 10.7878 17.41 10.929 17.5499L11.37 17.9999H6.5C5.96957 17.9999 5.46086 17.7892 5.08579 17.4142C4.71071 17.0391 4.5 16.5304 4.5 15.9999V3.99994ZM9.5 9.49994C9.5 9.63255 9.55268 9.75972 9.64645 9.85349C9.74021 9.94726 9.86739 9.99994 10 9.99994H14C14.1326 9.99994 14.2598 9.94726 14.3536 9.85349C14.4473 9.75972 14.5 9.63255 14.5 9.49994C14.5 9.36733 14.4473 9.24015 14.3536 9.14639C14.2598 9.05262 14.1326 8.99994 14 8.99994H10C9.86739 8.99994 9.74021 9.05262 9.64645 9.14639C9.55268 9.24015 9.5 9.36733 9.5 9.49994ZM10 4.99994C9.86739 4.99994 9.74021 5.05262 9.64645 5.14639C9.55268 5.24015 9.5 5.36733 9.5 5.49994C9.5 5.63255 9.55268 5.75972 9.64645 5.85349C9.74021 5.94726 9.86739 5.99994 10 5.99994H14C14.1326 5.99994 14.2598 5.94726 14.3536 5.85349C14.4473 5.75972 14.5 5.63255 14.5 5.49994C14.5 5.36733 14.4473 5.24015 14.3536 5.14639C14.2598 5.05262 14.1326 4.99994 14 4.99994H10ZM9.5 13.4999C9.5 13.6325 9.55268 13.7597 9.64645 13.8535C9.74021 13.9473 9.86739 13.9999 10 13.9999H14C14.1326 13.9999 14.2598 13.9473 14.3536 13.8535C14.4473 13.7597 14.5 13.6325 14.5 13.4999C14.5 13.3673 14.4473 13.2402 14.3536 13.1464C14.2598 13.0526 14.1326 12.9999 14 12.9999H10C9.86739 12.9999 9.74021 13.0526 9.64645 13.1464C9.55268 13.2402 9.5 13.3673 9.5 13.4999ZM7.5 10.4999C7.76522 10.4999 8.01957 10.3946 8.20711 10.207C8.39464 10.0195 8.5 9.76516 8.5 9.49994C8.5 9.23472 8.39464 8.98037 8.20711 8.79283C8.01957 8.6053 7.76522 8.49994 7.5 8.49994C7.23478 8.49994 6.98043 8.6053 6.79289 8.79283C6.60536 8.98037 6.5 9.23472 6.5 9.49994C6.5 9.76516 6.60536 10.0195 6.79289 10.207C6.98043 10.3946 7.23478 10.4999 7.5 10.4999ZM8.5 5.49994C8.5 5.23472 8.39464 4.98037 8.20711 4.79283C8.01957 4.6053 7.76522 4.49994 7.5 4.49994C7.23478 4.49994 6.98043 4.6053 6.79289 4.79283C6.60536 4.98037 6.5 5.23472 6.5 5.49994C6.5 5.76516 6.60536 6.01951 6.79289 6.20705C6.98043 6.39458 7.23478 6.49994 7.5 6.49994C7.76522 6.49994 8.01957 6.39458 8.20711 6.20705C8.39464 6.01951 8.5 5.76516 8.5 5.49994ZM7.5 14.4999C7.76522 14.4999 8.01957 14.3946 8.20711 14.207C8.39464 14.0195 8.5 13.7652 8.5 13.4999C8.5 13.2347 8.39464 12.9804 8.20711 12.7928C8.01957 12.6053 7.76522 12.4999 7.5 12.4999C7.23478 12.4999 6.98043 12.6053 6.79289 12.7928C6.60536 12.9804 6.5 13.2347 6.5 13.4999C6.5 13.7652 6.60536 14.0195 6.79289 14.207C6.98043 14.3946 7.23478 14.4999 7.5 14.4999ZM18.355 14.8519C18.4458 14.7573 18.4957 14.6307 18.494 14.4996C18.4924 14.3684 18.4392 14.2432 18.3461 14.1509C18.253 14.0585 18.1273 14.0065 17.9962 14.0059C17.865 14.0054 17.7389 14.0564 17.645 14.1479L14.002 17.8279L12.357 16.1499C12.3113 16.102 12.2565 16.0636 12.1958 16.0369C12.1351 16.0103 12.0698 15.996 12.0035 15.9949C11.9373 15.9938 11.8715 16.0058 11.8099 16.0304C11.7483 16.0549 11.6923 16.0914 11.645 16.1378C11.5976 16.1842 11.56 16.2395 11.5343 16.3006C11.5085 16.3616 11.4952 16.4272 11.495 16.4935C11.4948 16.5597 11.5078 16.6254 11.5332 16.6866C11.5586 16.7478 11.5959 16.8033 11.643 16.8499L13.572 18.8179C13.6277 18.8748 13.6941 18.9199 13.7675 18.9508C13.8408 18.9817 13.9195 18.9977 13.9991 18.9979C14.0786 18.9981 14.1575 18.9825 14.2309 18.9519C14.3044 18.9214 14.371 18.8765 14.427 18.8199L18.355 14.8519Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Aufträge</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Aufgaben" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Aufgaben"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1800)">
                    <path
                      d="M15.145 2.47502H11.545C11.4011 2.04731 11.1266 1.67557 10.7601 1.41222C10.3937 1.14887 9.95377 1.0072 9.5025 1.0072C9.05123 1.0072 8.61135 1.14887 8.24489 1.41222C7.87844 1.67557 7.6039 2.04731 7.46 2.47502H4C3.87755 2.45731 3.75274 2.46577 3.6338 2.49984C3.51486 2.53391 3.4045 2.59281 3.31 2.67267C3.2155 2.75252 3.139 2.85151 3.08557 2.9631C3.03213 3.07468 3.00297 3.19633 3 3.32002V16.13C3.00065 16.2416 3.02329 16.352 3.06661 16.4549C3.10993 16.5578 3.1731 16.6511 3.25249 16.7296C3.33188 16.8081 3.42596 16.8701 3.52934 16.9122C3.63272 16.9543 3.74338 16.9757 3.855 16.975H15.145C15.2566 16.9757 15.3673 16.9543 15.4707 16.9122C15.574 16.8701 15.6681 16.8081 15.7475 16.7296C15.8269 16.6511 15.8901 16.5578 15.9334 16.4549C15.9767 16.352 15.9993 16.2416 16 16.13V3.32002C15.9993 3.2084 15.9767 3.09799 15.9334 2.99512C15.8901 2.89224 15.8269 2.79891 15.7475 2.72044C15.6681 2.64197 15.574 2.57991 15.4707 2.53781C15.3673 2.4957 15.2566 2.47436 15.145 2.47502ZM6.145 3.97502C6.145 3.84241 6.19768 3.71524 6.29145 3.62147C6.38521 3.5277 6.51239 3.47502 6.645 3.47502H8.365V3.16002C8.365 2.85303 8.48695 2.55862 8.70402 2.34154C8.9211 2.12447 9.21551 2.00252 9.5225 2.00252C9.82949 2.00252 10.1239 2.12447 10.341 2.34154C10.558 2.55862 10.68 2.85303 10.68 3.16002V3.50002H12.4C12.5326 3.50002 12.6598 3.5527 12.7536 3.64647C12.8473 3.74024 12.9 3.86741 12.9 4.00002V4.90002H6.125L6.145 3.97502ZM13.405 8.59002L8.845 13.15L6.225 10.53C6.09239 10.3974 6.01789 10.2176 6.01789 10.03C6.01789 9.84248 6.09239 9.66263 6.225 9.53002C6.35761 9.39741 6.53746 9.32291 6.725 9.32291C6.91254 9.32291 7.09239 9.39741 7.225 9.53002L8.855 11.16L12.425 7.59002C12.5576 7.45741 12.7375 7.38291 12.925 7.38291C13.1125 7.38291 13.2924 7.45741 13.425 7.59002C13.5576 7.72263 13.6321 7.90248 13.6321 8.09002C13.6321 8.27756 13.5576 8.45741 13.425 8.59002H13.405Z"
                      fill="#4FD1C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1800">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Aufgaben</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Zeiterfassung" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Zeiterfassung"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0.749939C5 0.551027 5.07902 0.360261 5.21967 0.219609C5.36033 0.0789566 5.55109 -6.10352e-05 5.75 -6.10352e-05L8.75 -6.10352e-05C8.94892 -6.10352e-05 9.13968 0.0789566 9.28033 0.219609C9.42099 0.360261 9.5 0.551027 9.5 0.749939C9.5 0.948851 9.42099 1.13962 9.28033 1.28027C9.13968 1.42092 8.94892 1.49994 8.75 1.49994H8V2.49994L7.999 2.54094C9.26638 2.68115 10.4678 3.17883 11.463 3.97594L11.47 3.96994L12.22 3.21994C12.3117 3.12121 12.4283 3.04904 12.5575 3.01103C12.6868 2.97301 12.8239 2.97057 12.9544 3.00394C13.0849 3.03731 13.204 3.10527 13.2992 3.20066C13.3943 3.29605 13.462 3.41533 13.495 3.54594C13.5284 3.67632 13.5261 3.81329 13.4883 3.94245C13.4504 4.07161 13.3785 4.1882 13.28 4.27994L12.53 5.02994L12.524 5.03694C13.3173 6.03005 13.814 7.22696 13.9571 8.48993C14.1002 9.7529 13.8837 11.0306 13.3327 12.176C12.7817 13.3214 11.9185 14.2879 10.8424 14.9644C9.76627 15.6408 8.52105 15.9997 7.25 15.9997C5.97896 15.9997 4.73374 15.6408 3.65765 14.9644C2.58155 14.2879 1.71832 13.3214 1.1673 12.176C0.616266 11.0306 0.399832 9.7529 0.5429 8.48993C0.685969 7.22696 1.18273 6.03005 1.976 5.03694L1.97 5.02994L1.22 4.27994C1.0876 4.13768 1.01549 3.94963 1.01885 3.75531C1.02221 3.56099 1.10076 3.37554 1.238 3.23794C1.37561 3.1007 1.56106 3.02214 1.75537 3.01878C1.94969 3.01543 2.13774 3.08753 2.28 3.21994L3.03 3.96994L3.037 3.97594C4.03186 3.17882 5.23293 2.68112 6.5 2.54094V1.49994H5.75C5.55109 1.49994 5.36033 1.42092 5.21967 1.28027C5.07902 1.13962 5 0.948851 5 0.749939ZM7.25 14.4999C8.64252 14.4998 9.97796 13.9465 10.9625 12.9618C11.9471 11.977 12.5001 10.6415 12.5 9.24894C12.4999 7.85642 11.9466 6.52099 10.9618 5.53642C9.97706 4.55186 8.64152 3.99881 7.249 3.99894C5.85648 3.99907 4.52105 4.55237 3.53649 5.53713C2.55192 6.52188 1.99887 7.85742 1.999 9.24994C1.99914 10.6425 2.55244 11.9779 3.53719 12.9625C4.52195 13.947 5.85748 14.5001 7.25 14.4999ZM7.639 7.79994L8.969 6.46994C9.03816 6.39827 9.12089 6.3411 9.21237 6.30175C9.30385 6.2624 9.40226 6.24167 9.50184 6.24075C9.60143 6.23984 9.7002 6.25877 9.79239 6.29644C9.88457 6.33411 9.96834 6.38976 10.0388 6.46014C10.1092 6.53053 10.165 6.61424 10.2027 6.70639C10.2405 6.79855 10.2595 6.8973 10.2587 6.99688C10.2579 7.09647 10.2372 7.19489 10.198 7.28641C10.1587 7.37793 10.1016 7.46072 10.03 7.52994L8.7 8.86094C8.75909 9.08328 8.76634 9.31622 8.72121 9.54181C8.67607 9.7674 8.57975 9.97962 8.43967 10.1621C8.29958 10.3446 8.11948 10.4925 7.91322 10.5944C7.70696 10.6963 7.48006 10.7495 7.25 10.7499C7.0377 10.7481 6.8282 10.7012 6.63539 10.6123C6.44258 10.5234 6.27084 10.3946 6.13156 10.2344C5.99228 10.0741 5.88863 9.88613 5.82747 9.68282C5.7663 9.4795 5.74903 9.26552 5.77679 9.05503C5.80454 8.84453 5.8767 8.64234 5.98847 8.46183C6.10024 8.28132 6.24909 8.12662 6.42515 8.00796C6.60121 7.8893 6.80046 7.80939 7.00973 7.77353C7.21899 7.73767 7.43348 7.74667 7.639 7.79994Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Zeiterfassung</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "Produktivitat" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/Produktivitat"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5714 -6.10352e-05L11.868 2.13472L13.9149 3.42098C10.2584 8.01065 4.96905 10.8377 0.5 11.9138L1.76604 14.2125C6.78762 12.581 12.104 9.63825 15.5284 4.43919L17.0877 5.41884L17.5714 -6.10352e-05ZM17.8693 4.5009L17.6836 6.61447L15.6986 5.36484C15.629 5.46898 15.5555 5.56925 15.4819 5.67339V17.9999H18.5V4.5009H17.8693ZM12.0421 9.43769C11.5507 9.86195 11.0439 10.2631 10.5292 10.641V17.9999H13.5473V9.43769H12.0421ZM7.2558 12.6775C6.69862 12.9706 6.14144 13.2406 5.57653 13.4951V17.9999H8.59458V12.6775H7.2558ZM0.623818 14.3745V17.9999H3.64187V14.3745H3.4221C2.84867 14.5866 2.27562 14.7833 1.70606 14.9646L1.43289 15.0494L1.06144 14.3745H0.623818Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">Produktivität</span>
            </Link>

            <Link
              className={`flex items-center w-full h-12 px-3 transition-all duration-300 ${
                activeLink === "kalkulator" ? "bg-[#3AB3B3] text-white" : ""
              } mt-2 rounded-[15px] text-[#265E73`}
              href="/kalkulator"
            >
              <div className="bg-white p-2 rounded-[12px]  ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 0.499939H0.5625C0.251367 0.499939 0 0.751306 0 1.06244V13.9999C0 14.3111 0.251367 14.5624 0.5625 14.5624H13.5C13.8111 14.5624 14.0625 14.3111 14.0625 13.9999V1.06244C14.0625 0.751306 13.8111 0.499939 13.5 0.499939ZM5.76914 11.9785H4.87617C4.8375 11.9785 4.79707 11.9591 4.77246 11.9275L4.14844 11.1628L3.52441 11.9275C3.51224 11.9434 3.49654 11.9563 3.47855 11.9652C3.46055 11.974 3.44075 11.9786 3.4207 11.9785H2.52773C2.41172 11.9785 2.34844 11.8396 2.42578 11.7482L3.52793 10.3982L2.45215 9.08158C2.37656 8.99017 2.43984 8.85131 2.55586 8.85131H3.45059C3.48926 8.85131 3.52969 8.87064 3.5543 8.90228L4.15195 9.63353L4.74961 8.90228C4.77598 8.86888 4.81289 8.85131 4.85332 8.85131H5.74629C5.8623 8.85131 5.92559 8.99017 5.85 9.08158L4.77246 10.3964L5.87461 11.7464C5.94844 11.8396 5.88516 11.9785 5.76914 11.9785ZM5.90625 5.26361C5.90625 5.30228 5.88164 5.33392 5.85 5.33392H4.64062V6.54154C4.64062 6.57494 4.60898 6.59955 4.57031 6.59955H3.72656C3.68789 6.59955 3.65625 6.57494 3.65625 6.5433V5.33392H2.44687C2.41523 5.33392 2.39062 5.30228 2.39062 5.26361V4.41986C2.39062 4.38119 2.41523 4.34955 2.44687 4.34955H3.65625V3.14017C3.65625 3.10853 3.68789 3.08392 3.72656 3.08392H4.57031C4.60898 3.08392 4.64062 3.10853 4.64062 3.14017V4.34955H5.84824C5.88164 4.34955 5.90625 4.38119 5.90625 4.41986V5.26361ZM11.6719 11.7499C11.6719 11.7886 11.6473 11.8203 11.6156 11.8203H8.2125C8.18086 11.8203 8.15625 11.7886 8.15625 11.7499V10.9062C8.15625 10.8675 8.18086 10.8359 8.2125 10.8359H11.6139C11.6473 10.8359 11.6719 10.8675 11.6719 10.9062V11.7499ZM11.6719 9.92181C11.6719 9.96049 11.6473 9.99213 11.6156 9.99213H8.2125C8.18086 9.99213 8.15625 9.96049 8.15625 9.92181V9.07806C8.15625 9.03939 8.18086 9.00775 8.2125 9.00775H11.6139C11.6473 9.00775 11.6719 9.03939 11.6719 9.07806V9.92181ZM11.6719 5.26361C11.6719 5.30228 11.6473 5.33392 11.6156 5.33392H8.2125C8.18086 5.33392 8.15625 5.30228 8.15625 5.26361V4.41986C8.15625 4.38119 8.18086 4.34955 8.2125 4.34955H11.6139C11.6473 4.34955 11.6719 4.38119 11.6719 4.41986V5.26361Z"
                    fill="#65D7CC"
                  />
                </svg>
              </div>

              <span className="ml-2 text-sm font-medium">
                kalkulator Neukunde
              </span>
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

