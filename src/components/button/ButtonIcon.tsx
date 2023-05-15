import { MouseEventHandler } from "react";
import '../../styles/components/Button.css'

interface Props {
  content: string;
  className?: string;
  onClick: MouseEventHandler;
}
function ButtonIcon(props: Props) {
  return ( 
    <button className={"button-icon flex items-center justify-items-start p-2 w-full" + props.className} onClick={props.onClick}>
      <img src="/avatar.jpeg" alt="Avatar" className="image flex-none mr-2"/>
      <div  className="w-full py-1 text-left"> {props.content} </div>
    </button>
   );
}

export default ButtonIcon;