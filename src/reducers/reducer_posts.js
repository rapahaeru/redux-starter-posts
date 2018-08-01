import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_POSTS:
            // através desse método do lodash, ele pegar uma lista de objetos e consegue exportar um
            // dos itens como indice, facilitando a pesquisa, no caso, foi escolhido o id
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}