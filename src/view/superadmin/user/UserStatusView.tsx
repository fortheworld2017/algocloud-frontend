import React from 'react';
import { i18n } from 'src/i18n';

function UserStatusView(props) {
  const { value } = props;

  if (value) {
    return (
      <span className={`badge badge-success`}>
        {i18n('user.active.true')}
      </span>
    );
  }
  else {
    return (
      <span className={`badge badge-warning`}>
        {i18n('user.active.false')}
      </span>
    );
  }
}

export default UserStatusView;
