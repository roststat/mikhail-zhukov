import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Категория',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
    }),
  ],
})
