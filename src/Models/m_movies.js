const db = require('./db')

const Create = async (data) =>{
  try{
    let result = await db("movies").insert({
      title: data[0],
      link: data[1],
      img: data[2]
    })
    
    if(result.rowCount > 0) return true; else return false;
  }catch( err ){
    console.error(`Error Query ${err}`)
    return false
  }
}

const Update = async (data) =>{
  
  try{
    let result = await db('movies').where({ id: data[0] }).update({
      title: data[1],
      link: data[2],
      img: data[3]
    })
    
    return result
  }catch( err ){
    console.error(`Error Query ${err}`)
    return false
  }
}

const Delete = async (id) =>{
  try{
    let result = await db('movies').where({id: id}).del()
    return result
  }catch( err ){
    console.error(`Error Query ${err}`)
    return false
  }
}

const Consult = async (id) =>{
  try{
    
    let result = await db('movies').where({id: id}).then( row => {
      return row
    })
    return result
  }catch( err ){
    console.error(`Error Query ${err}`)
    return false
  }
}

const All = async () =>{
  try{
    let result =  await db('movies').then( row =>{
      return row
    })

    return result
  }catch( err ){
    console.error(`Error Query ${err}`)
    return false 
  }
}

module.exports = {
  insert: Create,
  modificar: Update,
  eliminar: Delete,
  byid: Consult,
  todo: All,
}