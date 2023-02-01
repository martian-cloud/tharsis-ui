#!/bin/sh -e
set -e

# Replace env var placeholder in env.js file
sed -i 's#__THARSIS_API_ENDPOINT__#'"$THARSIS_API_ENDPOINT"'#g' /bin/www/env.js

exec "$@"
