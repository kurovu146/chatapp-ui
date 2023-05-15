import Button from "../../components/button/Button";
import '../../styles/layouts/Content.css'

function Content() {

  function handleClick() {

  }
  return (
    <div className="w-full flex-col justify-between">
      <div className="content h-5/6 ">
        Content
      </div>
      <div className="message flex h-1/6 p-8">
        <input type="text" placeholder="Text something ..." className="w-11/12 m-2 rounded"/>
        <Button content="Send" onClick={handleClick} className="m-2 w-16 rounded bg-zinc-600 text-white border-solid hover:bg-zinc-600" />
      </div>
    </div>
  );
}

export default Content;