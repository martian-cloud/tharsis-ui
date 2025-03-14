#!/bin/sh -e
set -e

# Replace env var placeholder in env.js file
sed -i 's#__THARSIS_API_ENDPOINT__#'"$THARSIS_API_ENDPOINT"'#g' /bin/www/env.js
sed -i 's#__THARSIS_DOCUMENTS_URL__#'"$THARSIS_DOCUMENTS_URL"'#g' /bin/www/env.js
sed -i 's#__THARSIS_UI_VERSION__#'"$THARSIS_UI_VERSION"'#g' /bin/www/env.js
sed -i 's#__THARSIS_SUPPORT_URL__#'"$THARSIS_SUPPORT_URL"'#g' /bin/www/env.js

exec "$@"
