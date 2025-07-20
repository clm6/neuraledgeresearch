import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'NeuralEdge Research CMS',
  projectId: 'roddowtr',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
}) 