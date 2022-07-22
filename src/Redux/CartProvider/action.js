export const Get_UDATED_LOCAL_STORAGE_FUNCT = (data)=> {
    return {
        type : "GET_UDATED_LOCAL_STORAGE",
        payload : data
    }
}

export const GET_UPDATED_ITEM_QUANTITY_FUNC = (data)=> {
    return {
        type : "GET_UPDATED_ITEM_QUANTITY",
        payload : data
    }
}

export const get_total_amount_func = (amount)=> {
    return {
        type : "GET_ITEMS_TOTAL_AMOUNT",
        payload : amount
    }
}