import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {

    // life cycle method
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // O retorno está vindo um objeto e não um array,
        // por esse motivo não usamos o map nativo do JS,
        // utilizamos o método map da lib lodash
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={ post.id }>
                    { post.title }
                </li>
            );
        });
    }

    render(){

        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts:  state.posts
    }
}

// ACTION CREATOR SHORTCUT
// utilizamos o objeto fetchPosts diretamente no lugar do mapDispatchToProps
// Esta é uma outra maneira de utilizar
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);