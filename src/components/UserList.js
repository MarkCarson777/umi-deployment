import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom';
import './UserList.css';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <div key={user.id} className="button">
          <Link to={`/${user.id}`}>
            <button className="user-button">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </button>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3 className="header">Umi React Assignment</h3>
        </div>
        <div className="button-layout">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);