#!/bin/bash


if [[ $# -eq 0 ]]; then
  echo "No argument provided. Exiting..."
  exit 1
fi

if [[ $# -gt 1 ]]; then
  echo "Too many arguments provided. Exiting..."
  exit 1
fi

# Store the argument in a variable
input_str=$1

echo "Input string is: $input_str"


# if git add -p | grep -q "No changes"; then
#   echo "No changes to add. Exiting..."
#   exit 0
# fi


git add -p

git add .

echo "Commiting"; 
git commit -m "$input_str";



echo "Pushing to Main Stream"; 
git push -u origin main;