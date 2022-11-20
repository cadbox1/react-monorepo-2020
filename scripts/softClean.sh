rm -rf node_modules/
rm -rf packages/*/node_modules/ 
cd packages/app && npx jest --clearCache
