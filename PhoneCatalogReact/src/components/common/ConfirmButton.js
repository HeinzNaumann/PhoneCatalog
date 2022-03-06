import React, { useState, Fragment } from "react";

function ConfirmButton({ confirmation, onConfirm, ...props }) {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const showConfirmation = () => setConfirmationVisible(true);
  const hideConfirmation = () => setConfirmationVisible(false);

  const handleClick = showConfirmation;
  const handleConfirmClick = () => {
    hideConfirmation();
    onConfirm();
  };

  const handleCancelClick = hideConfirmation;

  return (
    <Fragment>
      <button onClick={handleClick} {...props} />
      {confirmationVisible && (
        <div className='confirmacion'>
          {confirmation}
          <button className='myButton' onClick={handleConfirmClick}>
            Ok
          </button>
          <button className='myButton' onClick={handleCancelClick}>
            Cancelar
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default ConfirmButton;
