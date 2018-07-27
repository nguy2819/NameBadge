First basic practice between "state" and "onChange"

```
export default class extends React.Component {
    state = {
        name: '',
        country: ''
    }
```


```
render() {
        console.log(this.state)
        return (
            <div>
            <form><center>{this.state.name}</center></form>
                <h2><center>{this.state.country}</center></h2>
                <input type="text" placeholder="Name" value={this.state.name} 
                    onChange={event => this.setState({ name: event.target.value })} />
                <select id="country" name="country" value={this.state.country} 
                    onChange={e => this.setState({ country: e.target.value })}>
                    <option value="USA" title="USA">USA</option>
                    <option value="Viet Nam" title="Viet Nam">Viet Nam</option>
                 </select>
                <footer><center>Tien Nguyen made it</center></footer>
            </div>
        )
    }
}
```
