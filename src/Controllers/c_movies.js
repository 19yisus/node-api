const { insert, modificar, eliminar, byid, todo } = require('../Models/m_movies')

class c_movies{
  
  async getAll(req, res){
    let results = await todo()
    if(results[0] != undefined) return res.status(200).json(results); else return res.status(400).json({'message': 'No hay datos registrados'})
  }

  async getByid(req, res){
    let result = await byid(req.params.id)
    if(result[0] != undefined) return res.status(200).json(result); else return res.status(400).json({'message': 'El id es invalido o no esta registrado'})
  }

  async create(req, res){
        
    const { title, link, img } = req.body
    if(title != undefined && link != undefined && img != undefined){
      let result = await insert([title, link, img])
      if(result) return res.status(200).json({'messages': 'Create'}); else return res.status(400).json({'message': 'Algo anda mal'})

    }else return res.status(400).json({'message': 'Los datos estan incompletos'})
  }

  async update(req, res){
    const { title, link, img } = req.body
    const id = req.params.id
    if(id != undefined || title != undefined && link != undefined && img != undefined){
      let result = await modificar([id, title, link, img])
      if(result) return res.status(200).json(result); else return res.status(500).json({'message': 'Algo ah ocurrido y la operacion fallo'})

    }else return res.status(400).json({'message': 'Los datos estan incompletos'})
  }

  async delete(req, res){
    const id = req.body.id
    if(id != undefined){
      let result = await eliminar(id)
      if(result) return res.status(200).json({'message': 'Pelicula eliminada'}); else return res.status(400).json({'message': 'El id es invalido o no esta registrado'})

    }else res.status(400).json({'message': 'El id es requerido para esta operacion'})
  }
}

module.exports = new c_movies()