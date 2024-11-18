# Image Gallery Web App

![Last Commit](https://img.shields.io/github/last-commit/Siphon880gh/image-gallery/main)
<a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" style="max-width:8.5ch;"></a>
<a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue" style="max-width:10ch;"></a>
<a target="_blank" href="https://www.youtube.com/@WayneTeachesCode/" rel="nofollow"><img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red" style="max-width:10ch;"></a>

:page_facing_up: Description:
---
By Weng Fei Fung

Image galleries with optional credentials. Control what images your friends see with different URLs.

:open_file_folder: Table of Contents:
---
- [Description](#description)
- [Preview](#camera-preview)
- [Installation and Usage](#minidisc-installation-and-usage)
- [Advanced Use](#computer-advanced-use)

:camera: Preview:
---
![image](docs/screenshot.png)

## :minidisc: Installation and Usage:
Run on a node server. This image gallery lets you send different links to friends that controls which images they can see.

## :computer: Advanced Use:
You can control what image galleries your friends see by adding a credentials query in the url (?creds=...) and setting the collections on your host server. Make sure to share the right url to your friends. If the url has an incorrect or no credentials, default credentials take place which is * on your host server settings.

The setting is at credentials.json. The image galleries are in public/collections.
