import React from 'react';

const Appointments = ({ selectedPhysician, appointments }) => {
  return (
    <div className="col">
      {selectedPhysician.id ? (
        <div className="col">
          <div className="row">
            <h1>
              Dr.{' '}
              {`${selectedPhysician.first_name} ${selectedPhysician.last_name}`}
            </h1>
          </div>
          <div className="row">
            <h4>{selectedPhysician.email}</h4>
          </div>
          <div className="row">
            {appointments.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Kind</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'grey' : 'white'}
                    >
                      <th scope="row">{index + 1}</th>
                      <td>{appointment.name}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.kind}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h6>No Appointments Today</h6>
            )}
          </div>
        </div>
      ) : (
        <h1>Please Select a Physician</h1>
      )}
    </div>
  );
};

export default Appointments;
