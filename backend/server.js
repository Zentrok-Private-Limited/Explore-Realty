const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/realestate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Routes
const subscribeRoute = require('./routes/subscribe');
app.use("/subscribe", subscribeRoute);

const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

const propertyRoutes = require('./routes/propertyRoutes'); // ✅ correct
app.use('/api/properties', propertyRoutes);


// Server start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
