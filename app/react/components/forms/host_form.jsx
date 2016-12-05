import React from 'react';
import { post } from '../utils';
import AutocompleteChips from './autocompleteChips';



class HostForm extends React.Component
{
    constructor () {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            ip: '',
            port: '',
            scann_type: [],
            submitButtonEnabled: false
        }
    }

    handleChange (e) {
        const { ip, port } = this.state
        const name = e.target ? e.target.name : e.name;
        const value = e.currentTarget ? e.currentTarget.value : e.value;
        this.setState({
            [name]: value,
            submitButtonEnabled: !!ip && !!port
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const { ip, port } = this.state


            $.post('http://localhost:3000/hosts', {host: {IP: ip, port}}, function(result){
                console.log(result)
            });




        // post('http://localhost:3000/hosts', {host: {ip, port}})
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         // Who cares?
        //     })
    }

    render() {
        const { submitButtonEnabled, scann_type } = this.state
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="ip address"
                           name="ip"
                           onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input type="number"
                           className="form-control"
                           placeholder="port"
                           name="port"
                           onChange={this.handleChange}
                    />
                </div>
                <AutocompleteChips value={scann_type} onChange={this.handleChange} />
                <button type="submit"
                        className="btn btn-primary"
                        disabled={!submitButtonEnabled}
                >
                    Go!
                </button>

            </form>
        )
    };
};

export default HostForm



