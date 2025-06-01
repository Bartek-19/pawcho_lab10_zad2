# Zadanie 2, Laboratorium 10, Programowanie Aplikacji w Chmurze Obliczeniowej

Aplikacja została utworzona na podstawie repozytorium PAwCHO_Lab8_Zad1, wykorzystując pipeline CI oparty na Github Actions.

Poniżej przedstawione są odpowiednie kroki wykorzystane do utworzenia aplikacji:

## 1. Pobranie kodu aplikacji

Przy pomocy polecenia git pull lub ręcznie z github.com

## 2. Utworzenie repozytorium lokalnego

gh auth login

git init -b main

gh repo create

git add .

git commit -m "Init"

git push -u origin main

## 3. Opracowanie workflow Github Actions - wykorzystane akcje:

- Checkout - udostępnienie repozytorium dla workflow
- Docker Metadata - przypisanie metadanych w formie tagów do obrazów Dockera
- Docker QEMU set-up
- Docker Buildx set-up - ustawienie buildera obrazów
- Docker Login - zalogowanie się do DockerHub oraz do registry ghcr.io
- Docker Build/Push - budowanie i zamieszczanie obrazu Dockera na DockerHub

## 4. Dodanie zmiennych i sekretów do repozytorium

(Github) USERNAME, DOCKERHUB_USERNAME, (Github) TOKEN, DOCKERHUB_TOKEN

## 5. Uruchomienie workflow

gh workflow run

gh run view - sprawdzenie działania
