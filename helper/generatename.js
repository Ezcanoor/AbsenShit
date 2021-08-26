
const generatename = (gender, name) => {
  if(gender === 'male'){
    return `Tn. ${name}`
  } else {
    return `Ny. ${name}`
  }
}

module.exports = generatename