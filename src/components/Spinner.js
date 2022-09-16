import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => {
  return (
    <>
        <div style={{ height: '75vh' }}
>
  <div
    className="bg-dark text-light h-100 w-100  d-flex justify-content-center align-items-center"
  >
          <Spinner
            variant="light"
            as="span"
            animation="border"
            size="xl"
            role="status"
            aria-hidden="true"
            className="text-light"
          />
         <h3>
         {' '}
           Loading...
         </h3>
          
        </div>
      </div>
    </>
  );
};

export default SpinnerComponent;
