export default function ItemReducer(prevItems, action) {
    function replaceExistingItem() {
        return sortItems([...prevItems.filter(item => { return item.title !== action.item.title}), action.item]);
    }

    function sortItems(items) {
        return items.sort((a, b) => {
            return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
        });
    }


    const itemToUpdate = prevItems.filter(item => { return item.title === action.item.title })[0];
    switch(action.type) {
        case "menuAdd": 
            if (!itemToUpdate) {
                return sortItems([...prevItems, action.item])
            }
            action.item.amount = parseInt(itemToUpdate.amount) + parseInt(action.item.amount);
            return replaceExistingItem(itemToUpdate)
        case "increment":
            itemToUpdate.amount = parseInt(itemToUpdate.amount) + 1
            return replaceExistingItem(itemToUpdate)
        case "decrement":
            itemToUpdate.amount = parseInt(itemToUpdate.amount) - 1
            if(parseInt(itemToUpdate.amount) > 0){
                return replaceExistingItem(itemToUpdate)
            }
            return sortItems([...prevItems.filter(item => { return item.title !== action.item.title})])
        default:
            break;
    }
}