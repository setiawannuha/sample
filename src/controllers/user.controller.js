module.exports = {
  index: (req, res) => {
    try {
      res.json({
        data: null,
        message: 'get all user success'
      })
    } catch (error) {
      res.json(err)
    }
  },
  detail: (req, res) => {
    try {
      const id = req.params.id
      console.log(id)
      res.json({
        data: null,
        message: 'get detail user success'
      })
    } catch (error) {
      res.json(err)
    }
  },
  store: (req, res) => {
    try {
      const { fullname, phone, address } = req.body
      console.log(req.body)
      res.json({
        data: null,
        message: 'store user success'
      })
    } catch (error) {
      res.json(err)
    }
  },
  update: (req, res) => {
    try {
      const id = req.params.id
      const { fullname, phone, address } = req.body
      console.log(id)
      console.log(req.body)
      res.json({
        data: null,
        message: 'update user success'
      })
    } catch (error) {
      res.json(err)
    }
  },
  destroy: (req, res) => {
    try {
      try {
        const id = req.params.id
        console.log(id)
        res.json({
          data: null,
          message: 'destroy user success'
        })
      } catch (error) {
        res.json(err)
      }
    } catch (error) {
      res.json(err)
    }
  }
}