import {useState} from "react";

const AddItemForm = ({onNewItem=f=>f}) => {
    let _item;
    const [item, setItem] = useState("");

    const submit = e => {
        e.preventDefault();
        onNewItem(_item.value);
        setItem('');
        _item.value = '';
        _item.focus();
    }

    const handleChange = e => {
        setItem(e.target.value);
    }

    const inputIsEmpty = () => item === "";

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Enter New Item" ref={input => _item = input}
                onChange={handleChange}/>
            <button type="submit" disabled={inputIsEmpty()}>Add</button>
        </form>
    )
}

export default AddItemForm;
