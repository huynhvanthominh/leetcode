#!/bin/bash

files=($(find src/ -type f))
for i in "${!files[@]}"; do
  echo "[$i] ${files[$i]}"
done

echo "Chọn số file:"
read index
selected=${files[$index]}

echo "Chạy file: $selected"
npx ts-node-dev ./runner.js "$selected"

