# 💹 FinanzPuls — Live Finance Dashboard

KI-gestütztes Finanzdashboard mit Echtzeit-Nachrichten, Marktdaten und Chat-Assistent.

---

## 🚀 Deployment auf Vercel

### 1. Repository auf GitHub erstellen
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/finanzpuls.git
git push -u origin main
```

### 2. Vercel verbinden
1. Gehe zu [vercel.com](https://vercel.com) → kostenlos registrieren
2. **"Add New Project"** → GitHub Repo importieren
3. Einfach auf **"Deploy"** klicken (keine Build-Einstellungen nötig)

### 3. API Key hinterlegen (wichtig!)
1. Im Vercel Dashboard → dein Projekt → **Settings → Environment Variables**
2. Neue Variable hinzufügen:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-...` (dein Key von console.anthropic.com)
   - **Environment:** Production, Preview, Development ✅
3. **Save** → dann **Redeploy** (Deployments → drei Punkte → Redeploy)

### 4. Fertig! 🎉
Deine Seite ist live unter: `https://finanzpuls.vercel.app` (oder ähnlich)

---

## 📁 Projektstruktur
```
finanzpuls/
├── index.html        # Das Dashboard
├── api/
│   └── claude.js     # Serverless API-Proxy (hält den Key sicher)
└── vercel.json       # Vercel-Konfiguration
```

## 🔑 API Key holen
→ [console.anthropic.com](https://console.anthropic.com) → API Keys → Create Key

## 💡 Hinweis
Der API-Key ist **niemals** im Frontend-Code sichtbar — er bleibt sicher in der Vercel-Umgebungsvariable.
