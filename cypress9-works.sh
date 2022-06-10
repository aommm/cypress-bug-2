pushd cypress9
CYPRESS_baseUrl=http://fail.com npx cypress run --config baseUrl=http://google.com
popd
