import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'Products',
  title: 'Produse',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Nume produs',
      type: 'string',
      description: 'numele produsului',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Design',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Pret',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
    },
    {
      name: 'toppings',
      title: 'Categorii',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      console.log('stay');
      const tops = Object.values(toppings).filter(
        (topping) => topping !== undefined
      );
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
