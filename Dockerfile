FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

# Use vite's preview server
EXPOSE 4173
CMD ["npm", "run", "serve"]
