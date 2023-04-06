function InputCheck() {
  return (
    <section className="text-left m-5">
      <div>
        <input type="checkbox" checked />
        <label>
          I have read the above requirement and understand the industry
          standards.
        </label>
      </div>
      <div>
        <input type="checkbox" />
        <label>
          Should I not have the above qualification I will likely be denied.
        </label>
      </div>
      <button type="submit" className="border p-1 bg-sky-400">
        Make an appointment
      </button>
    </section>
  );
}
export default InputCheck;
