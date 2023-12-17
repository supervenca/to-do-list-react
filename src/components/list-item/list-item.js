import './list-item.css'
import { Trash3Fill } from 'react-bootstrap-icons';

const ListItem = (props) => {
    const {text, checked, onDelete, onToggleChecked} = props;

    let liClassNames = "list-group-item border-0 d-flex align-items-center justify-content-between p-3";

    if(checked === 'checked'){
        liClassNames = 'border-0 d-flex align-items-center justify-content-between p-3 line-through'
    }

    return (
        
        <li className={liClassNames}>
            <div>
                <input className="form-check-input me-3" 
                    type="checkbox" 
                    value="" 
                    aria-label="..." 
                    checked={checked}
                    role="button"
                    onClick={onToggleChecked}
                />
                {text}
            </div>
                <Trash3Fill 
                    className="ml-4 d-flex" 
                    color="#e30517" 
                    role="button" 
                    onClick={onDelete}
                />
        </li>
    )  
}

export default ListItem;