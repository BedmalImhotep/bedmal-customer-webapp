const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/customer/usage', (req, res) => {
  res.json({
    customer_id: '456',
    usage: [
      { sku: 'BEDMAL-CUP-001', date: '2025-07-20T10:00:00Z', business: 'Cafe123', status: 'rented' },
    ],
  });
});

app.get('/api/businesses/nearby', (req, res) => {
  res.json({
    businesses: [
      { id: '123', name: 'Cafe123', address: '123 High St, London', distance: '0.5km', lat: 51.5, lng: -0.1 },
    ],
  });
});

app.get('/api/business/inventory', (req, res) => {
  res.json({
    business_id: '123',
    inventory: [
      { sku: 'BEDMAL-CUP-001', stock: 100, in_use: 50, returned: 30, lost: 2 },
    ],
  });
});

app.listen(3000, () => console.log('Mock API running on port 3000'));
