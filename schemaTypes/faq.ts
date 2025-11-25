// sanity/schemas/faq.ts
import {defineType, defineField} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: HelpCircleIcon,

  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question users usually ask',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      description: 'Clear, short answer to the question',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
