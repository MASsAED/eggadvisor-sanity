// sanity/schemas/teamMember.ts
import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'teamMember',          // 👈 this name MUST be "teamMember"
  title: 'Team member',
  type: 'document',
  icon: UserIcon,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Full name shown in the team section.',
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g. Founder, Clinical Advisor, Product Lead',
    }),
    defineField({
      name: 'bio',
      title: 'Short bio',
      type: 'text',
      rows: 3,
      description: '2–3 lines max. This appears in the team section.',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      description: 'Square or portrait works best.',
    }),
    defineField({
      name: 'priority',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first on the homepage.',
    }),
    defineField({
      name: 'visibleOnHomepage',
      title: 'Show on homepage?',
      type: 'boolean',
      initialValue: true,
      description: 'Untick if you want to hide this person from the homepage team section.',
    }),
  ],
})
