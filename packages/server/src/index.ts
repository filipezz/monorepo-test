import express from 'express'
import { main } from '@monorepo/prisma'
const app = express()

console.log(main())
app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
