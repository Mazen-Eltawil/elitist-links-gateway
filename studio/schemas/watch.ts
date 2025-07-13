export default {
  name: 'watch',
  title: 'Watch',
  type: 'document',
  fields: [
    { name: 'brand', title: 'Brand', type: 'string' },
    { name: 'referenceNumber', title: 'Reference Number', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'status', title: 'Status', type: 'string', options: { list: [{title: 'Active', value: 'active'}, {title: 'Sold', value: 'sold'}], layout: 'radio' } },
    { name: 'whatsAppLink', title: 'WhatsApp Link', type: 'url' },
  ],
} 