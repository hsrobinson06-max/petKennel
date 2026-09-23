import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //added adoptMe and Adopt Me button
    const { id, name, image, status, onAction, adoptMe } = this.props;

    return (
      <div className="child-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <h2>{name}</h2>
        <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <p>Status: {status}</p>
        <button onClick={() => onAction(id)}>Click Me</button>
        <button onClick={() => adoptMe(id)}>Adopt Me</button>
      </div>
    );
  }
}

export default ChildComponent;
