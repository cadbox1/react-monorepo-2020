rm -rf node_modules/
rm -rf packages/*/node_modules/ 
rm -rf packages/*/dist
cd packages/app && npx jest --clearCache