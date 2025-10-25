# Usa Node 20 como base
FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY . .

# Build do Next
RUN yarn build

# Expõe a porta 3000
EXPOSE 3000

# Comando de start
CMD ["yarn", "start"]
