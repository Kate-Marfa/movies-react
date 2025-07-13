export function PopUp({ releaseDate, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          x
        </button>
        <p>
          <strong>Release Date:</strong> {releaseDate}
        </p>
      </div>
    </div>
  );
}

export default PopUp;
