import { useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFiels] = useState([
    {
      name: "",
      age: "",
    },
  ]);

  const [butt, setButt] = useState(false);

  

  const handleMore = () => {
    const obj = {
      name: "",
      age: "",
    };
    setFormFiels([...formFields, obj]);
    setButt(false);
  };

  const handleRemove = () => {
    const data = [...formFields];
    console.log(data);
    if (formFields.length <= 2) {
      setButt(true);
    } 
    data.splice(formFields.length - 1);

    setFormFiels(data);
  };

  return (
    <div className="App">
      {formFields.map((form) => (
        <div>
          <input name="name" placeholder="name" />
          <input name="age" placeholder="age" />
        </div>
      ))}

      <button onClick={handleMore} className="add">Add more</button>
      <button onClick={handleRemove} disabled={butt}>
        delete
      </button>
    </div>
  );
}

export default App;
