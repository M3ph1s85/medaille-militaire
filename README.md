# Site de l'Association – Médaille Militaire

Site statique Jekyll hébergé gratuitement sur GitHub Pages, avec images sur Cloudinary.

---

## 🚀 Mise en ligne (GitHub Pages)

### 1. Créer le dépôt GitHub
1. Créez un compte sur [github.com](https://github.com) si ce n'est pas fait
2. Créez un **nouveau dépôt public** nommé `medaille-militaire` (ou le nom de votre choix)
3. Uploadez tous ces fichiers dans le dépôt

### 2. Activer GitHub Pages
1. Dans votre dépôt → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : `main` / `root`
4. Votre site sera disponible sur `https://votre-username.github.io/medaille-militaire`

### 3. Personnaliser `_config.yml`
Ouvrez `_config.yml` et remplacez :
- `votre-username` par votre identifiant GitHub
- Les infos de l'association (nom, adresse, tel, email, président…)
- `votre-cloud-name` par votre cloud Cloudinary

---

## 📸 Gestion des photos (Cloudinary)

### Créer un compte Cloudinary (gratuit)
1. Inscrivez-vous sur [cloudinary.com](https://cloudinary.com) – **plan gratuit = 25 Go**
2. Récupérez votre **Cloud Name** dans le tableau de bord
3. Uploadez vos photos dans l'onglet **Media Library**
4. Copiez l'URL de chaque photo (format : `https://res.cloudinary.com/VOTRE-CLOUD/image/upload/v1/.../photo.jpg`)

---

## ✍️ Ajouter une actualité

Créez un fichier dans `_posts/` avec le format de nom : `AAAA-MM-JJ-titre-de-l-article.md`

### Modèle d'article :
```markdown
---
layout: post
title: "Titre de l'événement"
date: 2025-05-08 10:00:00 +0200
category: Cérémonie          # ou : Événement, Vie de l'association
lieu: "Nom du lieu, Ville"
image: "https://res.cloudinary.com/votre-cloud/image/upload/v1/evenements/photo.jpg"
galerie:
  - url: "https://res.cloudinary.com/votre-cloud/image/upload/v1/evenements/photo1.jpg"
    alt: "Description photo 1"
  - url: "https://res.cloudinary.com/votre-cloud/image/upload/v1/evenements/photo2.jpg"
    alt: "Description photo 2"
---

Texte de l'article ici...

## Sous-titre

Autre paragraphe.
```

---

## 📬 Formulaire de contact (Formspree)

1. Créez un compte gratuit sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez votre ID (ex: `xpwzabcd`)
3. Dans `contact.md`, remplacez `VOTRE_ID_FORMSPREE` par cet ID

---

## 📁 Structure des fichiers

```
medaille-militaire/
├── _config.yml          ← Configuration du site
├── _layouts/            ← Templates HTML
├── _includes/           ← Header et footer
├── _posts/              ← Articles de blog (actualités)
├── assets/
│   ├── css/main.css     ← Styles
│   └── js/main.js       ← Scripts
├── index.html           ← Page d'accueil
├── association.md       ← Page "L'Association"
├── actualites.html      ← Liste des actualités
└── contact.md           ← Page contact
```

---

## 💰 Coût total : 0 €

| Service | Usage | Coût |
|---------|-------|------|
| GitHub Pages | Hébergement | Gratuit |
| Jekyll | Générateur de site | Gratuit |
| Cloudinary | Photos (25 Go) | Gratuit |
| Formspree | Formulaire contact (50/mois) | Gratuit |
