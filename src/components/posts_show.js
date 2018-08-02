import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        // o parametro match é provido do Router
        // esse id é o valor do :id fornecido no router '/posts:id'
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>loading...</div>;
        }

        return (
            <div>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
}


// o segundo argumento, ownProps é o espelho do "this.props"
// do componente acima. this.props = ownPosts.
// Dessa forma conseguimos pegar o exato post que desejamos
// bem aqui no 'mapStateToProps', Ao invés de enviar todos
// e percorrer dentro do componente
export function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);