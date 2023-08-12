echo "|-----------------------------------|"
echo "|        Pulling latest code        |"
echo "|-----------------------------------|"
git pull

echo "|---------------------------------------|"
echo "|        Installing dependencies        |"
echo "|---------------------------------------|"
yarn

echo "|------------------------------|"
echo "|        Creating build        |"
echo "|------------------------------|"
yarn build