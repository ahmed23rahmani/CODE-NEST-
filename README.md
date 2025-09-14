# CODE NEST - Page d'Accueil

## 🎨 Spécifications Design

### Palette de Couleurs
- **Bleu Nuit** : `#071229` - Arrière-plan principal
- **Bleu Profond** : `#0f2b45` - Éléments secondaires
- **Bleu Gris** : `#1f3b55` - Éléments tertiaires
- **Blanc** : `#FFFFFF` - Texte et éléments clairs
- **Accent** : `#2EA6FF` - Couleur d'accent (boutons, liens)

### Typographie
- **Titres** : Poppins (300, 400, 500, 700)
- **Corps** : Inter (300, 400, 500, 700)
- **Poids utilisés** :
  - 700 : Titres principaux
  - 500 : Sous-titres et navigation
  - 300-400 : Paragraphes et texte courant

### Grille & Layout
- **Largeur maximale** : 1200px
- **Marges généreuses** : 24px (desktop), 20px (tablet), 16px (mobile)
- **Responsive** : Desktop (1024px+), Tablet (768px-1024px), Mobile (<768px)

## 🚀 Fonctionnalités

### Header
- Logo CODE NEST avec icône SVG personnalisée
- Navigation responsive avec menu hamburger sur mobile
- Bouton CTA "Demander un devis" avec couleur d'accent
- Header fixe avec effet de transparence au scroll

### Hero Section
- **Colonne gauche** :
  - Badge "Agile • Sur-mesure • Fiable"
  - Titre principal impactant
  - Sous-titre descriptif
  - Boutons CTA (primaire + secondaire)
  - 3 points d'avantages avec icônes

- **Colonne droite** :
  - Mockups d'appareils (desktop, mobile, tablet)
  - Fond avec motif circuit board subtil
  - Effets de profondeur et ombres

### Animations & Interactions
- Fade-up au chargement des éléments
- Effet parallax sur le fond technique
- Hover effects sur les boutons et mockups
- Animation de flottement pour les mockups
- Transitions fluides (0.2s-0.3s)

### Responsive Design
- **Desktop** : Layout deux colonnes
- **Tablet** : Adaptation des tailles et espacements
- **Mobile** : Stack vertical, menu hamburger, boutons full-width

## ♿ Accessibilité

### Conformité WCAG AA
- Contraste suffisant (texte blanc sur fond bleu nuit)
- Focus visible sur tous les éléments interactifs
- Support du mode contraste élevé
- Respect des préférences de mouvement réduit
- Navigation au clavier optimisée

### Optimisations
- Skip links pour la navigation
- Attributs ARIA appropriés
- Support des lecteurs d'écran
- Images avec texte alternatif

## 📱 Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (max-width: 1024px) { ... }

/* Small Mobile */
@media (max-width: 480px) { ... }
```

## 🛠️ Structure des Fichiers

```
/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS avec variables
├── script.js           # Interactions JavaScript
└── README.md           # Documentation
```

## 🎯 Utilisation

1. **Ouvrir le fichier** : `index.html` dans un navigateur moderne
2. **Développement** : Utiliser un serveur local pour les tests
3. **Personnalisation** : Modifier les variables CSS dans `:root`
4. **Optimisation** : Minifier les fichiers pour la production

## 🔧 Personnalisation

### Variables CSS Principales
```css
:root {
    --color-nuit: #071229;
    --color-profond: #0f2b45;
    --color-gris: #1f3b55;
    --color-white: #FFFFFF;
    --color-accent: #2EA6FF;
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Inter', sans-serif;
    --container-max-width: 1200px;
}
```

### Modifications Courantes
- **Couleurs** : Changer les valeurs dans `:root`
- **Typographie** : Modifier les familles de polices
- **Espacements** : Ajuster les variables de padding/margin
- **Animations** : Désactiver avec `prefers-reduced-motion`

## 📊 Performance

### Optimisations Incluses
- Polices Google Fonts avec `preconnect`
- CSS optimisé avec variables
- JavaScript modulaire et léger
- Images SVG pour les icônes
- Animations GPU-accélérées

### Métriques Cibles
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🌐 Compatibilité

### Navigateurs Supportés
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fonctionnalités Modernes
- CSS Grid et Flexbox
- CSS Custom Properties
- Intersection Observer API
- Backdrop Filter (avec fallback)

## 📝 Notes de Développement

- Code modulaire et maintenable
- Commentaires détaillés en français
- Structure sémantique HTML5
- CSS organisé par sections
- JavaScript vanilla (pas de dépendances)

## 🚀 Déploiement

1. **Test local** : Vérifier tous les breakpoints
2. **Optimisation** : Minifier CSS/JS si nécessaire
3. **Validation** : Tester l'accessibilité
4. **Performance** : Mesurer les Core Web Vitals
5. **Déploiement** : Upload sur serveur web

---

**Développé par CODE NEST** - Développement Web, Apps Mobiles & Formations
