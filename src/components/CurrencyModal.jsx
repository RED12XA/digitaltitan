import React, { useState, useEffect } from 'react';
import '../assets/css/CurrencyModal.css';

function CurrencyModal({ onClose }) {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('MAD');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'fca_live_CNzXJbDD2izfETzIHgJGaMCU8rPYFkwaSIsxaIHj';

  const symbols = {
    USD: { description: "United States Dollar" },
    EUR: { description: "Euro" },
    MAD: { description: "Moroccan Dirham" },
    GBP: { description: "British Pound" },
    JPY: { description: "Japanese Yen" },
    CAD: { description: "Canadian Dollar" },
    AUD: { description: "Australian Dollar" }
    // Add more if needed
  };

  useEffect(() => {
    if (!amount || fromCurrency === '' || toCurrency === '') return;

    setLoading(true);
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${fromCurrency}`
    )
      .then((res) => res.json())
      .then((data) => {
        const rate = data.data[toCurrency];
        if (rate) {
          setResult((rate * amount).toFixed(2));
        } else {
          setResult('Unavailable');
        }
        setLoading(false);
      })
      .catch(() => {
        setResult('Error');
        setLoading(false);
      });
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="modal-overlay">
      <div className="modal-container p-4 bg-white rounded shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>🌍 Currency Converter</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">From</label>
            <select
              className="form-select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.entries(symbols).map(([code, info]) => (
                <option key={code} value={code}>
                  {code} - {info.description}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">To</label>
            <select
              className="form-select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.entries(symbols).map(([code, info]) => (
                <option key={code} value={code}>
                  {code} - {info.description}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {loading ? (
            <div className="text-primary">Converting...</div>
          ) : result !== null ? (
            <h6 className="fw-bold">
              {amount} {fromCurrency} = {result} {toCurrency}
            </h6>
          ) : null}
        </div>

        <div className="text-end mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyModal;
