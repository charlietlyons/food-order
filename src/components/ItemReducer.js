export const ItemReducer = (items, action) => {
    const existingItemIndex = items.map((item) => { return item.title}).indexOf(action.item.title);
    if(existingItemIndex < 0) {
        return items.concat(action.item)
    }

    items[existingItemIndex].amount = parseInt(items[existingItemIndex].amount) + parseInt(action.item.amount);
    return items;
    
}