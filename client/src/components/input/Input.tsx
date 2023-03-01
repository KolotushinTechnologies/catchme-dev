import { TProps } from "@/types";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return <input {...props} className={"bg-alto-200 h-11 border border-alto-500 rounded-full outline-none px-4 text-sm w-64 max-w-full" + (props.className ? " " + props.className : "")} />
}
