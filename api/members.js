//members.js
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const response = await fetch(process.env.API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch from Google Sheets: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching members:', err);
    res.status(500).json({ error: "Failed to fetch members" });
  }
}
