import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send("Welcome to the subscription tracker API!!!");
})


app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
})

export default app;