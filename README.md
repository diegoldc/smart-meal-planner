# 🛒 SmartMealPlanner

**AI-powered weekly meal planner with real receipt scanning and budget optimization**

*A full-stack portfolio project combining OCR, AI agents, and smart budgeting*

---

## 🎯 The Problem

Families struggle with:
- **Food waste**: Buying too much or too little
- **Budget overruns**: No clear meal planning
- **Time waste**: Hours deciding what to cook
- **Dietary needs**: Hard to balance preferences, allergies, and budget

**SmartMealPlanner solves this** by generating personalized weekly meal plans based on real grocery prices extracted from receipt photos.

---

## ✨ Key Features

### MVP (v1.0)
- 📸 **Receipt OCR**: Scan grocery receipts to extract real product prices
- 🤖 **AI Meal Planning**: Gemini AI generates personalized weekly menus
- 💰 **Budget Tracking**: Know exactly what your week will cost
- 🥗 **Dietary Preferences**: Vegetarian, vegan, gluten-free, allergies
- 📊 **Portion Control**: Customized quantities per household size
- 🍽️ **Flexible Meals**: Choose 1-3 meals per day (breakfast, lunch, dinner)
- 🛒 **Shopping List Generator**: Consolidated list with quantities and estimated prices

### Future (v2.0+)
- 🔄 Iterative learning (adjust portions based on weekly feedback)
- 🏪 Multi-store price comparison
- 🎁 Promotional offers from nearby stores
- 👤 User accounts & meal history
- 📱 Mobile app

---

## 🏗️ Tech Stack

### Frontend
- **React** + **Vite**: Fast, modern UI
- **TailwindCSS**: Responsive styling
- **Vercel**: Deployment

### Backend
- **Python 3.11+**
- **FastAPI**: High-performance REST API
- **Google Vision API**: OCR for receipt scanning
- **Google Gemini API**: AI meal planning agent
- **Render/Railway**: Deployment

### Database
- **MongoDB Atlas**: NoSQL for flexible data storage

### External APIs
- Google Cloud Vision (1,000 free requests/month)
- Google Gemini API (AI agent)

---

## 🚀 How It Works

```
1. User Input
   ├─ Household size (e.g., 3 people)
   ├─ Weekly budget (e.g., €60)
   ├─ Dietary preferences (vegetarian, no nuts, etc.)
   ├─ Meals per day (e.g., lunch + dinner)
   └─ Receipt photo upload

2. Backend Processing
   ├─ OCR extracts product names & prices
   ├─ Data stored in MongoDB
   ├─ Gemini AI generates meal plan
   └─ Cost calculation per recipe

3. Output
   ├─ 7-day meal plan with recipes
   ├─ Ingredient quantities per person
   ├─ Total estimated cost
   └─ Missing ingredients flagged
```

---

## 📂 Project Structure

```
smartmealplanner/
├── frontend/               # React app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Main views
│   │   ├── services/      # API calls
│   │   └── utils/         # Helpers
│   └── package.json
│
├── backend/               # FastAPI server
│   ├── app/
│   │   ├── routers/      # API endpoints
│   │   ├── services/     # Business logic
│   │   │   ├── ocr.py    # Google Vision integration
│   │   │   └── ai.py     # Gemini integration
│   │   ├── models/       # MongoDB schemas
│   │   └── main.py       # FastAPI entry point
│   └── requirements.txt
│
├── docs/                  # Architecture & planning
│   ├── ARCHITECTURE.md
│   ├── API_ENDPOINTS.md
│   └── MVP_PLAN.md
│
└── README.md
```

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- MongoDB Atlas account (free tier)
- Google Cloud account (Vision API enabled)
- Gemini API key

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add your API keys:
# GOOGLE_VISION_KEY=...
# GEMINI_API_KEY=...
# MONGODB_URI=...

uvicorn app.main:app --reload
# Runs on http://localhost:8000
```

---

## 🧪 Testing

### Test Receipt OCR
```bash
# Upload sample receipt to test endpoint
curl -X POST http://localhost:8000/api/ocr/scan \
  -F "file=@sample_receipt.jpg"
```

### Test Meal Generation
```bash
# Generate meal plan
curl -X POST http://localhost:8000/api/meals/generate \
  -H "Content-Type: application/json" \
  -d '{
    "household_size": 3,
    "budget": 60,
    "dietary_preferences": ["vegetarian"],
    "meals_per_day": 2
  }'
```

---

## 📊 Database Schema

### Collections

**receipts**
```json
{
  "_id": "ObjectId",
  "user_id": "string",
  "store_name": "string",
  "scan_date": "datetime",
  "items": [
    {
      "product_name": "string",
      "price": "float",
      "quantity": "string"
    }
  ],
  "total": "float"
}
```

**meal_plans**
```json
{
  "_id": "ObjectId",
  "user_id": "string",
  "created_at": "datetime",
  "household_size": "int",
  "budget": "float",
  "dietary_preferences": ["string"],
  "weekly_menu": [
    {
      "day": "Monday",
      "meals": {
        "lunch": {
          "recipe_name": "string",
          "ingredients": ["string"],
          "estimated_cost": "float"
        },
        "dinner": { ... }
      }
    }
  ],
  "total_cost": "float"
}
```

---

## 🎯 MVP Roadmap (4-5 weeks, ~10 hours/week)

### Week 1: Foundation
- [x] Project setup (repo, structure)
- [ ] Basic React UI (form + file upload)
- [ ] FastAPI skeleton
- [ ] MongoDB connection

### Week 2: OCR Integration
- [ ] Google Vision API setup
- [ ] Receipt upload endpoint
- [ ] Parse OCR results
- [ ] Store in MongoDB

### Week 3: AI Meal Planning
- [ ] Gemini API integration
- [ ] Prompt engineering for meal plans
- [ ] Cost calculation logic
- [ ] Frontend display of results

### Week 4: Polish & Testing
- [ ] Error handling
- [ ] Loading states
- [ ] Responsive design
- [ ] End-to-end testing

### Week 5: Deployment
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Vercel
- [ ] Environment variables setup
- [ ] Documentation & demo video

---

## 🤝 Contributing

This is a collaborative portfolio project by:
- **Sara Triana Merchan** - AI/Automation Consultant ([LinkedIn](https://www.linkedin.com/in/sara-triana-merchan))
- **[Partner Name]** - Full-Stack Developer ([LinkedIn](#))

---

## 📝 License

MIT License - Free for educational and portfolio use

---

## 🚦 Current Status

✅ **Planning Phase**: Architecture designed  
🚧 **In Development**: MVP implementation  
⏳ **Coming Soon**: Live demo link

---

## 📧 Contact

Have questions or feedback?  
Reach out via [LinkedIn](https://www.linkedin.com/in/sara-triana-merchan)(https://www.linkedin.com/in/diego-lazaro-decastro/) or open an issue!

---

**Built with ❤️ to help families eat better on a budget**
