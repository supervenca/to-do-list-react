import './header.css';

const Header = (props) => {
    return (
    <h1 className="text-center mb-4">{props.name}</h1>
    )
}

export default Header;