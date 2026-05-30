# A.R. Library — MongoDB Atlas Version 🗄️

MySQL se MongoDB Atlas mein migrate ho gaya hai!

---

## ⚡ Pehli Baar Setup (5 minute)

### Step 1 — MongoDB Atlas Free Account Banao
1. https://cloud.mongodb.com pe jaao
2. **Sign Up** karo (Google se bhi ho sakta hai)
3. **Free Tier (M0)** choose karo — bilkul free hai!

### Step 2 — Database User Banao
1. Left mein **Database Access** click karo
2. **Add New Database User** click karo
3. Username: `ar-library`
4. Password: kuch strong password daalo (yaad rakhna!)
5. Role: **Read and Write to any database**
6. **Add User** click karo

### Step 3 — Network Access Allow Karo
1. Left mein **Network Access** click karo
2. **Add IP Address** click karo
3. **Allow Access from Anywhere** click karo (`0.0.0.0/0`)
4. **Confirm** click karo

### Step 4 — Connection String Lao
1. Left mein **Database** click karo
2. Apne cluster ke samne **Connect** click karo
3. **Drivers** choose karo
4. Connection string copy karo — kuch aisa dikhega:
   ```
   mongodb+srv://ar-library:<password>@cluster0.xxxxx.mongodb.net/
   ```
5. `<password>` ki jagah Step 2 wala password daalo

### Step 5 — .env File Edit Karo
`.env` file kholo aur MONGODB_URI mein apna string daalo:
```
MONGODB_URI=mongodb+srv://ar-library:TumharaPassword@cluster0.xxxxx.mongodb.net/ar_library?retryWrites=true&w=majority
```
> ⚠️ `/ar_library` database naam zaroori hai — warna alag database banta hai

### Step 6 — Setup Chalao
```
install-and-setup.bat
```
Aur ho gaya! 🎉

---

## 🚀 Roz Chalane Ke Liye
```
start-server.bat
```
Ya double-click karo — browser automatic khul jayega.

---

## 📁 Files Ka Matlab
| File | Kya Karta Hai |
|------|--------------|
| `server.js` | Main server — MongoDB se baat karta hai |
| `db.js` | MongoDB Atlas connection |
| `models.js` | Data structure (Members, Fees, etc.) |
| `.env` | Secret settings — kisi ko mat dikhana! |
| `public/index.html` | Frontend app |
| `install-and-setup.bat` | Pehli baar setup |
| `start-server.bat` | Roz start karo |

---

## ✅ MySQL se Kya Badla
- `mysql2` → `mongoose` (MongoDB)
- SQL queries → MongoDB queries
- Tables → Collections
- Saare APIs same hain — frontend bilkul same kaam karega

---

## ❓ Problem Aaye Toh
- **Connection fail**: .env mein MONGODB_URI check karo
- **Network error**: MongoDB Atlas → Network Access → 0.0.0.0/0 allow hai?
- **Password wrong**: Atlas pe Database Access → User ka password reset karo
- **pm2 logs** chalaao — error wahan dikhega

---

*Developed by Rohit CircleX ⭕✖️*
