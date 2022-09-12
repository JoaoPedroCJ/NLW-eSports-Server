import { readFileSync } from 'fs'
import { resolve } from 'path'

import tags from './tags';
import paths from './paths';
import * as schemas from './schemas';
import * as securitySchemes from './securitySchemes'

const description = readFileSync(resolve(__dirname, 'description.md'), 'utf-8')

export default {
  openapi: '3.0.0',
  info: {
    title: 'API',
    version: '1.0.0',
    description,
  },
  servers: [
    {
      url: '/v1',
      description: 'Local',
    },
  ],
  tags,
  paths,
  components: {
    schemas,
    securitySchemes,
  }
}