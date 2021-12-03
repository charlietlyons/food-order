export default function ItemReducer(prevItems, newItem) {
    const itemToUpdate = prevItems.filter(item => { return item.title === newItem.title });
    
    if (itemToUpdate.length === 0) {
        return [...prevItems, newItem];
    }
    newItem.amount = parseInt(newItem.amount) + parseInt(itemToUpdate[0].amount);

    return [...prevItems.filter(item => { return item.title !== newItem.title}), newItem];
}