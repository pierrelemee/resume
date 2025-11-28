# La route du vin

## Preinstall

Before building Docker containers, generate locally-trusted certificates (via `mkcert`):

```bash
cd .docker/nginx/ssl

CAROOT=$(pwd) mkcert -install
# Optional, if not stored on the system already
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "$(pwd)/rootCA.pem"

# Create certificates for domain
CAROOT=$(pwd) mkcert 'dev.pierrelemee.fr'

# Register domain as local domain
echo '127.0.0.1 dev.pierrelemee.fr' | sudo tee -a /etc/hosts
```

Build and push Docker image:

```bash
# Before push, make sure you're logged in to Github Container Registry :
echo $GH_PAT | docker login ghcr.io -u pierrelemee --password-stdin

# Before build, make sure you're using a multi-arch `buildx` builder
GTAG_ID=<GTAG_ID> docker buildx build --platform linux/amd64 --no-cache . -f .docker/Dockerfile -t ghcr.io/pierrelemee/resume:$(git rev-parse HEAD) -t ghcr.io/pierrelemee/resume:latest --push
```
