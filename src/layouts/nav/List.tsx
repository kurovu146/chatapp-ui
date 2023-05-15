import ButtonIcon from "../../components/button/ButtonIcon";

function List() {
  function handleClick() {
    
  }
  return (
    <div className="list">
      <label><h1>Online member</h1></label>
      <ButtonIcon content="Vu Duc Tuan" onClick={handleClick} />
    </div>
  );
}

export default List;
