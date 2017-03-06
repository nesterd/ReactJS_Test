
var React = require('react');
var ReactDOM = require('react-dom');

//var Persons =
//    [
//        { name: 'Коля' },
//        { name: 'Петя' },
//        { name: 'Саша' },
//        { name: 'Вася' }

//    ];



class PersonList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            items:
                [
                   { name: 'Коля' },
                   { name: 'Петя' },
                   { name: 'Саша' },
                   { name: 'Вася' }
                ],
            addingField : ''
        };
        this.handleAddingFieldChange = this.handleAddingFieldChange.bind(this)
    }

    handleDelete(index) {
        var items = this.state.items
        items.splice(index, 1)
        console.log(items)
        this.setState({ items: items })
    }

    handleAdd() {
        var arr = this.state.items
        arr.splice(arr.length, 0, { name: this.state.addingField })
        this.setState({ items: arr })
        document.getElementById("adding-field").value = ''
        
        
    }

    handleAddingFieldChange(event) {
        console.log(event.target.value)
        this.setState({ addingField: event.target.value })
    }

    render() {
        return <div>
    <ul>
        {this.state.items.map((item, index) => <li>{item.name} <input type="button" value="Удалить" onClick={this.handleDelete.bind(this, index) }/></li>)}
    </ul>
    <input type="text" id="adding-field" onChange={this.handleAddingFieldChange} />     <input type="button" value="Добавить" onClick={this.handleAdd.bind(this)} />
    </div>
    
    }
}

ReactDOM.render(
    <PersonList name="List" />,
    document.getElementById("root")
);

