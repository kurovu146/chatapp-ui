import Button from "../../components/button/Button";
import '../../styles/layouts/Content.css';

const contents = [
  {
    id: 1,
    message: 'Instagram post templates. Pick out ready-to-publish Instagram posts or create your own with our collection of customizable templates, icons and images.'
  },
  {
    id: 2,
    message: 'Instagram post templates. Pick out ready-to-publish Instagram posts or create your own with our collection of customizable templates, icons and images.'
  },
  {
    id: 1,
    message: 'Instagram post templates. Pick out ready-to-publish Instagram posts or create your own with our collection of customizable templates, icons and images.'
  },
  {
    id: 2,
    message: 'Instagram post templates. Pick out ready-to-publish Instagram posts or create your own with our collection of customizable templates, icons and images.'
  }
]

function Content() {

  return (
    <div className="w-full flex-col justify-between">
      <div className="content h-5/6 flex flex-col">
        {contents.map((content, index) => {
          return <div key={index} className={'flex grid ' + ((content.id & 1) ? 'justify-items-start' : 'justify-items-end')}>
            <div className="max-w-2xl border-solid border-2 rounded-xl p-2 m-2">{content.message}</div>
          </div>
        })}
      </div>
      <div className="message flex h-1/6 p-8">
        <input type="text" placeholder="Text your message ..." className="w-11/12 m-2 rounded"/>
        <Button content="Send" onClick={() => {}} className="m-2 w-16 rounded bg-zinc-600 text-white border-solid hover:bg-zinc-600" />
      </div>
    </div>
  );
}

export default Content;