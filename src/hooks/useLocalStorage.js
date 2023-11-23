import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState(false);

    let parsedItem;
    useEffect(() => {
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                parsedItem = JSON.parse(localStorageItem) || initialValue;
                setItem(parsedItem);
            } catch (error) {
                setError(true);
            }
        },2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        error,
    };
}

export { useLocalStorage };