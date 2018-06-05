import React from 'react'
// import './index.css';


export default class extends React.Component {
    state = {
        name: '',
        country: ''
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <article>
                    <h1><center>Hello</center></h1>
                    <h1><center>My name is...</center></h1>
                </article>
                <form><center>{this.state.name}</center></form>
                <h2><center>{this.state.country}</center></h2>
                <input type="text" placeholder="Name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                <select id="country" name="country" value={this.state.country} onChange={e => this.setState({ country: e.target.value })}>
                    <option value="Afghanistan" title="Afghanistan">Afghanistan</option>
                    <option value="Australia" title="Australia">Australia</option>
                    <option value="Belgium" title="Belgium">Belgium</option>
                    <option value="Brazil" title="Brazil">Brazil</option>
                    <option value="Cambodia" title="Cambodia">Cambodia</option>
                    <option value="Canada" title="Canada">Canada</option>
                    <option value="China" title="China">China</option>
                    <option value="France" title="France">France</option>
                    <option value="Germany" title="Germany">Germany</option>
                    <option value="USA" title="USA">USA</option>
                    <option value="Viet Nam" title="Viet Nam">Viet Nam</option>
                </select>
                <footer><center>Tien Nguyen made it</center></footer>
            </div>
        )
    }
}