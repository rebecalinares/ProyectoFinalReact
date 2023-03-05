import { Item } from "../Item/Item"


export const ItemList = ({ listBooks }) => {
console.log(listBooks)
    return(
        <div className="list-books">
            {listBooks?.map(books => <Item key={books.id} books = {books} />)}
        </div>
    )
}