const DeleteItem = ({item, onDeleteItem=f => f}) => {

    const deleteItem = (item) => {
        onDeleteItem(item);
    }

    const isItemFound = () => item != null;

    return (
        <button onClick={deleteItem} disabled={!isItemFound()}>
            Delete Last Item
        </button>
    )
}

export default DeleteItem;
