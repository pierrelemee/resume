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
