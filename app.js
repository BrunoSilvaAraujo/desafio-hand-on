require('dotenv').config();
const express = require('express')
const axios = require('axios')
const fs = require('fs')
const app = express()
const port = 3000


app.get('/', async (req, res) => {

	let response = `<html><head><title>Desafio</title></head><body>`

	await axios.get(process.env.URL ).then(resp => {
		console.log(resp.data)

		resp.data.map((item, i) => {
		if ( i <= 99 ){
				response += `<h3>${item.albumId} / ${item.id} - ${item.title}</h3><img src='${item.url}'/><br />`
			}
		})
	})
	

	response += `</body>`

	res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})