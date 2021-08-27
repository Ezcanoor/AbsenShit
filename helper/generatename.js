
const generatename = (gender, name) => {
  if(gender.toLowerCase() === 'male'){
    return `Tn. ${name}`
  } else {
    return `Ny. ${name}`
  }
}

module.exports = generatename