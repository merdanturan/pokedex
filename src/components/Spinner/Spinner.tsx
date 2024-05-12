import React from 'react'

// Loading spinner
const Spinner: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
            <div className="spinner-border" role="status" />
        </div>
    )
}

export default Spinner