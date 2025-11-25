// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'eggadvisor-sanity',

  projectId: 'yp8r4lt8',
  dataset: 'production',

  // Where the Studio lives
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // HOMEPAGE – singleton
            S.listItem()
              .title('Homepage')
              .id('homePageSingleton')
              .child(
                S.document()
                  .schemaType('homePage')   // 👈 MUST match schema `name`
                  .documentId('homePage')   // 👈 fixed ID, only one doc
                  .title('Homepage content')
              ),

            S.divider(),

            // All other document types (team, clinic, faq, etc.) are shown automatically
            ...S.documentTypeListItems().filter(
              (listItem) => listItem.getId() !== 'homePage'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
