/* 主页 */

// ==================
// 所需的各种插件
// ==================

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import P from 'prop-types';


// ==================
// Definition
// ==================
class NotFoundContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="not-found">
          <p>404 page</p>
      </div>
    );
  }
}

// ==================
// PropTypes
// ==================

NotFoundContainer.propTypes = {

};

// ==================
// Export
// ==================

export default connect(
  (state) => ({
  }), 
  (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
  })
)(NotFoundContainer);
