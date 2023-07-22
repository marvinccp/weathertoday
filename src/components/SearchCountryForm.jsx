import React from "react";

const SearchCountryForm = ({ handleSubmit, error }) => {
  return (
    <div className="input-search-container">
      <h4>Write the name of the city.</h4>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="input-search-container-form">
        <input
          className="input-search"
          type="text"
          name="city"
          placeholder="ingresa la ciudad"
        />
        <button>Get </button>
      </form>
    </div>
  );
};

export { SearchCountryForm };
