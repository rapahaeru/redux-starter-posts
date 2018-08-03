import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        // o parametro match é provido do Router
        // esse id é o valor do :id fornecido no router '/posts:id'
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const id = this.props.match.params.id
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>loading...</div>;
        }

        return (
            <div>
                <Link to="/" >De volta para o indice</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={ this.onDeleteClick.bind(this) }
                >
                    Delete Post
                </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);