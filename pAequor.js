// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//
const pAequorFactory = (num, arr) => {
  return {
    specimentNum: num, 
    dna: arr,
    mutate(){
      let i  = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase();
      while (this.dna[i] === newBase) {
        newBase = returnRandBase();
      } 
      this.dna[i] = newBase;
      console.log(this.dna)
      return this.dna  
    },
    compareDNA(otherObj){
      let total = 0
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] == otherObj.dna[i]) {
          total++;
        }
      } console.log('specimen #1 and specimen #2 have ' + (total/this.dna.length)*100 + '% DNA in common')
    },
    willLikelySurvive(){
      let total = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] == 'C' || this.dna[i] == 'G'){
          total++;
        }
      }
      let perc = (total/this.dna.length)*100
      if (perc > 60) {
        return true;
      } else {
        return false;
      }
    },
  }   
}

let pAequorList = []
let pAequorID = 1;

while (pAequorList.length < 30) {
  let pAequor = pAequorFactory(pAequorID, mockUpStrand());
  if(pAequor.willLikelySurvive()) {
    pAequorList.push(pAequor)
  } pAequorID++;
}

console.log(pAequorList)
