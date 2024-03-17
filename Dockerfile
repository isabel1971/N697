# Use a imagem do servidor Nginx como base
FROM nginx:alpine

# Copie os arquivos HTML e qualquer outro recurso estático para o diretório de documentos padrão do Nginx
COPY . /usr/share/nginx/html

# Instale o utilitário 'curl' para realizar solicitações HTTP
RUN apk --no-cache add curl

# Copie o script de inicialização do contêiner para o diretório raiz do sistema de arquivos
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Defina permissões de execução para o script de entrada do contêiner
RUN chmod +x /docker-entrypoint.sh

# Exponha a porta 80 para fora do contêiner
EXPOSE 80

# Execute o script de entrada do contêiner quando o contêiner for iniciado
ENTRYPOINT ["/docker-entrypoint.sh"]
