import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Статья',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'categories',
      title: 'Категории',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Время чтения (мин)',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Обложка',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Описание изображения',
        })
      ]
    }),
    defineField({
      name: 'body',
      title: 'Текст статьи',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'mainImage',
    },
  },
})
