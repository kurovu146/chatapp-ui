import { MouseEventHandler } from "react";

interface Props {
  content: string;
  className?: string;
  onClick: MouseEventHandler;
}

export default function Button(props: Props) {
  return (
    <button onClick={props.onClick} className={props.className} >{props.content}</button>
  )
}