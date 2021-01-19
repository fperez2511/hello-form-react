import React, { Component } from 'react'
import CustomParagraph from './CustomParagraph';

const validate = values => {
    const errors = {}
    //console.log(values)
    if (!values.firstName) {
        errors.firstName = 'Este campo es obligatorio'
    }
    if (!values.lastName) {
        errors.lastName = 'Este campo es obligatorio'
    }
    return errors
}

export default class CustomSimpleForm extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        //console.log(e)
        const { name, value } = target;
        //console.log(name, value)
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        //console.log('prevenido!', this.state)
        const { errors, ...formValues } = this.state
        const result = validate(formValues)
        //console.log(Object.keys(result))
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            console.log('Valid form: Sending...')
            e.target.reset();
        }
    }

    render() {
        //console.log(this.state)
        const { errors } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} />
                { errors.firstName && <CustomParagraph>{ errors.firstName }</CustomParagraph>}
                <input name="lastName" onChange={this.handleChange} />
                { errors.lastName && <CustomParagraph>{ errors.lastName }</CustomParagraph>}
                <input type='submit' value='Send' />
            </form>
        )
    }
}