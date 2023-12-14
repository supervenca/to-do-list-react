import ListItem from "../list-item/list-item";

import './list.css';

const List = (props) => {

    return (
        <ul class="list-group rounded">
              <ListItem text="Remove duplicate tasks and stories" checked=""/>
              <ListItem text="Task list and assignments" checked="checked"/>
              <li class="list-group-item border-0 d-flex align-items-center ps-0">
                <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." checked />
                <s>Task list and assignments</s>
              </li>

              <ListItem text="Set due date and assignments" checked=""/>
              <ListItem text="Update the userflow and stories" checked=""/>
              <ListItem text="Adjust the components" checked=""/>
            </ul>
    )
}

export default List;