module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const feed = req.query.url;
  if (!feed) return res.status(400).json({ error: 'No URL provided' });

  try {
    const response = await fetch(feed, {
      headers: { 'User-Agent': 'Mozilla/5.0 FinanzPuls/1.0' }
    });
    const xml = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    return res.status(200).send(xml);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
