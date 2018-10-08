import React from 'react';

const PollCreator = (props) => (
  <div className="poll-card card">
    <div className="card-header text-center">
      Create New Poll
    </div>
    <form>
      <div className="form-group text-left">
        <label>Would you rather ...</label>
        <input type="text" className="form-control" id="pollOption1" placeholder="Enter option one" />
        <div className='hr'>
            <span className='hr-title'>Or</span>
        </div>
        <input type="text" className="form-control" id="pollOption2" placeholder="Enter option two" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default PollCreator;
