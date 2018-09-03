Basic practice between "state" and "onChange"
> ![screen shot 2018-09-03 at 11 40 45 am](https://user-images.githubusercontent.com/36870689/44997826-57da7c80-af6e-11e8-8ebe-152e2622f3f4.png)

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
