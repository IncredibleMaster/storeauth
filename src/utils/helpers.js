export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100)
  return newNumber;
};

export const getUniqueValues = (data,type) => {
  let unique = data.map((item)=> item[type])

  if(type === 'colors'){
    unique = unique.flat()
  }
  return ['all',...new Set(unique)]

};
