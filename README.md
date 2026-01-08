# Portfolio - Zoé Briois
## 🛠️ Stack technique

- **React 19** avec **TypeScript**
- **React Router** pour la navigation
- **CSS Modules** pour le styling
- **Create React App** comme base

### Pourquoi ces choix ?

- **TypeScript** : Type safety, rigueur technique, maintenabilité
- **CSS Modules** : Scoped CSS, pas de conflits de noms, simple et performant
- **Pas de dépendances lourdes** : Code clair, bundle léger, performance optimale

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Composants réutilisables (Header, Footer, Button, Card)
│   └── sections/        # Sections de pages (Hero, About, Experience, Projects, Contact)
├── pages/               # Pages principales (Home, AboutPage, ExperiencePage, ProjectsPage)
├── data/                # Données du portfolio (experience.ts, projects.ts, about.ts)
├── types/               # Types TypeScript
├── styles/              # Styles globaux et variables CSS
└── App.tsx              # Routing principal
```

## 🚀 Installation et lancement

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancement en développement

```bash
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

Le build sera disponible dans le dossier `build/`

### Déploiement

Le site est configuré pour se déployer automatiquement sur **GitHub Pages** via GitHub Actions.

#### Déploiement automatique (recommandé)

À chaque push sur `main`, le workflow GitHub Actions :
1. Build le projet
2. Déploie automatiquement sur GitHub Pages
3. Le site est accessible à : `https://zoebriois.github.io/portfolio`

**Configuration requise** :
- Aller dans `Settings` → `Pages` du repository
- Sélectionner Source: `GitHub Actions`

Pour plus de détails, voir [DEPLOY.md](DEPLOY.md)

#### Autres plateformes

Le site peut aussi être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Drag & drop du dossier `build/`

## 🎨 Design & UX

### Principes de design

- **Sobre et professionnel** : Focus sur le contenu, pas sur les effets
- **Lisibilité optimale** : Typographie claire, espacements généreux
- **Responsive** : Optimisé mobile, tablette et desktop
- **Performance** : Chargement rapide, bundle optimisé

### Couleurs

- **Primaire** : Vert produit (#10B981)
- **Texte** : Gris très foncé (#111827)
- **Secondaire** : Gris moyen (#6B7280)
- **Fond** : Blanc cassé (#F9FAFB)

## 📄 Contenu

### Pages

1. **Accueil** : Hero section avec pitch produit + CTA
2. **À propos** : Valeurs, compétences, positionnement produit
3. **Expérience** : Timeline des postes avec focus sur l'impact
4. **Projets** : Études de cas au format Problème → Décisions → Impact

### Données

Toutes les données sont dans `src/data/` :
- `experience.ts` : Expériences professionnelles
- `projects.ts` : Projets / études de cas
- `about.ts` : Informations "à propos", compétences, valeurs

**Pour modifier le contenu** : Éditez ces fichiers TypeScript, les changements seront automatiquement reflétés.

## 🔧 Personnalisation

### Modifier les couleurs

Éditez `src/styles/variables.css` :

```css
:root {
  --color-primary: #10B981;      /* Vert produit */
  --color-text-primary: #111827; /* Gris très foncé */
  --color-bg: #F9FAFB;           /* Blanc cassé */
  /* ... */
}
```

### Ajouter une page

1. Créez un composant dans `src/pages/`
2. Ajoutez une route dans `src/App.tsx`
3. Ajoutez un lien dans `src/components/common/Header.tsx`

### Modifier les projets

Éditez `src/data/projects.ts` et ajoutez/modifiez les objets dans le tableau `projects`.

## 💡 Choix d'architecture

### Pourquoi CSS Modules et pas Tailwind ?

- ✅ Séparation claire HTML/CSS
- ✅ Pas de classes ultra-longues dans le JSX
- ✅ Plus facile à maintenir pour un projet de cette taille
- ✅ Pas de config supplémentaire

### Pourquoi TypeScript ?

- ✅ Autocomplete et intellisense
- ✅ Détection d'erreurs à la compilation
- ✅ Meilleure maintenabilité
- ✅ Montre la rigueur technique

### Pourquoi pas de state management ?

- Le portfolio est statique
- Pas de données complexes à gérer
- Pas besoin de Redux/Zustand/etc.
- Simplicité = maintenabilité

## 📝 Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm run build` : Build de production
- `npm test` : Lance les tests (si configurés)
- `npm run eject` : Éjecte la config CRA (⚠️ irréversible)

## 🔗 Contact

- **Email** : zoe.briois.pro@gmail.com
- **LinkedIn** : [linkedin.com/in/zoe-briois](https://linkedin.com/in/zoe-briois)
- **GitHub** : [github.com/zoebriois](https://github.com/zoebriois)

---
