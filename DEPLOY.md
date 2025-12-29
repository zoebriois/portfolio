# Guide de déploiement

## Configuration initiale

Le site est configuré pour se déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### Étapes de configuration dans GitHub

1. **Activer GitHub Pages**
   - Aller dans les paramètres du repository : `Settings` → `Pages`
   - Dans "Build and deployment", sélectionner :
     - Source: `GitHub Actions`

2. **Push le code**
   - Commit et push le code sur la branche `main`
   - Le workflow GitHub Actions se lancera automatiquement

3. **Vérifier le déploiement**
   - Aller dans l'onglet `Actions` du repository
   - Vérifier que le workflow "Deploy to GitHub Pages" s'exécute correctement
   - Une fois terminé, le site sera accessible à : `https://zoebriois.github.io/portfolio`

## Déploiement automatique

Le workflow se déclenche automatiquement :
- À chaque push sur la branche `main`
- Manuellement via l'onglet "Actions" → "Deploy to GitHub Pages" → "Run workflow"

## Commandes locales

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm start

# Build de production
npm run build

# Tester le build localement
npx serve -s build
```

## Structure du workflow

Le workflow fait les choses suivantes :
1. Checkout du code
2. Installation de Node.js 20
3. Installation des dépendances avec `npm ci`
4. Build du projet avec `npm run build`
5. Upload de l'artifact vers GitHub Pages
6. Déploiement sur GitHub Pages

## Notes importantes

- Le fichier `.nojekyll` dans `/public` empêche GitHub Pages d'ignorer les fichiers commençant par `_`
- Le champ `homepage` dans `package.json` est configuré pour GitHub Pages
- Le workflow utilise `CI=false` pour ignorer les warnings comme erreurs pendant le build
