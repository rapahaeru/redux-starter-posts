import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    // o argumento field é um 'event handler' do componente Field
    // onde é chamado. para podermos ter os controles necessários
    // dos elementos do form
    renderTitleField(field) {
        return(
            <div>
                {/* // onChange, onBlur , Onclick
                <input onFocus={field.input.onFocus} />
                <input onChange={field.input.onChange} /> */}
                <input type="text" {...field.input} />
            </div>
        );
    }

    render() {
        return(
            <form>
                <Field
                    name="title"
                    component={ this.renderTitleField}
                />
            </form>
        );
    };
}

export default reduxForm({
    form: 'PostNewForm'
})(PostNew);