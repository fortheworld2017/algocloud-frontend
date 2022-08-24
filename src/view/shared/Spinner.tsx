import React from 'react';

function Spinner(props) {
  let color = 'primary';
  let spin = ''
  if (props.color) color = props.color;
  if (props.spin) spin = props.spin;
  return (
    <div
      style={{
        width: '100%',
        marginTop: '24px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        ...props.style
      }}
    >
      <div className={`spinner-border ${spin ? 'spinner-border-sm' : ''} text-${color}`}></div>
    </div>
  );
}

export default Spinner;
