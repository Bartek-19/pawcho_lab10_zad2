# Użyj lekkiego obrazu Node.js
FROM node:18-alpine

# OCI Metadata
LABEL org.opencontainers.image.authors="Bartosz Klimiuk"

# Ustaw zmienną środowiskową z informacją o autorze
ENV author="Bartosz Klimiuk"

WORKDIR /app

COPY app/package*.json ./

RUN npm install

# Skopiuj resztę plików aplikacji
COPY app/ .

EXPOSE 8000
HEALTHCHECK --interval=10s --timeout=1s CMD curl -f http://localhost:8000/ || exit 1
# Uruchom aplikację
CMD ["npm", "start"]
