# Guide de démarrage rapide

## ✅ Le portfolio est prêt !

Tout le code a été généré et le projet compile sans erreur.

## 🚀 Lancement immédiat

```bash
# Si les dépendances ne sont pas installées
npm install

# Lancer le serveur de développement
npm start
```

Le site sera accessible sur **http://localhost:3000**

## 📁 Fichiers importants

### Contenu à personnaliser

Tous les fichiers de contenu sont dans `src/data/` :

1. **src/data/about.ts**
   - Votre pitch et introduction
   - Vos valeurs
   - Vos compétences
   - Votre objectif de carrière

2. **src/data/experience.ts**
   - Vos expériences professionnelles
   - Déjà rempli avec votre CV
   - Reformulé avec un angle produit

3. **src/data/projects.ts**
   - Vos études de cas produit
   - 4 projets pré-remplis basés sur votre expérience
   - Format : Problème → Décisions → Impact

### Liens à modifier

**src/components/common/Footer.tsx** (lignes 27-29)
- Mettez à jour vos liens LinkedIn, GitHub, Email

**src/components/sections/Contact.tsx** (lignes 19, 25, 40, 45, 50)
- Vérifiez que les liens de contact sont corrects

## 🎨 Personnalisation du design

### Changer les couleurs

Éditez `src/styles/variables.css` :

```css
:root {
  --color-primary: #10B981;      /* Vert produit */
  --color-primary-dark: #059669; /* Version plus foncée */
  --color-primary-light: #34D399; /* Version plus claire */
  --color-text-primary: #111827; /* Gris très foncé */
  --color-bg: #F9FAFB;           /* Blanc cassé */
}
```

### Modifier la typographie

Dans `src/styles/variables.css`, modifiez :

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

## 📝 Modifier le contenu

### Ajouter un projet

1. Ouvrez `src/data/projects.ts`
2. Ajoutez un objet dans le tableau `projects` :

```typescript
{
  id: 'mon-projet',
  title: 'Titre du projet',
  subtitle: 'Sous-titre court',
  problem: 'Description du problème...',
  context: 'Contexte du projet...',
  decisions: {
    product: [
      'Décision produit 1',
      'Décision produit 2'
    ],
    technical: [
      'Décision technique 1',
      'Décision technique 2'
    ]
  },
  impact: [
    'Impact mesurable 1',
    'Impact mesurable 2'
  ],
  learnings: [
    'Apprentissage 1',
    'Apprentissage 2'
  ],
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### Modifier votre pitch

Éditez `src/data/about.ts` :

```typescript
export const aboutData = {
  introduction: "Votre nouvelle introduction...",
  headline: "Votre headline...",
  // ...
}
```

## 🌐 Déploiement

### Option 1 : Vercel (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Option 2 : Netlify

1. Build le projet : `npm run build`
2. Allez sur [netlify.com](https://netlify.com)
3. Drag & drop le dossier `build/`

### Option 3 : GitHub Pages

1. Ajoutez dans `package.json` :
   ```json
   "homepage": "https://votre-username.github.io/portfolio"
   ```

2. Installez gh-pages :
   ```bash
   npm install --save-dev gh-pages
   ```

3. Ajoutez les scripts :
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Déployez :
   ```bash
   npm run deploy
   ```

## 🎯 Checklist avant déploiement

- [ ] Vérifier tous les liens (LinkedIn, GitHub, Email)
- [ ] Relire le contenu de `about.ts`
- [ ] Vérifier que les projets reflètent votre expérience
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier les fautes d'orthographe
- [ ] Tester tous les liens de navigation
- [ ] Vérifier que le build fonctionne : `npm run build`

## 📊 Structure du site

### Pages

1. **/** (Accueil)
   - Hero avec pitch produit
   - Stats clés
   - CTA vers projets et à propos

2. **/about** (À propos)
   - Introduction et valeurs
   - Compétences (Product, Tech, Leadership, Soft)
   - Objectif de carrière
   - CTA contact

3. **/experience** (Expérience)
   - Timeline des postes
   - Focus sur l'impact et les décisions
   - Autres expériences
   - CTA contact

4. **/projects** (Projets)
   - Études de cas détaillées
   - Format produit (Problème → Décisions → Impact)
   - CTA contact

## 🔧 Commandes utiles

```bash
# Développement
npm start              # Lance le serveur de dev (port 3000)

# Build
npm run build          # Build de production

# Test
npm test               # Lance les tests (si configurés)

# Analyse du bundle
npm run build          # Build puis analyser la taille
```

## 🐛 Troubleshooting

### Le site ne compile pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreurs TypeScript

- Vérifiez que `tsconfig.json` existe
- Assurez-vous que tous les fichiers `.tsx` ont les imports corrects

### Styles qui ne s'appliquent pas

- Vérifiez que `src/styles/variables.css` et `src/styles/globals.css` sont importés dans `App.tsx`
- Vérifiez que les CSS Modules sont bien importés avec `.module.css`

## 💡 Conseils

### SEO

Modifiez `public/index.html` :

```html
<title>Zoé Briois - Product Engineer</title>
<meta name="description" content="Lead Tech Backend orientée produit. 5 ans d'expérience en architecture API et leadership technique.">
```

### Analytics (optionnel)

Pour suivre les visites, ajoutez Google Analytics dans `public/index.html`

### Performance

- Gardez les images < 200kb
- Utilisez le format webp
- Lazy load les images si nécessaire

## 📚 Documentation complète

- **README.md** : Guide général du projet
- **ARCHITECTURE.md** : Explications des choix techniques
- **GUIDE.md** : Ce fichier (démarrage rapide)

## 🎉 C'est prêt !

Votre portfolio est **production-ready**. Il ne vous reste plus qu'à :

1. Lancer `npm start` pour le voir
2. Personnaliser le contenu dans `src/data/`
3. Vérifier les liens de contact
4. Déployer sur Vercel/Netlify

Bonne chance pour votre recherche de poste Product Engineer ! 🚀
