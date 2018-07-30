import React from 'react';

class ListErrors extends React.Component {
  render() {
    let errors = this.props.errors;
    
    console.log(typeof errors);
    
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
              Object.keys(errors).map(key => {
                return (
                  <li key={key}>
                    {key} {errors[key]}
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ListErrors;