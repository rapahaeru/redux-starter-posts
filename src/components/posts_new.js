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
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            // Ao submitar o formulario, o handleSubmit irá aguardar o ok da validação para 
            // em seguida chamar o método onSubmit que criamos
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field
                    label="Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={ this.renderField }
                />
                <Field
                    label="Content"
                    name="content"
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    };
}

// essa funcao é chamada automaticamente quando o form é submitado
function validate(values) {
    // console.log(values) --> { title: 'dsgfsdg', categories: 'ddddd'. content: 'xcvcxvxc' }
    const errors = {};

    //valida os inputs do 'values'
    if (!values.title) errors.title = "Digite um titulo";
    if (!values.categories) errors.categories = "Digite uma categoria";
    if (!values.content) errors.content = "Digite um conteúdo";

    //se errors for vazio, form pode ser submitado
    return errors;

    // se o retorno do objeto for vazio, o redux-form assume que a validação passou
}


export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(PostNew);