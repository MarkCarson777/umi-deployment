import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import './UserPosts.css';

class UserPosts extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="header">Umi React Assignment</h3>
          <h3 className="header">Posts by {this.props.user.name}</h3>
        </div>
        <Link to="/">
          <button className="back-button">
            GO BACK
          </button>
        </Link>
        <div className="user-card">
          <p>{this.props.user.name}</p>
          <p>{this.props.user.email}</p>
        </div>
        <PostList userId={this.props.user.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id - 1]
  };
};

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(UserPosts);