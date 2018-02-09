import React from 'react';


function Form () {
  return (
    <div className="formDiv">
      <style jsx>{`
        .formDiv {
          width: 100%;
          margin: 10px;
          border: black 2px solid;
          padding: 10px;
        }
        form {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
        }
        input {
          width: 100%;
          height: 40px;
        }
        label {
          margin-top: 10px;
        }
        button {
          width: 100%;
          height: 40px;
          background-color: rgb(108, 69, 191);
          color: rgb(255, 255, 255);
          font-size: 20px;
        }
      `}</style>
      <h3>Add yourself to the list</h3>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Name"></input>
        <label>Course and Year:</label>
        <input type="text" placeholder="Course and Year"></input>
        <label>Your dinosaur identity:</label>
        <input type="text" placeholder="Your dinosaur identity"></input>
        <label>Quote:</label>
        <input type="text" placeholder="Quote"></input>
        <label>Upload your image:</label>
        <input type="file"></input>
        <button bsStyle="primary" type="submit">Just submit yourself already!</button>
      </form>
    </div>
  );
}

export default Form;
