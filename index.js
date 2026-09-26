import express from 'express';


const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})