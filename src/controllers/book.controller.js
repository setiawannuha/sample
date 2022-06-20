module.exports = {
  store: (req, res) => {
    try {
      const { user_id, title, description } = req.body
      console.log(req.body)
      res.json({
        data: null,
        message: 'store book success'
      })
    } catch (error) {
      res.json(err)
    }
  }
}