// sanity/schemas/clinic.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'clinic',
  title: 'Clinic',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Clinic name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'E.g. "London Fertility Centre"',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'E.g. "London", "Dubai"',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Short label to show under the clinic name.',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      rows: 3,
      description: '1–2 sentences. This is shown in the spotlight card.',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Clinic website (optional).',
    }),
    defineField({
      name: 'order',
      title: 'Order on page',
      type: 'number',
      description: 'Lower numbers appear first in the spotlight/list.',
    }),
  ],
  orderings: [
    {
      title: 'Order (low → high)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
