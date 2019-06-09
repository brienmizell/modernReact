import Modal from "../Modal";
import { connect } from "react-redux";
import React from "react";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <div className="ui button negative">Delete</div>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete!
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamDelete);
