#!/usr/bin/env bash

src_dir="artwork"
dst_dir="thumbnails"

find "$src_dir" -type f \( \
  -iname "*.jpg" -o \
  -iname "*.jpeg" -o \
  -iname "*.png" -o \
  -iname "*.tif" -o \
  -iname "*.tiff" \
\) -print0 |
while IFS= read -r -d '' input_file; do
  relative_path="${input_file#"$src_dir"/}"
  output_file="$dst_dir/${relative_path%.*}.webp"

  mkdir -p "$(dirname "$output_file")"

  echo "Converting: $input_file"

  magick "$input_file" \
    -auto-orient \
    -resize "500x500>" \
    -quality 80 \
    "$output_file"
done

echo "Finished. Converted images are in $dst_dir"