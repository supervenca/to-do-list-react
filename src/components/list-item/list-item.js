import './list-item.css'

const ListItem = (props) => {


    return (
        <li className="list-group-item border-0 d-flex align-items-center ps-0">
                <input className="form-check-input me-3" 
                type="checkbox" 
                value="" 
                aria-label="..." 
                checked={props.checked}
                />
                {props.text}
        </li>
    )  
}

export default ListItem;