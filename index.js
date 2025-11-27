const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=> res.json({ ok: true }));
app.listen(process.env.PORT || 4000, ()=> console.log('API running'));
