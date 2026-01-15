import { useState } from "react";
import { getRecommendation } from "../services/api";

function Forms({ setResult }) {
  const [category, setCategory] = useState("Face");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      category: category,
      age: age,
    };

    console.log("Sending to backend:", data); // DEBUG

    const res = await getRecommendation(data);
    setResult(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Face">Face</option>
        <option value="Hair">Hair</option>
        <option value="Body">Body</option>
        <option value="Nails">Nails</option>
      </select>

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">Get Recommendation</button>
    </form>
  );
}

export default Forms;
