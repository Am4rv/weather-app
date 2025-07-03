import "./SearchBar.css";

export default function SearchBar({ city, setCity, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <h2 className="search-title">🌦️ Consulta el clima de tu ciudad</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="🌍 Ingresa una ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={onSearch}>Buscar clima</button>
      </div>
    </div>
  );
}
