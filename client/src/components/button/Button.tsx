import { TProps } from "@/types";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return <button { ...props } className={"bg-turquoise-blue-500 h-11 border border-alto-500 rounded-full font-bold disabled:text-opacity-20 text-black px-4 text-sm w-64 max-w-full" + (props.className ? " " + props.className : "")}>
    { props.children }
  </button>
}
