import ListItem from "../list-item/list-item";


import './list.css';

const List = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {text, checked, id} = item;

        return(
            <ListItem 
                text={text} 
                checked={checked} 
                key={id} 
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <ul className="list-group rounded mb-5">
            {elements}
        </ul>
    )
}

export default List;