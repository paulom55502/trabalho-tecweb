# 1. Clonar o repositório (branch develop)
git clone -b develop https://github.com/paulom55502/trabalho-tecweb.git

# 2. Entrar na pasta do projeto
cd trabalho-tecweb

# 3. Subir o container
docker compose up -d

# 4. Instalar as dependências e rodar

docker compose exec app npm install

docker compose exec app npm run dev

# 5-Acessar no navegador
http://localhost:5173
