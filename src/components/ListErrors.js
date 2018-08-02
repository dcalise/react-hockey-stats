import React from 'react';

class ListErrors extends React.PureComponent {
  render() {
    const { errors } = this.props;

    if (errors) {
      if (typeof errors === 'string') {
        return (
          <div className="alert alert-danger">
            <ul className="error-list">
              {errors}
            </ul>
          </div>
        );
      }
      return (
        <div className="alert alert-danger">
          <ul className="error-list">
            {
              Object.keys(errors).map(key => (
                <li key={key}>
                  {key}
                  {` ${errors[key]}`}
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
    return null;
  }
}

export default ListErrors;
