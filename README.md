# axlan.de

Statische Website für die LAN-Party **AXLAN**, gebaut mit [Jekyll](https://jekyllrb.com/)
und dem Theme [Basically Basic](https://mmistakes.github.io/jekyll-theme-basically-basic/)
(Skin `night`).

## Struktur

```
.
├── _config.yml                    # Site-Einstellungen & Theme
├── Gemfile                        # Ruby-Abhängigkeiten (inkl. Theme)
├── index.html                     # Startseite = Blog (Hero-Bild)
├── packliste.md                   # Seite „Packliste“
├── orga.md                        # Seite „Orga-Team“
├── _posts/                        # Blogbeiträge (YYYY-MM-DD-titel.md)
├── _data/theme.yml                # Skin & Menü-Reihenfolge
└── assets/
    ├── stylesheets/main.scss      # Theme-Import + eigene Styles
    └── img/                        # Logo, Favicons
```

Layouts und Includes liefert das Theme – eigene Anpassungen kommen in
`assets/stylesheets/main.scss` oder überschreiben bei Bedarf einzelne
Theme-Dateien.

Der Skin wird in `_data/theme.yml` (`skin: night`) gesetzt. Das Logo
(`assets/img/axlan_logo.png`) dient auf der Startseite als Hero-Bild;
über die Sass-Variable `$intro-image-color-overlay: true;` in
`assets/stylesheets/main.scss` liegt ein farbiges Overlay darüber, damit
es sich in den dunklen Skin einfügt.

## Lokal starten

```bash
bundle install
bundle exec jekyll serve
```

Danach im Browser: http://localhost:4000

## Neuen Blogpost anlegen

Neue Datei in `_posts/` nach dem Schema `JJJJ-MM-TT-titel.md` mit Front-Matter:

```markdown
---
title: "Titel des Beitrags"
date: 2026-08-01 18:00:00 +0200
author: Dein Name
---

Inhalt …
```

Das Layout (`single`) wird automatisch über die Defaults in `_config.yml`
gesetzt – es muss nicht pro Beitrag angegeben werden.

## Deployment

Kompatibel mit GitHub Pages, GitLab Pages, Netlify oder jedem Webspace
(einfach den Inhalt von `_site/` hochladen).
