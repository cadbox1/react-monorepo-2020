rm -rf node_modules/
rm -rf package-lock.json
rm -rf yarn.lock
rm -rf packages/*/node_modules/ 
rm -rf packages/*/package-lock.json 
rm -rf packages/*/yarn.lock
cd packages/app && npx jest --clearCache
