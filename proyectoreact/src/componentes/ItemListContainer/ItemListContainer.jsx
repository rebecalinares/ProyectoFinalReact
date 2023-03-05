import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    const [listBooks, setListBooks] = useState ([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "books");

    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

    getDocs(q).then((snapShot) => {
        setListBooks(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
        ))
    });
}, [id]);

    return(
        <div>
            <ItemList listBooks = {listBooks} />
        </div>
    )
}

export { ItemListContainer } 