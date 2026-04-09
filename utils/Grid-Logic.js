export function chunkArray(arr, sizes) {
  let index = 0;
  return sizes.map((size) => {
    const chunk = arr.slice(index, index + size);
    index += size;
    return chunk;
  });
}
