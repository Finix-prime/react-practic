import PropTypes from "prop-types";

function List(props) {

    const itemList = props.item;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // fruits.sort((a, b) => a.cal - b.cal); // numeric order
    // fruits.sort((a, b) => b.cal - a.cal); // reverse numeric order

    const lowCal = itemList.filter(fruit => fruit.cal < 100);
    const highCal = itemList.filter(fruit => fruit.cal >= 100);

    const listItem = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.cal}</b> </li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItem}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            cal: PropTypes.number,
        }
    )),
}

List.defaultProps = {
    item: [],
    category: "Category",
}
export default List