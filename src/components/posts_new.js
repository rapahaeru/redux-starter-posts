import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    // o argumento field é um 'event handler' do componente Field
    // onde é chamado. para podermos ter os controles necessários
    // dos elementos do form
    renderField(field) {
        return(
            <div className="form-group">
                <label>{ field.label }</label>
                {/* // onChange, onBlur , Onclick
                <input onFocus={field.input.onFocus} />
                <input onChange={field.input.onChange} /> */}
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return(
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={ this.renderField }
                />
                <Field
                    label="Content"
                    name="content"
                    component={ this.renderField }
                />
            </form>
        );
    };
}

export default reduxForm({
    form: 'PostNewForm'
})(PostNew);