import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import trivia from './trivia';
import game from './timer';

const reducer = combineReducers({ player, token, trivia, game });

export default reducer;
