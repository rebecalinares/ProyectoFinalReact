import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [listBooks, setBookList] = useState([]);
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "books", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setBookList({id:snapShot.id, ...snapShot.data()});
            }else {
                console.log("El producto no existe")
            }
        });
    }, []);

    return (
        <div>
            <ItemDetail listBooks={listBooks} />
        </div>
    )

}

export default ItemDetailContainer;