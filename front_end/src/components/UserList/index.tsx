import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';

import { getUsers} from '../../reducers/userListReducer';
import { RootState } from '../../reducers/RootReducer';
import * as actions from '../../actions/userListActions';

//'mapStateToProps'
const mapState = (state: RootState) => (getUsers(state));

//'mapDispatchToProps'
const mapDispatch = {
    // getUsers: () => ({ type: actions.GET_USERS})
    addUser: (data: actions.UserListAction) => ({ type: actions.ADD_USER, payload: data})
};

const connector = connect(mapState, mapDispatch);

type PropsFromStore = ConnectedProps<typeof connector>

type Props = PropsFromStore & {
    //custom props go here (ie. 'ownprops')
};

const UserList = (props: Props) => (
    <div>
        <h3>Overchorkers</h3>
        <ListGroup>
            {
            props.users && props.users.map(u => 
                <ListGroup.Item>{u.name}#{u.id}</ListGroup.Item>)
            }
        </ListGroup>
    </div>
);

export default connector(UserList);
