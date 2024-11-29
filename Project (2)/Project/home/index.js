// const stockData = [
//     { symbol: "RELIANCE", name: "Reliance Industries", price: "₹2,500" },
//     { symbol: "TCS", name: "Tata Consultancy Services", price: "₹3,200" },
//     { symbol: "INFY", name: "Infosys Ltd.", price: "₹1,600" },
//     { symbol: "HDFC", name: "HDFC Bank", price: "₹1,450" },
//     { symbol: "BHARTIARTL", name: "Bharti Airtel", price: "₹650" },
//     { symbol: "BAJAJFINSV", name: "Bajaj Finserv", price: "₹17,500" }
// ];

// function displayStocks() {
//     const stockList = document.getElementById('stocks-list');
//     stockList.innerHTML = '';

//     stockData.forEach(stock => {
//         const stockItem = document.createElement('div');
//         stockItem.classList.add('stock-item');

//         stockItem.innerHTML = `
//             <h4>${stock.name} (${stock.symbol})</h4>
//             <p>Price: ${stock.price}</p>
//         `;

//         stockList.appendChild(stockItem);
//     });
// }

// function searchStocks() {
//     const searchTerm = document.getElementById('stock-search').value.toLowerCase();
//     const filteredStocks = stockData.filter(stock =>
//         stock.name.toLowerCase().includes(searchTerm) || stock.symbol.toLowerCase().includes(searchTerm)
//     );

//     const stockList = document.getElementById('stocks-list');
//     stockList.innerHTML = '';

//     filteredStocks.forEach(stock => {
//         const stockItem = document.createElement('div');
//         stockItem.classList.add('stock-item');

//         stockItem.innerHTML = `
//             <h4>${stock.name} (${stock.symbol})</h4>
//             <p>Price: ${stock.price}</p>
//         `;

//         stockList.appendChild(stockItem);
//     });

//     if (filteredStocks.length === 0) {
//         stockList.innerHTML = '<p>No stocks found.</p>';
//     }
// }

// window.onload = displayStocks;
