# 1. Clonar o repositório
git clone -b develop https://github.com/paulom55502/trabalho-tecweb.git

# 2. Entrar na pasta do projeto
cd trabalho-tecweb/Lista-de-Compras

# 3. Subir o container
docker compose up -d

# 4. Instalar as dependências e rodar (dentro do container)
docker compose exec app npm install
docker compose exec app npm run dev
