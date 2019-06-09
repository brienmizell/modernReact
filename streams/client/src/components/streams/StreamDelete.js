import Modal from "../Modal";
import React from "react";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <div className="ui button negative">Delete</div>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete!
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
